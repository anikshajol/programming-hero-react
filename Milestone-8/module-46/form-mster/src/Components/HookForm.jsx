import useInputState from "../Hooks/useInputState";

const HookForm = () => {
  //   const [name, handleNameChange] = useInputState("rojoni hooked");

  const emailState = useInputState("rojon@sojin.com");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailState.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
          id=""
        />{" "} */}
        <br />
        <input {...emailState} type="text" name="email" id="" />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
