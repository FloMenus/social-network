import { createContext, useState } from "react";

const FriendsContext = createContext({});

const FriendsContextProvider = (props) => {
  const [friends, setFriends] = useState([]);

  const fetchFriends = async () => {
    const request = await fetch(`https://randomuser.me/api/?results=${math.random(1, 30)}`);
    const response = await request.json();
    setFriends(response.results);
    console.log(response.results);
  }

  const value = {
    friends: friends,
    fetchFriends: fetchFriends,
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export { FriendsContextProvider, FriendsContext };
