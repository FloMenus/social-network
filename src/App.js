import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Friends from "./pages/Friends";

import { UserContextProvider } from "./contexts/User";
import { FriendsContextProvider } from "./contexts/Friends";

const App = () => {
  return (
    <>
      <UserContextProvider>
        <FriendsContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/profil" element={<Profile />} />
              <Route path="/friends" element={<Friends />} />
            </Routes>
          </BrowserRouter>
        </FriendsContextProvider>
      </UserContextProvider>
    </>
  );
};

export default App;
