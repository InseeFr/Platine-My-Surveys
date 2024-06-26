import { AppContext } from "App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  const { appVersion } = useContext(AppContext);

  return (
    <nav className="footer">
      <ul>
        <li>
          <li>{`Version ${appVersion}`}</li>
        </li>
        <li>
          <Link to="/security">Sécurité</Link>
        </li>
        <li>
          <Link to="/about">{"Conditions générales d'utilisation"} </Link>
        </li>
        <li>
          <Link to="/users">Accessibilité</Link>
        </li>
        <li>
          <Link to="/users">Mentions légales et crédits </Link>
        </li>
        <li>
          <Link to="/users">Cadre juridique</Link>
        </li>
        <li>
          <Link to="/users">Cnis</Link>
        </li>
      </ul>
    </nav>
  );
};
