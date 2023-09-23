import "./App.css";
import Grandpa from "./Pages/Grandpa";
// import ReusableForm from "./Components/ReusableForm";
// import HookForm from "./Components/HookForm";
// import RefForm from "./Components/RefForm";
// import SimpleForm from "./Components/SimpleForm";
// import StateFullForm from "./Components/StateFullForm";

function App() {
  // const handleSignUpSubmit = (data) => {
  //   console.log("sign up ", data);
  // };

  // const handleProfileUpdate = (data) => {
  //   console.log("update profile", data);
  // };

  return (
    <>
      {/* <SimpleForm></SimpleForm>
      <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm
        formtitle={"Sign Up"}
        handledSubmit={handleSignUpSubmit}
        submitBtn={"Submit"}
      >
        <h2>Sign Up</h2>
        <p>Please sign up right now</p>
      </ReusableForm>
      <ReusableForm
        formtitle={"Profile Update"}
        submitBtn={"Update"}
        handledSubmit={handleProfileUpdate}
      >
        <h2>Update Profile </h2>
        <p>Always keep your profile update</p>
      </ReusableForm> */}
      <Grandpa></Grandpa>
    </>
  );
}

export default App;
