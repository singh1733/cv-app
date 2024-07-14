export function Practical({
  companyName,
  setCompanyName,
  positionTitle,
  setPositionTitle,
  responsibilities,
  setResponsibilities,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  editable,
}) {
  function handleCompanyNameChange(e) {
    setCompanyName(e.target.value);
  }

  function handlePositionChange(e) {
    setPositionTitle(e.target.value);
  }

  function handleResponsibilitiesChange(e) {
    setResponsibilities(e.target.value);
  }
  function handleStartChange(e) {
    setStartDate(e.target.value);
  }
  function handleEndChange(e) {
    setEndDate(e.target.value);
  }

  return (
    <form>
      <label htmlFor="comp-name">Company Name:</label>
      <input
        type="text"
        id="comp-name"
        name="comp-name"
        placeholder="Company Name"
        value={companyName}
        onChange={handleCompanyNameChange}
        readOnly={!editable}
      />
      <label htmlFor="position">Position:</label>
      <input
        type="text"
        id="position"
        name="position"
        placeholder="Position"
        value={positionTitle}
        onChange={handlePositionChange}
        readOnly={!editable}
      />
      <label htmlFor="responsibilities">Responsibilities:</label>
      <textarea
        type="text"
        id="responsibilities"
        name="responsibilities"
        placeholder="Responsibilities"
        value={responsibilities}
        onChange={handleResponsibilitiesChange}
        readOnly={!editable}
      />
      <label htmlFor="start">Start date:</label>
      <input
        type="date"
        id="start"
        name="start"
        value={startDate}
        onChange={handleStartChange}
        readOnly={!editable}
      />
      <label htmlFor="end">End date:</label>
      <input
        type="date"
        id="end"
        name="end"
        value={endDate}
        onChange={handleEndChange}
        readOnly={!editable}
      />
    </form>
  );
}
