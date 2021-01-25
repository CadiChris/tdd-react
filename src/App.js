import React, { useState } from "react";
import "./App.css";
import { Participants } from "./Participants/Participants";
import { Depenses } from "./Depenses/Depenses";
import { calculerLesCreances } from "./Creances/calculerLesCreances";

function App() {
  const [participants, setParticipants] = useState([]);
  const [depenses, setDepenses] = useState([]);
  const creances = calculerLesCreances(
    depenses,
    participants
  );

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
        {creances.length === 0 ? (
          <h3>Aucune créance</h3>
        ) : (
          creances.map((c, i) => (
            <div key={i}>
              {`${c.payeur} doit ${c.montant} euros à ${c.receveur}`}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
