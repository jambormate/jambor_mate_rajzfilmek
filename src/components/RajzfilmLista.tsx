import { useEffect, useState } from "react";
import Rajzfilm, { type RajzfilmAdat } from "./Rajzfilm";

function RajzfilmLista() {
  const [rajzfilmek, setRajzfilmek] = useState<RajzfilmAdat[]>([]);

  useEffect(() => {
    async function adatokbetoltese() {
      try {
        const response = await fetch("/rajzfilmek.json");
        const adatok: RajzfilmAdat[] = await response.json();
        setRajzfilmek(adatok);
      } catch (error) {
        console.log(error);
      }
    }
    adatokbetoltese();
  });

  const megjelenesiEvek = rajzfilmek.map((rajzfilm) => rajzfilm.megjelenesEve);
  const legkorabbiEv = Math.min(...megjelenesiEvek);
  const legkesobbiEv = Math.max(...megjelenesiEvek);

  return (
    <section>
      <div className="row g-3">
        <div className="col-12">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="h6 card-title">Rajzfilmek száma</h2>
              <p className="card-text">{rajzfilmek.length}</p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="h6 card-title">Legkorábbi megjelenési év</h2>
              <p className="card-text">{legkorabbiEv}</p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="h6 card-title">Legkésőbbi megjelenési év</h2>
              <p className="card-text">{legkesobbiEv}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-lg-3">
        {rajzfilmek.map((rajzfilm) => (
          <Rajzfilm key={rajzfilm.id} rajzfilm={rajzfilm} />
        ))}
      </div>
    </section>
  );
}

export default RajzfilmLista;
