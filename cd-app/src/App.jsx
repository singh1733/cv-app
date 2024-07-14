import { useState } from "react";
import { GenForm } from "./components/general.jsx";
import { Education } from "./components/education.jsx";
import { Practical } from "./components/practical.jsx";
import { Submit } from "./components/submit.jsx";

import "./App.css";

function App() {
  const [name, setName] = useState("John Smith");
  const [number, setNumber] = useState("1234567890");
  const [email, setEmail] = useState("example@gmail.com");

  const [schoolName, setSchoolName] = useState("University");
  const [major, setMajor] = useState("Major");
  const [grad, setGrad] = useState("2023-07-13");

  const [companyName, setCompanyName] = useState("Company");
  const [positionTitle, setPositionTitle] = useState("Position Title");
  const [responsibilities, setResponsibilities] = useState("Responsibilities");
  const [startDate, setStartDate] = useState("2023-07-13");
  const [endDate, setEndDate] = useState("2023-07-14");

  const [editable, setEditable] = useState(true);

  function formatDateToMonthYear(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long" };
    return date.toLocaleDateString("en-US", options);
  }

  const opacity = editable ? "1" : "0.5";

  return (
    <>
      <div className="form">
        <div style={{ opacity: opacity }}>
          <GenForm
            name={name}
            setName={setName}
            number={number}
            setNumber={setNumber}
            email={email}
            setEmail={setEmail}
            editable={editable}
          />
          <Education
            schoolName={schoolName}
            setSchoolName={setSchoolName}
            major={major}
            setMajor={setMajor}
            grad={grad}
            setGrad={setGrad}
            editable={editable}
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
            editable={editable}
          />
        </div>
        <Submit editable={editable} setEditable={setEditable} />
      </div>
      <div className="resume">
        <div className="name">{name}</div>
        <div className="email-number">
          {email} | {number}
        </div>
        <div className="section">
          <b>EDUCATION</b>
        </div>
        <div className="line"></div>
        <div className="school-name">{schoolName}</div>
        <div className="major">{major}</div>
        <div className="grad">{formatDateToMonthYear(grad)}</div>
        <div className="section">
          <b>WORK EXPERIENCE</b>
        </div>
        <div className="line"></div>
        <div className="company-name">{companyName}</div>
        <div className="position-title">{positionTitle}</div>
        <div className="dates">
          {formatDateToMonthYear(startDate)} – {formatDateToMonthYear(endDate)}
        </div>
        <div className="responsibilities">&emsp; &emsp;{responsibilities}</div>
      </div>
    </>
  );
}

export default App;
