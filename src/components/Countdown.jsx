import { useCallback, useEffect, useState } from "react";
import { Button, Modal, Select } from 'flowbite-react';
import { db ,auth} from "../config/firebase";
import { updateDoc, getDocs, getDoc, doc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const Countdown = () => {
  const [eventData,setEventData]=useState(null);
  const [eventIds,setEventIds]=useState();
  const [openModal, setOpenModal] = useState(false);  
  const [modalPlacement, setModalPlacement] = useState('center')
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [event,setEvent]=useState();
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const eventCollectionRef=collection(db,"CLEANUP_EVENTS")
  var ids;
  // const docref=doc(db,"CLEANUP_EVENTS",ids);
  const navigate=useNavigate();
  useEffect(() => {
    const getEventList = async () => {
      try {
        const data = await getDocs(eventCollectionRef);
        const filteredData =data.docs.map((doc)=>({
          ...doc.data(),
          id:doc.id
        }))
        console.log("fileterd DAta ",filteredData)
        ids=filteredData.map((item)=>item.id)
        console.log(ids)
        setEventIds(ids);
        // const eventsList = data.docs[0].data().eventsList;
        // console.log(eventsList)
        setEventData(filteredData)
        console.log("event data",eventData)
        console.log("event ids",eventIds)
        // console.log(filteredData)
      } catch (err) {
        console.log("error fetching events list", err);
      }
    };
    getEventList();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          console.log("currenuid",currentUser.uid)
          // Fetch data of the document where document ID is equal to the UID of the logged-in user
          const userDocRef = doc(db, "USERS", currentUser.uid);
          const userDocSnapshot = await getDoc(userDocRef);
          if (userDocSnapshot.exists()) {
            setLoggedInUser(userDocSnapshot.data());
            console.log("loggedInUser",loggedInUser)
          } else {
            console.log("User document not found!");
          }
        }
      } catch (error) {
        console.error("Error fetching user document:", error);
      }
    };

    const unsubscribe = auth.onAuthStateChanged(fetchData);
    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const currentUser = auth.currentUser;
  //       if (currentUser) {
  //         // Fetch data of the document where document ID is equal to the UID of the logged-in user
  //         const userDocRef = doc(db, "USERS", currentUser.uid);
  //         const userDocSnapshot = await getDoc(userDocRef);
  //         if (userDocSnapshot.exists()) {
  //           setLoggedInUser(userDocSnapshot.data());
  //           console.log("loggedInUser",loggedInUser)
  //         } else {
  //           console.log("User document not found!");
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user document:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const [countDownTime, setCountDownTIme] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownTime - currentTime;
    let days =
      Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))
        : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
        : `0${Math.floor(
            (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))
        : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDiffrence % (60 * 1000)) / 1000)
        : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
    if (timeDiffrence < 0) {
      setCountDownTIme({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };
  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth() + 1,
      customDate.getDate() + 6,
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds() + 1
    );
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, []);

  async function handleParticipateClick() {
    if (loggedInUser) {
      if (eventIds) {
        const examcollref = doc(db, "CLEANUP_EVENTS", eventIds[0]);
        const docSnapshot = await getDoc(examcollref);
        const existingRegisteredUsers = docSnapshot.data().registeredUsers;
  
        // Check if registeredUsers is an array, if not, initialize it as an empty array
        const updatedRegisteredUsers = Array.isArray(existingRegisteredUsers)
          ? [...existingRegisteredUsers, loggedInUser]
          : [loggedInUser];
  
        // Update the document with the modified registeredUsers array
        updateDoc(examcollref, {
          registeredUsers: updatedRegisteredUsers
        }).then(response => {
          alert("updated");
        }).catch(error => {
          console.log(error.message);
        });
      }
    } else {
      navigate("/register");
    }
  }
  
  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  return (
    <div className="flex justify-center items-center  bg-[#164863]">
      <div className="mx-3 sm:p-10 p-4 rounded-md flex justify-center flex-col gap-6 shadow-[5px_5px_50px_rgba(47,46,60,1)]">
        <div className="flex flex-col gap-2">
          <h1 className="text-center sm:text-3xl text-xl font-semibold leading-8 text-[#FBFAF8]">
            Hurry, Limited Availability
          </h1>
          <span className="text-sm font-semibold text-center leading-8 text-[#959AAE]">
            Be a part of Something Good, For Society and Your Own Self
          </span>
        </div>
        <div className="flex justify-between sm:px-4">
          <div className="flex flex-col justify-center items-center gap-3">
            <span className="py-3 px-3 flex justify-center items-center bg-[#88BDBC] text-[#112D32] text-3xl font-semibold rounded-md">
              {countDownTime?.days}
            </span>
            <span className="text-sm text-[#FBFAF8] font-bold">
              {countDownTime?.days == 1 ? "Day" : "Days"}
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <span className="py-3 px-3 bg-[#88BDBC] text-[#112D32] text-3xl font-semibold rounded-md">
              {countDownTime?.hours}
            </span>
            <span className="text-sm text-[#FBFAF8] font-bold">
              {countDownTime?.hours == 1 ? "Hour" : "Hours"}
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <span className="py-3 px-3 bg-[#88BDBC] text-[#112D32] text-3xl font-semibold rounded-md">
              {countDownTime?.minutes}
            </span>
            <span className="text-sm text-[#FBFAF8] font-bold">
              {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <span className="py-3 px-3 bg-[#88BDBC] text-[#112D32] text-3xl font-semibold rounded-md">
              {countDownTime?.seconds}
            </span>
            <span className="text-sm text-[#FBFAF8] font-bold">
              {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
            </span>
          </div>
        </div>

            <div className="flex flex-wrap gap-4">
            
            <Button
                onClick={() => setOpenModal(true)} 
                className="w-full bg-[#9ba2a7] hover:bg-transparent text-xl border-2
                  border-[#9ba2a7] px-4 py-2 rounded-md hover:border-[#a1c3db] shadow-xl
                  text-white delay-125 duration-500">Click For More Details</Button>
            </div>
          
            <Modal
            className=" w-1/2 h-1/2 bg-opacity-0 mx-auto my-auto  "
          show={openModal}
          position={modalPlacement}
          onClose={() => setOpenModal(false)}
        >
        <Modal.Header className="p-6">{eventData && eventData.length > 0 && (
            <div>
              <p>Name: {eventData[0].name}</p>
              {/* Display other event details here as needed */}
            </div>
         )}
      </Modal.Header>
        <Modal.Body>
        <div>
          {eventData && eventData.length > 0 && (
            <>
              
              <p className="font-bold">Description:</p>
              <p>{eventData[0].description}</p>
              <p className="font-bold">Location:</p>
              <p>{eventData[0].location}</p>
              <p className="font-bold">Type:</p>
              <p>{eventData[0].type}</p>
            </>
          )}
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="bg-yellow-500" onClick={() => {
            handleParticipateClick();

          }}>Participate</Button>
        </Modal.Footer>
            </Modal>

          <div>
          
          </div>
      </div>
    </div>
  );
};
export default Countdown;