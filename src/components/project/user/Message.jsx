import style from './Message.module.css'
import PropTypes from 'prop-types'

export default function Message({message}){

    return(
        <div className={style.message}>
            <p>{message}</p>
        </div>
    )
}

Message.propTypes={
    message: PropTypes.string
}