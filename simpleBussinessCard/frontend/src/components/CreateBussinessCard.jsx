import { useState } from "react";

export function CreateBussinessCard() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [interests, setInterests] = useState("");
  return (
    <div style={{ margin: 30, padding: 20 }}>
      <input
        onChange={function (e) {
          const value = e.target.value;
          setName(e.target.value);
        }}
        type="text"
        placeholder="Name"
        style={{ margin: 10, padding: 10 }}
      />
      <br />
      <input
        onChange={function (e) {
          const value = e.target.value;
          setDescription(e.target.value);
        }}
        type="text"
        placeholder="Description"
        style={{ margin: 10, padding: 10 }}
      />
      <br />
      <input
        onChange={function (e) {
          const value = e.target.value;
          setInterests(e.target.value);
        }}
        type="text"
        placeholder="Interests"
        style={{ margin: 10, padding: 10 }}
      />
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/cards", {
            body: JSON.stringify({
              name: name,
              description: description,
              interests: interests,
            }),
            method: "POST",
            headers: { "Content-type": "application/json" },
          }).then(async function (res) {
            const json = await res.json();
            alert(json.msg);
          });
        }}
        style={{ margin: 10, padding: 10 }}
      >
        Add card to DB
      </button>
    </div>
  );
}
