import { NavLink } from 'react-router-dom';
import logo from './vite.svg';


export function Header() {
  return (
    <header>
      <img src={logo} alt="Logo"/>
      <h1>React Tools</h1>
      <nav>
        <NavLink to="products">
          Products
        </NavLink>
      </nav>
    </header>
  );
}