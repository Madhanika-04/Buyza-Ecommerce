import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => setMessage(data.message)) 
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-green-600">
        {message || "Loading..."}
      </h1>
    </div>
  );
}

export default App;
