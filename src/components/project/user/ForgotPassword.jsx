import Input from '../../form/Input'
import Container from '../../layout/Container'
import style from './Login.module.css'
import SubmitButton from '../../form/SubmitButton'
import Message from './Message'
import Footer from '../../layout/Footer'
import { Link } from 'react-router-dom'

export default function ForgotPassword(){
    const message = 'Aguardando confirmação do usuário!'

    return(
        <Container customClass='column'>
            <form className={style.formLogin}>
                <div className={style.headerLogin}>
                    <h2>Digite nova senha!</h2>
                </div>
                <div className={style.inputsLogin}>
                    <Input 
                        type='password'
                        name='password'
                        placeholder='Digite nova senha!'
                    />
                    <Message  message={message}/>
                    
                    <div className={style.buttons}>
                        <SubmitButton text='Salvar'/>   
                        <Link to='/projeto/login'>
                            <SubmitButton text='Voltar'></SubmitButton> 
                        </Link>
                    </div>
                </div>
            </form>
            <Footer msg={'Entre no projeto aqui!'} />
        </Container>
    )
}