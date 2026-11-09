import { useState } from "react";

export interface RajzfilmAdat {
  id: number;
  cim: string;
  studio: string;
  megjelenesEve: number;
  premier: string;
}

interface RajzfilmProps {
  rajzfilm: RajzfilmAdat;
}

function Rajzfilm({ rajzfilm }: RajzfilmProps) {
  const [premierLathato, setPremierLathato] = useState(true);

  const kategoria =
    rajzfilm.megjelenesEve < 2000
      ? "Klasszikus rajzfilm"
      : rajzfilm.megjelenesEve <= 2010
        ? "Régebbi rajzfilm"
        : "Modern rajzfilm";

  return (
    <article className="col">
      <div className="card h-100 shadow-sm">
        <div className="card-body d-flex flex-column">
          <h2 className="card-title">{rajzfilm.cim}</h2>
          <p className="card-text">
            <i>{rajzfilm.studio}</i>
          </p>
          <p className="card-text">
            <b>{rajzfilm.megjelenesEve}</b>
          </p>
          <p className="card-text">{kategoria}</p>
          {premierLathato && (
            <p className="card-text">Premier: {rajzfilm.premier}</p>
          )}
          <button
            className="btn btn-outline-primary"
            type="button"
            aria-expanded={premierLathato}
            onClick={() => setPremierLathato((lathato) => !lathato)}
          >
            {premierLathato
              ? "Premier dátum elrejtése"
              : "Premier dátum megjelenítése"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default Rajzfilm;
