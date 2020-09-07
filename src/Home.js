import React from "react";
import "./styles.css";
import Common from './Common';
import web from "../src/images/globe.jpg";

export default function Home() {
  return (
    <>
    <Common name='Grow your Business with' imgsrc={web} visit='/service'
    btnname='Get Started'/>
    </>
  );
}
