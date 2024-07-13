import { useState } from "react";
import { GenForm } from "./components/general.jsx";
import "./App.css";

function App() {
  const [name, setName] = useState("John Smith");
  const [number, setNumber] = useState("1234567890");
  const [email, setEmail] = useState("example@gmail.com");


  return (
    <>
      <GenForm
        name={name}
        setName={setName}
        number={number}
        setNumber={setNumber}
        email={email}
        setEmail={setEmail}
      />
    </>
  );
}

export default App;
