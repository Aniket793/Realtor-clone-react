import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Header from "./Components/Header";
import Signup from "./pages/Signup";

function App() {
  return (
   <>
       <Router>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signOut" element={<SignOut />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Offers" element={<Offers /> } />
        <Route path="/signup" element={<Signup /> } />
      </Routes>
    </Router>
   </>
  );
}

export default App;
