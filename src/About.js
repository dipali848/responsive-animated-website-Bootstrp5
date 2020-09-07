import React from "react";
import "./styles.css";
import web from "../src/images/aboutus.jpg";
import Common from './Common';

export default function About() {
  return (
    <>
    <Common name='Welcome to about page' imgsrc={web} visit='/contact'
    btnname='Contact Now'/>
    </>
  );
}
