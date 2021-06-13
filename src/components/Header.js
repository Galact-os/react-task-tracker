import Button from "./Button";
import { useLocation } from "react-router";

const Header = ({ title, toggleForm, color, text }) => {
  const location = useLocation();
  return (
    <header>
      <h1> {title} Task Tracker</h1>
      {location.pathname === "/" && (
        <Button color={color} text={text} toggleForm={toggleForm} />
      )}
    </header>
  );
};

export default Header;
