import { createContext, useState } from "react";

const FriendsContext = createContext({});

const FriendsContextProvider = (props) => {
  const [friends, setFriends] = useState(null);

  const fetchFriends = async () => {
    if (!friends) {
      const request = await fetch(
        "https://randomuser.me/api/?results=10"
      );
      const response = await request.json();
      setFriends(response.results);
      console.log(friends);
    }
  };

  const value = {
    friends: friends,
    fetchFriends: fetchFriends,
  };

  return (
    <FriendsContext.Provider value={value}>
      {props.children}
    </FriendsContext.Provider>
  );
};

export { FriendsContextProvider, FriendsContext };
