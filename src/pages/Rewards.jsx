  import React from 'react';
  import Card from '../components/Card';
  import Header from '../components/Header';
  import backgroundImage from '../assets/home.svg';

  const Reward = () => {
    return (
      <div className="bg-fixed bg-cover bg-blue-300 bg-center" style={{ backgroundImage: `url(${backgroundImage})`, minHeight: '100vh' }}>
      <Header/>
      <main className="page-content flex justify-center mt-24 items-center  p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-xl font-rubik">
          <Card
            title="Hotel Stay Discounts"
            description="Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains"
            imageUrl="https://imgs.search.brave.com/0_nrP1brB5olAB02Wkw6RSPBadfZinHvNl7nd7RR4Y8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2RmLzJl/LzkwL2RmMmU5MDhj/MzM5Mjc0MDgzY2U2/ZWZiY2I1YmM3YTg2/LmpwZw"
            buttonText="Redeem"
          />
          <Card
            title="Restraunt Discounts"
            description="Plan your next beach trip with these fabulous destinations"
            imageUrl="https://imgs.search.brave.com/gOjMsmfoj1C9vQKvc84_LWVgxdRLAI8yALTAWxNrNmY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZXhhbXBsZXMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE5LzAzL01ha2Vv/dmVyLVBob3RvZ3Jh/cGh5LVZvdWNoZXIt/VGVtcGxhdGUuanBn"
            buttonText="Redeem"
          />
          <Card
            title="Hotel Stay Discount"
            description="It's the desert you've always dreamed of"
            imageUrl="https://imgs.search.brave.com/_uN8xDbxe7vXpMpLNU8ES-4MZjWjKawYcAp8WiGYNkc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzVkLzMw/LzQyLzVkMzA0MjQw/NTIzN2E2MzRmYWRl/OWM1ZTllNjY2MjEy/LmpwZw"
            buttonText="Redeem"
          />
          <Card
            title="Restraunt Discounts"
            description="Seriously, straight up, just blast off into outer space today"
            imageUrl="https://imgs.search.brave.com/e67reVesfVlUrtnqMJW5HE0HauMfVTQnnwgLRAqVrEc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9oQkxwdEpaNmRz/X25XdkFMZjJsaUcz/SmZwZDA9LzB4MDoy/MDE2eDIwMTYvZml0/LWluLzUwMHg1MDAv/OTlkZXNpZ25zLWNv/bnRlc3RzLWF0dGFj/aG1lbnRzLzY4LzY4/OTgxL2F0dGFjaG1l/bnRfNjg5ODE4MjU.jpeg"
            buttonText="Redeem"
          />
          <Card
            title="Hotel Stay Discounts"
            description="Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains"
            imageUrl="https://imgs.search.brave.com/0_nrP1brB5olAB02Wkw6RSPBadfZinHvNl7nd7RR4Y8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2RmLzJl/LzkwL2RmMmU5MDhj/MzM5Mjc0MDgzY2U2/ZWZiY2I1YmM3YTg2/LmpwZw"
            buttonText="Redeem"
          />
          <Card
            title="Restraunt Discounts"
            description="Plan your next beach trip with these fabulous destinations"
            imageUrl="https://imgs.search.brave.com/gOjMsmfoj1C9vQKvc84_LWVgxdRLAI8yALTAWxNrNmY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZXhhbXBsZXMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE5LzAzL01ha2Vv/dmVyLVBob3RvZ3Jh/cGh5LVZvdWNoZXIt/VGVtcGxhdGUuanBn"
            buttonText="Redeem"
          />
          <Card
            title="Hotel Stay Discount"
            description="It's the desert you've always dreamed of"
            imageUrl="https://imgs.search.brave.com/_uN8xDbxe7vXpMpLNU8ES-4MZjWjKawYcAp8WiGYNkc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzVkLzMw/LzQyLzVkMzA0MjQw/NTIzN2E2MzRmYWRl/OWM1ZTllNjY2MjEy/LmpwZw"
            buttonText="Redeem"
          />
          <Card
            title="Restraunt Discounts"
            description="Seriously, straight up, just blast off into outer space today"
            imageUrl="https://imgs.search.brave.com/e67reVesfVlUrtnqMJW5HE0HauMfVTQnnwgLRAqVrEc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9oQkxwdEpaNmRz/X25XdkFMZjJsaUcz/SmZwZDA9LzB4MDoy/MDE2eDIwMTYvZml0/LWluLzUwMHg1MDAv/OTlkZXNpZ25zLWNv/bnRlc3RzLWF0dGFj/aG1lbnRzLzY4LzY4/OTgxL2F0dGFjaG1l/bnRfNjg5ODE4MjU.jpeg"
            buttonText="Redeem"
          />
        </div>
      </main>
      </div>
    );
  };

  export default Reward;
