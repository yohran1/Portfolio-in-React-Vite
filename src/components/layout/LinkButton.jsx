import style from './LinkButton.module.css'
import { Link } from 'react-router-dom'
import PropsTypes from 'prop-types'

export default function LinkButton({to, text}){

    return( 
        <button className={style.btn}>
            <Link  to={to}>{text}</Link>
        </button>
        
    )
}
LinkButton.propTypes={
    to: PropsTypes.string,
    text: PropsTypes.string
}