import { useEffect, useState } from "react";
import { getAllUsers } from "../ApiService";
import UserItem from "../components/UserItem";
import { User } from "../types";
import "./UsersList.css";

function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllUsers().then((users) => {
      setUsers(users);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container">
      <h1>All users</h1>
      {loading && <p>Loading Users...</p>}
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UsersList;
