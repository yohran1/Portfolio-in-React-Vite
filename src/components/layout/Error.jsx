import style from './Error.module.css'
import Container from './Container'
import NavBar from '../project/components/NavBar'
import Footer from './Footer'
import LinkButton from './LinkButton'

export default function Error(){

    return(
        <Container customClass='column'>
            <NavBar />
            <div className={style.error}>
                <h1>Error 403</h1>
                <LinkButton to='/Portfolio-in-React-Vite/projeto/srmackfly' text='Retornar a página principal'/>
            </div>
            
            <Footer />
        </Container>
    )
}