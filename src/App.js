import React from "react";
import {useForm} from "react-hook-form";

import "./App.css";

export default function App() {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>React Hook Form</h1>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" placeholder="Your Name" {...register("name")} />
      <label htmlFor="name">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        {...register("password")}
      />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" placeholder="Your Email" 
        {...register("email")}
      />

      <ul className="error-container">
        <li>Name is required</li>
      </ul>

      <button type="submit">Submit</button>
    </form>
  );
}
