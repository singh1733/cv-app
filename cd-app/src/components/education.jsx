export function Education({
  schoolName,
  setSchoolName,
  major,
  setMajor,
  grad,
  setGrad,
  editable,
}) {
  function handleSchoolNameChange(e) {
    setSchoolName(e.target.value);
  }

  function handleMajorChange(e) {
    setMajor(e.target.value);
  }

  function handleGradChange(e) {
    setGrad(e.target.value);
  }


  return (
    <form>
      <label htmlFor="school-name">School Name:</label>
      <input
        type="text"
        id="school-name"
        name="school-name"
        placeholder="School Name"
        value={schoolName}
        onChange={handleSchoolNameChange}
        readOnly={!editable}
      />
      <label htmlFor="major">Major:</label>
      <input
        type="text"
        id="major"
        name="major"
        placeholder="Major"
        value={major}
        onChange={handleMajorChange}
        readOnly={!editable}
      />
      <label htmlFor="grad">Graduation Date:</label>
      <input
        type="date"
        id="grad"
        name="grad"
        value={grad}
        onChange={handleGradChange}
        readOnly={!editable}
      />
    </form>
  );
}
