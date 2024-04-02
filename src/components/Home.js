import React from "react";
import {username, city, color} from "../data/user.js"

function Home({ color, username, city }) {
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
