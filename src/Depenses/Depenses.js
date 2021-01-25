import React, { useState } from "react";
import * as PropTypes from "prop-types";

export function Depenses({ depenses, onDepenser }) {
  const [payeur, setPayeur] = useState("");
  const [montant, setMontant] = useState("");

  return (
    <div id="depenses" data-testid="depenses">
      <h3>
        {depenses.length === 0 && "Aucune dépense"}
        {depenses.length > 0 &&
          calculTotalDepense(depenses) + " euros dépensés"}
      </h3>

      <ul>
        {depenses.map((depense, i) => (
          <li key={i}>
            {depense.payeur} : {depense.montant} euros
          </li>
        ))}
      </ul>

      <div>
        <label htmlFor="depense-payeur">Payeur</label>
        <input
          type="text"
          id="depense-payeur"
          value={payeur}
          onChange={(e) => setPayeur(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="depense-montant">Montant</label>
        <input
          type="text"
          id="depense-montant"
          value={montant}
          onChange={(e) => setMontant(e.target.value)}
        />
      </div>

      <button
        data-testid="depenser"
        onClick={() => {
          onDepenser({ payeur, montant: Number(montant) });
          setMontant("");
          setPayeur("");
        }}
      >
        Dépenser
      </button>
    </div>
  );
}

function calculTotalDepense(depenses) {
  return depenses.reduce(
    (total, depense) => total + depense.montant,
    0
  );
}

Depenses.propTypes = {
  depenses: PropTypes.arrayOf(PropTypes.object),
  onDepenser: PropTypes.func,
};
