import style from './Input.module.css'
import PropsType from 'prop-types'
export default function Input({
    type = 'text',
    name = 'insira o name',
    placeholder = 'Insira o placeholder',
    onChange,
    value
}){

    return(
        <div className={style.form_control}>
            <input 
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                required
            />
        </div>
            
        
    )
}
Input.propTypes = {
    type: PropsType.string.isRequired,
    name: PropsType.string.isRequired,
    placeholder: PropsType.string.isRequired,
    onChange: PropsType.func,
    value: PropsType.string
}