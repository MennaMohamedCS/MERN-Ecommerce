import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 md:gap-6 mx-20 z-0">
        <Link to="/Products/Bikes">
          <div className="relative z-0 grid justify-items-center ">
            <h1 className="relative z-1 top-20  text-5xl font-mono">Bikes</h1>
            <img
              src="https://i.pinimg.com/564x/a0/9d/01/a09d01662f95c029550ef0a0b1e7455f.jpg"
              alt="Bike"
              className="w-full h-screen rounded-3xl"
            />
          </div>
        </Link>
        <Link to="Products/Skateboards">
          <div className="relative z-0 grid justify-items-center">
            <h1 className="relative z-1 top-20  text-5xl font-mono">
              Skateboards
            </h1>
            <img
              src="https://i.pinimg.com/564x/9c/6f/a0/9c6fa0124f8f2fe7e8615bb6dbaa1647.jpg"
              alt="Skateboard"
              className="w-full h-screen rounded-3xl"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
