import style from './Home.module.css'
import foto from '../../img/profile.png'
import { Link } from 'react-router-dom'
import PDF from './yohran.pdf'

export default function Home(){


    return(
        <div className={style.body}>
            <section className={style.card_portfolio}>
                <img src={foto} alt='perfil' />
                <h2>Yohran</h2>
                <ul>
                    <li><Link to='/sobre'>Sobre Mim</Link></li>
                    <li><a href={PDF} target='blank'>Currículo</a></li>
                    <li><Link target='blank' to='/projeto/srmackfly'>Projeto</Link></li>
                    <li><a href='https://www.linkedin.com/in/yohran-ven%C3%A2ncio-96017b120/' target='blank'>LinkedIn</a></li>
                    <li><a href='https://github.com/yohran1' target='blank'>GitHub</a></li>
                </ul>
            </section>
        </div>
    )
}