import h from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={h.header}>
            <img src="https://cdn.pixabay.com/photo/2018/03/27/15/05/logo-3266214_1280.png" alt=""/>

            <div className={h.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    );
}

export default Header;