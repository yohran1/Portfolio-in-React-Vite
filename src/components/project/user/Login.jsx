import Container from '../../layout/Container'
import SubmitButton from '../../form/SubmitButton'
import { Link } from 'react-router-dom'
import style from './Login.module.css'
import Facebook from './img/facebook.png'
import GitHub from './img/github.png'
import Input from '../../form/Input'
import Footer from '../../layout/Footer'
import Message from './Message'
import {useState} from 'react'

export default function Login(){

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [userEmail, setUserEmail] = useState()
    const [userPassword, setUserPassword] = useState()

    
    function enviarDados(event){
        event.preventDefault()
        setUserEmail(email)
        setUserPassword(password)
        console.log('Email: ' + email)
        console.log('Senha: ' + password)
        console.log('Dados de senha do usuário: ' + userPassword)
    }
    
    return(
        <Container customClass='column'>
            <form className={style.formLogin}>
                <div className={style.headerLogin}>
                    <h1>Login</h1>
                </div>
                <div className={style.inputsLogin}>
                    <Input 
                        type='email'
                        text='Email'
                        name='email'
                        placeholder='Digite seu email!'
                        evento_de_mudanca={(event) => setEmail(event.target.value)}
                    />
                    <Input 
                        type='password'
                        text='Password'
                        name='password'
                        placeholder='Digite sua senha!'
                        evento_de_mudanca={(event) => setPassword(event.target.value)}
                    />
                    {userEmail && (
                        <Message message={userEmail} />
                    )}
                    
                    
                </div>
                    <SubmitButton text='Login' onClick={enviarDados}/>
                <div className={style.linksLogin}>
                <div className={style.forgot_password}>
                    <Link to="/projeto/forgotpassword">Esqueceu sua senha?</Link>
                </div>
                    <div className={style.forgot_password}>
                        <Link to="/projeto/register">Cadastre-se</Link>
                    </div>
                </div>
                <div className={style.social_media_login}>
                    <a href="https://www.facebook.com/yohran.venancio/">
                        <img src={Facebook} alt="Facebook-logo" />
                    </a>
                    <a href="https://github.com/yohran1">
                        <img src={GitHub} alt="gitHub-logo" />
                    </a>
                </div>
            </form>
            <Footer msg={'Entre no projeto aqui!'} />
        </Container>
    )
}