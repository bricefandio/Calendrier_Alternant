import styles from "./Header.module.scss";
import logo from "../assets/logo.png"

function Header(){
    return(
        <header className={`${styles.header} d-flex flex-row align-items-center `}>
        <div className="flex-fill d-flex">
            <img src={logo} alt ="logo 3il"/>
        </div>
        <ul>
            <button className="mr-5 btn btn-reverse-primary">
            <i className="fa-solid fa-download"></i>
                <span>Télécharger</span>
            </button>
        </ul>
    </header>
    )
}

export default Header;