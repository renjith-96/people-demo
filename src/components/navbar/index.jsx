import { Link } from 'react-router-dom';
import  './style.css'
const Navbar = () => {
  return (
    <ul>
      <li>
      <Link to={"/"}>{"People"}</Link>
      </li>
      <li>
      <Link to={"/planets"}>{"Planets"}</Link>
      </li>
    </ul>
  );
};
export default Navbar