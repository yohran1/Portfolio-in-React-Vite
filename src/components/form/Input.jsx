import style from './Input.module.css'
import PropsType from 'prop-types'

export default function Input({
    type = 'text',
    name = 'insira o name',
    placeholder = 'Insira o placeholder',
    evento_de_mudanca,
    value
}){
    
    function Icon(text){
        if(text === 'email'){
            return <i className="fa-solid fa-envelope"> </i>                
        }else if(text === 'password'){
           return <i className="fa-solid fa-key"> </i>
        }else{
            return <i className="fa-solid fa-user"></i>
        }
    }
    return(
        <div className={style.form_control}>
            <label htmlFor={name}>{Icon(name)}</label>
                <input 
                    id={name}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={evento_de_mudanca}
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
    evento_de_mudanca: PropsType.func,
    value: PropsType.string
}