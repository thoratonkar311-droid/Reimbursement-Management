import axios from "axios";
import { useState } from "react";

export default function Submit() {
  const [data, setData] = useState({});

  const submit = async () => {
    await axios.post("http://localhost:5000/api/expenses", data, {
      headers: { Authorization: localStorage.getItem("token") }
    });
    alert("Submitted");
  };

  return (
    <div>
      <h2>Submit Expense</h2>
      <input placeholder="Amount" onChange={e=>setData({...data,amount:e.target.value})}/>
      <input placeholder="Category" onChange={e=>setData({...data,category:e.target.value})}/>
      <button onClick={submit}>Submit</button>
    </div>
  );
}
