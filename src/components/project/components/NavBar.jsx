import style from './NavBar.module.css'
import icon from '../img/icons/icon-1.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// import AuthenticationButton from './form/AuthenticationButton'

export default function NavBar(){

    const [isNavVisible, setIsNavVisible] = useState(false);

    const mostrarNavBar = () => {
        setIsNavVisible(prevState => !prevState);
    };


    return(

        <header>
            <div className={style.header}>
                {/* <h3>Logo</h3> */}
                <div className={style.logo}>
                 <Link to='/Portfolio-in-React-Vite/projeto/srmackfly'>
                     <img src={icon} alt={icon} />
                     <p>Bolos de Casamento Por Sr-MackFly</p>
                 </Link>
             </div>
                <nav className={isNavVisible ? style.responsive_nav : ''}>
                    <Link to='/Portfolio-in-React-Vite/projeto/srmackfly'>Página Inicial</Link>
                    <Link to='/Portfolio-in-React-Vite/projeto/pecaOnline'>Peça Online</Link>
                    <Link to='/Portfolio-in-React-Vite/projeto/contato'>Contato</Link>
                    <Link to='/Portfolio-in-React-Vite/projeto/sobre'>Sobre</Link>
                    <button className={`${style.nav_btn} ${style.nav_close_btn}`} onClick={mostrarNavBar}>
                        <FaTimes />
                    </button>
                </nav>
                <button className={`${style.nav_btn}`} onClick={mostrarNavBar}>
                    <FaBars />
                </button>
            </div>
            
        </header>

        // <nav className={style.navBar}>
        //     <div className={style.logo}>
        //         <Link to='/projeto/srmackfly'>
        //             <img src={icon} alt={icon} />
        //             <p>Bolos de Casamento Por Sr-MackFly</p>
        //         </Link>
        //     </div>

        //     <div className={style.nav_list}>
        //         <ul>
        //             <li><Link to='/projeto/srmackfly'>Página Inicial</Link></li>
        //             <li><Link to='/projeto/pecaOnline'>Peça Online</Link></li>
        //             <li><Link to='/projeto/contato'>Contato</Link></li>
        //             <li><Link to='/projeto/sobre'>Sobre</Link></li>
        //         </ul>
        //     </div>
            
        //     <div className={style.login_btn}>
        //         <a href='/projeto/login'><button>Login | Registro</button></a>
        //         {/* <AuthenticationButton /> */}
        //     </div>
        // </nav>
    )
}