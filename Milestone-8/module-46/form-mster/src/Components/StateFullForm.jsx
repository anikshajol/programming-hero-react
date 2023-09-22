import { useState } from "react";

const StateFullForm = () => {
  const [phone, setPhone] = useState("+880");
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(number);
    console.log(phone);

    if (number.length < 6) {
      setError("number must be 6 characarter");
    } else {
      setError("");
    }
  };

  const handlePhoneChange = (e) => {
    // e.preventDefault();
    console.log(e.target.value);

    setPhone(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleNameChange}
          placeholder="name"
          id=""
        />{" "}
        <br />
        <input
          onChange={handleNumberChange}
          type="text"
          name="number"
          placeholder="number"
          id=""
        />
        <br />
        <input
          onChange={handlePhoneChange}
          value={phone}
          placeholder="phone"
          type="text"
          name="phone"
          id=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default StateFullForm;
