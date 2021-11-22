import { NavLink } from "react-router-dom";

const setClass = ({isActive}) => "menu__item" + (isActive ? " menu__item-active" : "");

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink className={setClass} to="/">Главная</NavLink>
      <NavLink className={setClass} to="/drift">Дрифт-такси</NavLink>
      <NavLink className={setClass} to="/timeattack">Time Attack</NavLink>
      <NavLink className={setClass} to="/forza">Forza Karting</NavLink>
    </nav>
  )
}

export default Menu;