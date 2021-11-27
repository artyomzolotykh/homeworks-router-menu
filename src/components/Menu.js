import { NavLink } from "react-router-dom";

const setClass = ({isActive}) => "menu__item" + (isActive ? " menu__item-active" : "");

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink className={setClass} to="/homeworks-router-menu/">Главная</NavLink>
      <NavLink className={setClass} to="/homeworks-router-menu/drift">Дрифт-такси</NavLink>
      <NavLink className={setClass} to="/homeworks-router-menu/timeattack">Time Attack</NavLink>
      <NavLink className={setClass} to="/homeworks-router-menu/forza">Forza Karting</NavLink>
    </nav>
  )
}

export default Menu;