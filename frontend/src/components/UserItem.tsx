import { User } from "../types";
import "./UserItem.css";

function UserItem({ user }: Props) {
  function goToEditUser() {
    window.location.href = "/users/" + user.id?.toString();
  }

  return (
    <div key={user.id} className="infos" onClick={goToEditUser}>
      <h2>{(user.name.firstname + " " + user.name.lastname).toUpperCase()}</h2>
      <p>{user.email}</p>
    </div>
  );
}

type Props = {
  user: User;
};

export default UserItem;
