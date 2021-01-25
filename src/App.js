import React, { useState } from "react";
import "./App.css";
import { Participants } from "./Participants/Participants";
import { Depenses } from "./Depenses/Depenses";

function App() {
  const [participants, setParticipants] = useState([]);
  const [depenses, setDepenses] = useState([]);

  return (
    <div className="App">
      <Participants
        participants={participants}
        onInscription={(inscrit) =>
          setParticipants([...participants, inscrit])
        }
      />

      <Depenses
        depenses={depenses}
        onDepenser={(depense) =>
          setDepenses([...depenses, depense])
        }
      />

      <div data-testid="creances">
        <h3>Aucune créance</h3>
      </div>
    </div>
  );
}

export default App;
