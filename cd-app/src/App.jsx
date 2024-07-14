import { useState } from "react";
import { GenForm } from "./components/general.jsx";
import { Education } from "./components/education.jsx";
import { Practical } from "./components/practical.jsx";


import "./App.css";

function App() {
  const [name, setName] = useState("John Smith");
  const [number, setNumber] = useState("1234567890");
  const [email, setEmail] = useState("example@gmail.com");

  const [schoolName, setSchoolName] = useState("University");
  const [major, setMajor] = useState("Major");
  const [grad, setGrad] = useState("");

  const [companyName, setCompanyName] = useState("Company");
  const [positionTitle, setPositionTitle] = useState("Position Title");
  const [responsibilities, setResponsibilities] = useState("Responsibilities");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");




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
      <Education
        schoolName={schoolName}
        setSchoolName={setSchoolName}
        major={major}
        setMajor={setMajor}
        grad={grad}
        setGrad={setGrad}
      />
      <Practical
        companyName={companyName}
        setCompanyName={setCompanyName}
        positionTitle={positionTitle}
        setPositionTitle={setPositionTitle}
        responsibilities={responsibilities}
        setResponsibilities={setResponsibilities}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}

      />
    </>
  );
}

export default App;
