import React, { createContext, useState } from "react";

// First we define the interface for the persons.
interface PersonProps {
  name: string;
  age: number;
}

// Then we define context type and the functions that will be used. We need to keep in mind that along with the argument, we need to define the return type of the function as well.
interface PersonContextType {
  persons: PersonProps[] | null;
  addPerson: (person: PersonProps) => void;
  deletePerson: (name: string) => void;
}

// We define the initial context.
const contextInit = {
  persons: null,
  addPerson: () => null,
  deletePerson: () => null,
};

// We create the context and export it. We need to define the type of the context as well using <>.
export const PersonContext = createContext<PersonContextType>(contextInit);

// Then we define the props that the provider will use. Since we the children is a react node, we define it as React.ReactNode.
interface Props {
  children: React.ReactNode;
}

// We finally define the provider and the functions that will be used. We need to keep in mind that along with the argument, and the return type is also important.
export const PersonProvider = (props: Props) => {
  const [persons, setPersons] = useState<PersonProps[] | null>(null);

  const addPerson = (person: PersonProps) => {
    setPersons((prevPersons) => {
      return prevPersons ? [...prevPersons, person] : [person];
    });
  };

  const deletePerson = (name: string) => {
    console.log(name);
  };
  return (
    <PersonContext.Provider value={{ persons, addPerson, deletePerson }}>
      {props.children}
    </PersonContext.Provider>
  );
};
