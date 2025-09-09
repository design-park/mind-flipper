import { useNavigate } from "react-router-dom";
import { useState } from "react";
import sparkle from "../assets/sparkles.png";

function LandingPage() {
  const [thought, setThought] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Save thought somewhere (context, state, or API)
    navigate("/reflect");
  };

  return (
    <div className="landingPage">
      <div className="container">
        <h1 className="titleText">Flip Your Mind</h1>
        <textarea
          placeholder="Feeling down? Type your thought here and let's flip it!"
          value={thought}
          onChange={(e) => setThought(e.target.value)}
          className="textArea"
        />
        <button onClick={handleSubmit} className="primaryButton">
          Flip it <img src={sparkle} alt="sparkle" className="sparkleIcon" />
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
