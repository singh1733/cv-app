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
  startEndDate,
}) {
  function handleCompanyNameChange(e) {
    setCompanyName(e.target.value);
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
      />
    </form>
  );
}
