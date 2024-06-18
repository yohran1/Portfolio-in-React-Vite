import {Link} from 'react-router-dom'
import Container from "../layout/Container";
import style from './Home.module.css'
import foto from '../../img/profile.png'

export default function Sobre(){

    return(
        <Container>
            <div className={style.body}>
            <section className={style.card_portfolio}>
                <img src={foto} alt='perfil' />
                <h2>Yohran</h2>
                <p>Olá me chamo Yohran sou natural de Florianópolis/SC, 
                   tenho 23 anos, apaixonado pela tecnologia e sua
                   evolução ao longo dos anos podendo nos proporcionar
                   grandes e melhores revolução no mundo moderno,
                   estudo através de cursos pagos e também de canais
                   abertos, pretendo iniciar na carreira em Front-End
                   e depois ir para Back-End, para ter o conhecimento 
                   dos dois lados da moeda e dominar ambos para me tornar
                   um Dev FullStack, esse é meu plano de carreira, tenho 
                   uma ótima comunicação em grupo, grande gana de aprender
                   cada vez mais, a cada dia superando um novo obstáculo. 
                   </p>
                   <div className={style.btnHome}>
                        <Link to='/Portfolio-in-React-Vite/'>Home</Link>
                   </div>
            </section>
        </div>
        </Container>
    )
}