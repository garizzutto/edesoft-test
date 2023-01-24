import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../ApiService";
import UserForm from "../components/UserForm";
import { User } from "../types";

function EditUser() {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setLoading(true);
      getUser(id).then((user) => {
        setUser(user);
        setLoading(false);
      });
    }
  }, [id]);

  return loading ? (
    <p>Loading User...</p>
  ) : user ? (
    <UserForm initialState={user} isUpdate={true} />
  ) : (
    <></>
  );
}

export default EditUser;
