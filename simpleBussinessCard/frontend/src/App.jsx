import { CreateBussinessCard } from "./components/CreateBussinessCard";
import { ShowCards } from "./components/ShowCards";
import { useState } from "react";

function App() {
  const [ans, setAns] = useState([]);
  fetch("http://localhost:3000/cards")
    .then((res) => res.json())
    .then((data) => {
      setAns(data.response);
    });
  return (
    <div>
      <CreateBussinessCard />
      {ans.map(function (card, index) {
        return (
          <ShowCards
            index={index}
            name={card.name}
            description={card.description}
          />
        );
      })}
    </div>
  );
}

export default App;
