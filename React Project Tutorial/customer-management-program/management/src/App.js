import React, { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";

const customer = {
  id: 1,
  image: "https://placeimg.com/64/64/any",
  name: "Jinyeong Park",
  birthday: "961222",
  gender: "female",
  job: "student"
};

class App extends Component {
  render() {
    return (
      <Customer
        id={customer.id}
        image={customer.image}
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}

export default App;
