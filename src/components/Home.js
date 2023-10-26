import React from "react";
import { name, city } from "../data/data.js";

export default function Home() {
  const name = "Liza";
  const city = "New York";
  // update the JSX being returned!
  return <div id="home">
    <h1>{name} is a Web Developer from {city}</h1>


  </div>
}

