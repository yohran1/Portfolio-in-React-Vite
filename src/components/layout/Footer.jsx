import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { TiUserOutline } from 'react-icons/ti'
import PropTypes from 'prop-types'
import style from './Footer.module.css'


export default function Footer({msg}){

    return (
        <footer className={style.footer}>
            <a href='/Portfolio-in-React-Vite/projeto/srmackfly'><TiUserOutline /><span>{msg}</span></a>

            <p>Yohran Kallahari | Sr-Mackfly &copy;</p>

            <ul>
                <li><a href='https://www.facebook.com/yohran.venancio/'><FaFacebookSquare /></a></li>
                <li><a href='https://www.instagram.com/yohran_kallahari/'><FaInstagramSquare /></a></li>
                <li><a href='https://www.linkedin.com/in/yohran-ven%C3%A2ncio-96017b120/'><FaLinkedin /></a></li>
            </ul>
        </footer>
    )
}
Footer.propTypes={
    msg: PropTypes.string,
}