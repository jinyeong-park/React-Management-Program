import React, { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "Jinyeong Park",
    birthday: "961222",
    gender: "female",
    job: "web developer"
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "Thomas Rhee",
    birthday: "161223",
    gender: "male",
    job: "financial analyst"
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "Jenny Park",
    birthday: "961223",
    gender: "female",
    job: "sw engineer"
  }
];

class App extends Component {
  render() {
    return (
      <div>
        //use map to shorten the code
        {customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
      // <div>
      // <Customer
      //   id={customers[0].id}
      //   image={customers[0].image}
      //   name={customers[0].name}
      //   birthday={customers[0].birthday}
      //   gender={customers[0].gender}
      //   job={customers[0].job}
      // />
      //   <Customer
      //   id={customers[1].id}
      //   image={customers[1].image}
      //   name={customers[1].name}
      //   birthday={customers[1].birthday}
      //   gender={customers[1].gender}
      //   job={customers[1].job}
      // />
      //  <Customer
      //  id={customers[2].id}
      //  image={customers[2].image}
      //  name={customers[2].name}
      //  birthday={customers[2].birthday}
      //  gender={customers[2].gender}
      //  job={customers[2].job}
      // />
      //</div>
    );
  }
}

export default App;
