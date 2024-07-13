export function GenForm({ name, setName, number, setNumber, email, setEmail }) {
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleNumberChange(e) {
    setNumber(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="First and last name"
        value={name}
        onChange={handleNameChange}
      />
      <label htmlFor="number">Phone Number:</label>
      <input
        type="tel"
        id="number"
        name="number"
        placeholder="1234567890"
        value={number}
        onChange={handleNumberChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="example@gmail.com"
        value={email}
        onChange={handleEmailChange}
      />
    </form>
  );
}
