import { useContext } from "react";
import { FriendsContext } from "../contexts/Friends";
import { Link } from "react-router-dom";

const Friends = () => {
  const { friends, fetchFriends } = useContext(FriendsContext);

  return (
    <>
      <Link to="/profil">
        <button className="user-friends">Back to profil</button>
      </Link>
      {friends ? (
        <div className="friends-container">
          {friends.map((friend) => {
            return (
              <div className="friend-card">
                <img
                  className="friend-card-img"
                  src={friend.picture.large}
                  alt="friend"
                />
                <h3 className="friend-card-title">
                  {friend.name.first + " " + friend.name.last}
                </h3>
              </div>
            );
          })}
        </div>
      ) : (
        <button onClick={fetchFriends} className="friends-button">
          Get Friends
        </button>
      )}
    </>
  );
};

export default Friends;
