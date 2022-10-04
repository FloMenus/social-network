import { createContext, useState } from "react";

const UserContext = createContext({});

const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const request = await fetch("https://randomuser.me/api/");
    const response = await request.json();
    setUser(response.results[0]);
    console.log(response.results[0]);
  }

  const value = {
    user: user,
    fetchUser: fetchUser,
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
