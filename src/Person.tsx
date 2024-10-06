// We create a new interface defining the type of props that the component will receive

import React, { useContext, useState } from "react";
import { PersonContext } from "./PersonContext";

interface PersonProps {
  name: string;
  age: number;
}

const Person = (props: PersonProps) => {
  // We need to define the props by using interface to strictly define the type of props

  const [showStats, setShowStats] = useState<boolean | null>(false);

  const [bio, setBio] = useState<string | null>(null);

  const { persons, addPerson, deletePerson } = useContext(PersonContext);

  const toggleStats = () => {
    setShowStats((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <button onClick={toggleStats}>Click!</button>
      {showStats && (
        <>
          <p>Person Index</p>
          <p>Name: {props.name}</p>
          <p>Age: {props.age}</p>

          <p>Bio: {!bio ? "No bio available" : bio}</p>
        </>
      )}
      {!showStats && <p>Press Button</p>}
      <input onChange={handleChange} />
    </div>
  );
};

export default Person;
