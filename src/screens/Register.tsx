import { useState } from "react";
import { addNewUser } from "../ApiService";
import { User } from "../types";
import "./Register.css";

function Register() {
  const initialState = {
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    address: {
      city: "",
      street: "",
      number: 0,
      zipcode: "",
      geolocation: {
        lat: "",
        long: "",
      },
    },
    phone: "",
  };
  const [user, setUser] = useState<User>(initialState);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(await addNewUser(user));
    setUser(initialState);
  }

  return (
    <form onSubmit={submit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        id="firstname"
        value={user.name.firstname}
        onChange={(e) =>
          setUser({
            ...user,
            name: { ...user.name, firstname: e.target.value },
          })
        }
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        id="lastname"
        value={user.name.lastname}
        onChange={(e) =>
          setUser({
            ...user,
            name: { ...user.name, lastname: e.target.value },
          })
        }
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        value={user.address.city}
        onChange={(e) =>
          setUser({
            ...user,
            address: { ...user.address, city: e.target.value },
          })
        }
      />
      <label htmlFor="street">Street</label>
      <input
        type="text"
        id="street"
        value={user.address.street}
        onChange={(e) =>
          setUser({
            ...user,
            address: { ...user.address, street: e.target.value },
          })
        }
      />
      <label htmlFor="number">Number</label>
      <input
        type="number"
        id="number"
        value={user.address.number}
        onChange={(e) =>
          setUser({
            ...user,
            address: { ...user.address, number: Number(e.target.value) },
          })
        }
      />
      <label htmlFor="zipcode">Zipcode</label>
      <input
        type="text"
        id="zipcode"
        value={user.address.zipcode}
        onChange={(e) =>
          setUser({
            ...user,
            address: { ...user.address, zipcode: e.target.value },
          })
        }
      />
      <label htmlFor="phone">Phone</label>
      <input
        type="phone"
        id="phone"
        value={user.phone}
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
      />
      <button type="submit">Add new User</button>
    </form>
  );
}

export default Register;
