import style from './HeaderLocation.module.css'
import { Link } from 'react-router-dom'

export default function HeaderLocation(){


    return(
        <>
        <header className={style.header}>
            <p>Retirada, o mais rápido possível (em 15 minutos)</p>
            <a href="/projeto/pecaOnline">Alterar</a>
        </header>
        <div className={style.menu}>
            <h3>MENU DE BOLOS</h3>
            <ul>
                <Link to='/projeto/pecaOnline'>
                    <li>Bolos de Casamento</li>
                </Link>
                <Link to='/projeto/pecaOnline'>
                    <li>Personalize Seu Bolo</li>
                </Link>
                
            </ul>
        </div>
        </>
        
        
    )
}