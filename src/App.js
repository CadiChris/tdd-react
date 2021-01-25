import React, { useState } from "react";
import "./App.css";
import { Participants } from "./Participants/Participants";

function App() {
  const [participants, setParticipants] = useState([]);

  return (
    <div className="App">
      <Participants
        participants={participants}
        onInscription={(inscrit) =>
          setParticipants([...participants, inscrit])
        }
      />

      <div data-testid="depenses">
        <h3>Aucune dépense</h3>
      </div>

      <div data-testid="creances">
        <h3>Aucune créance</h3>
      </div>
    </div>
  );
}

export default App;
