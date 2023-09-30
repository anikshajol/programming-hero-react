import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const gitProvider = new GithubAuthProvider();

  //   const navigation = useNavigation();

  //   const navigate = useNavigate();

  console.log(user);
  //   console.log(app);

  const handleGoogleSignIn = () => {
    console.log("google");
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        // console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((err) => {
        console.log(err.error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        // navigate("/login");
      })
      .catch((er) => {
        console.log(er);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <div>
          <button onClick={handleGoogleSignIn}>Google Login</button>
          <button onClick={handleGitHubSignIn}>Github Login</button>
        </div>
      )}

      {user && (
        <div>
          <h2>User: {user.displayName} </h2>
          <p>Email: {user.email} </p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
