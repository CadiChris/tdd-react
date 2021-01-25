import React, { useState } from "react";
import * as PropTypes from "prop-types";

export function Participants({
  onInscription,
  participants,
}) {
  const [inscrit, setInscrit] = useState("");

  return (
    <div data-testid="participants">
      <h3>
        {participants.length === 0 && "Aucun participant"}
        {participants.length === 1 && "1 participant"}
        {participants.length > 1 &&
          participants.length + " participants"}
      </h3>

      <ul>
        {participants.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          data-testid="inscription-nom"
          onChange={(event) =>
            setInscrit(event.target.value)
          }
          value={inscrit}
        />
        <button
          data-testid="inscription"
          onClick={() => {
            onInscription(inscrit);
            setInscrit("");
          }}
        >
          Inscription
        </button>
      </div>
    </div>
  );
}

Participants.propTypes = {
  participants: PropTypes.arrayOf(PropTypes.string),
  onInscription: PropTypes.func.isRequired,
};
