import style from './FormEmail.module.css'
import Input from './Input'
import Button from './Button'

export default function FormEmail(){

    return(
        <div className={style.container}>
            <form className={style.form}>
                <div className={style.inputs_user}>
                    <Input 
                        type='text'
                        name='name'
                        placeholder='Nome*'
                    />
                    <Input 
                        type='email'
                        name='email'
                        placeholder='Email*'
                    />
                </div>
                <Input 
                    type='fone'
                    name='number'
                    placeholder='Telefone*'
                />
                <textarea placeholder='Digite sua mensagem aqui...' minLength='2000' />
                <Button text='Enviar' />

            </form>
        </div>
    )
}