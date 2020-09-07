import React from "react";
import "./styles.css";
import Card from "./Card";
import Carddata from "./CardData";

export default function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Our Services </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            {/* gutter 'gy' is used to add pace vertically gx is used horrizontLLY */}
            <div className="row gy-4">
              {Carddata.map((val, i) => <Card key={i} imgsrc={val.imgsrc} title={val.title} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
