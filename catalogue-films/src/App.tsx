import { FILMS, trierPar, libelleStatut, formaterTitre } from "./lib/utils";
import type { Film } from "./lib/utils";
import "./App.css";

// Consigne 7 : afficher trois films types.
// trierPar est la fonction generique du bloc 4 : TS en deduit T = Film,
// donc SELECTION est bien un Film[] et pas un any[].
const SELECTION: Film[] = trierPar(FILMS, "annee").slice(0, 3);

function App() {
  return (
    <main className="catalogue">
      <h1>Catalogue de films</h1>
      <p className="intro">
        Trois entrees du module <code>utils.ts</code>, migre en TypeScript strict.
      </p>

      <ul className="fiches">
        {SELECTION.map((film) => (
          <li key={film.id} className="fiche">
            <h2>{formaterTitre(film.titre, film.annee)}</h2>
            <p className="statut">{libelleStatut(film)}</p>
            <ul className="genres">
              {film.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
            <p className="note">{film.note.toFixed(1)}/10</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
