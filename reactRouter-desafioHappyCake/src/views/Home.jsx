import React from "react";
import pastelHome from "../assets/pastelHome.png";

function Home() {
  return (
    <div>
      <div className="text-center">
        <h1 className="mt-5 mb-4">
          Bienvenidos a <strong>Happy Cake</strong>
        </h1>
        <p className="mb-5">El lugar de los pasteles felices</p>
      </div>

      <div className="text-center">
        <img src={pastelHome} alt="pastelHome" style={{width:"300px"}} />
      </div>
    </div>
  );
}

export default Home;
