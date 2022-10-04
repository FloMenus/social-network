import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Profile from "./pages/Profile";

import { UserContextProvider } from "./contexts/User";

const App = () => {
  return (
    <>
      <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profil" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      </UserContextProvider>
    </>
  );
};

export default App;
