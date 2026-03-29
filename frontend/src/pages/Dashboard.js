import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/expenses", {
      headers: { Authorization: localStorage.getItem("token") }
    }).then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h2>My Expenses</h2>
      {data.map(e => (
        <div key={e._id}>
          ₹{e.amount} - {e.status}
        </div>
      ))}
    </div>
  );
}
