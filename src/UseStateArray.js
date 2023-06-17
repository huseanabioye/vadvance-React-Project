// import React, { useState } from "react";
import React from "react";
import { data } from "./data";
import { UseState } from "./UseState";

export const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    
    setPeople(people.filter((person) => person.id !== id));
  };
  const clearAllItems = () => {
    setPeople([]);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        // console.log(person);
        return (
          <div key={id}>
            <h1 style={{color:"blue"}}>{name}</h1>
            <button className="btn"  onClick={() =>removeItem(id)}>removeItem x</button>
          </div>
        );
      })}
      <button className="btn" onClick={clearAllItems}>clearAllItems x</button>
    </div>
    
  );
};
