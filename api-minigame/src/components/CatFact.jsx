import { useState } from "react";
import "../styles/CatFact.css";

function CatFact() {
  const [fact, setFact] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [message, setMessage] = useState("");

  const getCatFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFact(data.fact);

      if (data.fact.length > 120) {
        setMessage(
          "This fact was more than enough for today. Come back tomorrow for more "
        );
        setIsLocked(true); // disable the button
      } else {
        setMessage("Here’s your cat fact! ");
      }
    } catch (error) {
      console.error("Error fetching cat fact:", error);
      setFact("Could not load a cat fact. Try again!");
    }
  };

  return (
    <div className="catFact-container">
      <h2 className="catFact-title"> Random Cat Fact</h2>
      <p className="catFact-text">
        {fact || "Click the button to get a cat fact!"}
      </p>
      {message && <p className="catFact-message">{message}</p>}
      <button
        className="catFact-button"
        onClick={getCatFact}
        disabled={isLocked}
      >
        {isLocked ? "Come Back Tomorrow" : "Get Cat Fact"}
      </button>
    </div>
  );
}

export default CatFact;
