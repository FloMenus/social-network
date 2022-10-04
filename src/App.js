import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Profile from "./pages/Profile";

import { UserContextProvider } from "./contexts/User";
import { FriendContextProvider } from "./contexts/Friends";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <UserContextProvider>
            <Route path="/" element={<Login />} />
            <FriendContextProvider>
              <Route path="/profil" element={<Profile />} />
            </FriendContextProvider>
          </UserContextProvider>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
