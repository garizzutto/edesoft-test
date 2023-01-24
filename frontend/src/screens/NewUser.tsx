import UserForm from "../components/UserForm";

function NewUser() {
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

  return <UserForm initialState={initialState} isUpdate={false} />;
}

export default NewUser;
