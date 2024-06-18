import style from './Button.module.css'
import PropsType from 'prop-types'

export default function Button({
    text = 'Insira o nome do Button',
    onClick
})
{
    return(
        <button className={style.btn} onClick={onClick}>{text}</button>
    )
}
Button.propTypes = {
    text: PropsType.string,
    onClick: PropsType.func
}