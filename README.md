# Intro to TypeScript

## Why do we need TypeScript?

TypeScript is a superset of JavaScript that adds optional types to the language. It is a statically typed language that is compiled to JavaScript. TypeScript is designed for the development of large applications and can be used to develop JavaScript applications for both client-side and server-side execution.

For example, in typescript, if we want to declare a variable, we need to specify the type of the variable. This is not the case in JavaScript.

```
let a: number = 5;
let b: string = "Hello";
let c: boolean = true;
```

## How to make React components in TypeScript?

To create a React component in TypeScript, we need to define the type of the props. Head to Person.tsx to see an example of a React component in TypeScript. In Person.tsx, we have defined the type of the props as follows:

```
interface PersonProps {
  name: string;
  age: number;
}
```

This tells the compiler that the props for the Person component should have a name of type string and an age of type number. If instead of a single Person object, we hve a list of Person objects, we can sinply say props: PersonProps[].

## How to use hooks in TypeScript?

For useState, we should specify the type of the state variable using <>. For example, if we want to create a state variable that is a string, we can do the following:

```
const [name, setName] = useState<string>("");
```

Now let's say we want to make sure that apart from string, it can also take null. We can use union and do the following:

```
const [name, setName] = useState<string | null>(null);
```

Using form elemetns like input is a bit tricky in TypeScript. We need to specify the type of the event object. For example, if we want to get the value of the input element on change, we can do the following:

```
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setName(e.target.value);
}
```

There are differennt types of events in React like MouseEvent, KeyboardEvent, FormEvent etc. We need to specify the type of the event object accordingly.

## How to use context in TypeScript?

For context, we need to define the type of context object. Head to PerosnContext.tsx to see how that is done.