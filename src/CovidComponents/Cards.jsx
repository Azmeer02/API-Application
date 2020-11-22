import React from "react";

const Cards = ({ data }) => {
  return (
    <div>
      <h1>Confirmed Cases : {data && data.confirmed.value}</h1>
      <h1>Recovered : {data && data.recovered.value}</h1>
      <h1>Deaths : {data && data.deaths.value}</h1>
      <h1>Last Update : {data && new Date(data.lastUpdate).toString()}</h1>
    </div>
  );
};

export default Cards;
