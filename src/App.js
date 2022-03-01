import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/header";
import SignUp from "./pages/signup";
import SendImage from "./pages/sendimage";
import Login from "./pages/login";
import UsersMap from "./pages/mapusers";
import Profile from "./pages/profile";

function App() {
  return (
    <div className="App">
      {<Header />}
      {localStorage.getItem("name") ? (
        <Routes>
          <Route path="/mapusers" element={<UsersMap />} />
          <Route path="/sendImage" element={<SendImage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
