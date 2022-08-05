import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "username should be 3-16 characters and shoudn't include any special characters",
      pattern: "[A-Za-z0-9]{3,16}$",
      label: "Username",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "Password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-ZA-z0-9!@#$%^&*]{8,20}$`,
      label: "Password",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match your current password",
      pattern: values.password,
      label: "Confirm Password",
      required: true,
    },
  ];

  const handelSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()));
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);

  return (
    <div className="app">
      <form onSubmit={handelSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            className="formInput"
            key={input.id}
            {...input}
            values={[input.name]}
            onChange={onChange}
          />
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
