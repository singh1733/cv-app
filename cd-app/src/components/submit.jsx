export function Submit({ editable, setEditable }) {
  // Function to toggle the editable state
  function toggleEditable() {
    setEditable(!editable); // Toggle the state
  }

  const subOrEdit = editable ? "LOCK" : "EDIT";

  return (
    <button onClick={toggleEditable}>
      {subOrEdit} 
    </button>
  );
}
