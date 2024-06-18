import Container from "../../../layout/Container"
import style from './PecaOnline.module.css'
import NavBar from "../NavBar"
import Footer from "../../../layout/Footer"
import confeiteiro from '../../img/cakes/confeiteiro-1.webp'

export default function Sobre(){

    return(
        <Container>
            <NavBar />
            <section className={style.section}>
                <div className={style.container}>
                    <h1>Sobre</h1>
                    <p>SR-MACKFLY, RENOMADO CONFEITEIRO.</p>
                    <p>Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em “Editar Texto” ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes. Sinta-se à vontade para me arrastar e soltar em qualquer lugar na sua página. Sou um ótimo lugar para você contar sua história.</p>
                    <div className={style.box_info}>
                        <div className={style.imgConfeiteiro}>
                            <img src={confeiteiro} alt="Confeiteiro" />
                        </div>
                        <div className={style.box_p}>
                            <p>Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em <span>Editar Texto</span> ou clicar duas vezes sobre mim para adicionar o seu próprio conteúdo e trocar fontes. Sinta-se à vontade para arrastar e soltar em qualquer lugar em sua página. Sou um ótimo lugar para você contar sua história.</p>
                            <p>Este é um ótimo espaço para escrever um texto longo sobre a sua empresa e seus serviços. Você pode usar esse espaço para detalhar sua empresa. Fale sobre a sua equipe e sobre os serviços prestados por você. Conte aos seus visitantes sobre como teve a ideia de iniciar o seu negócio e o que o torna diferente de seus concorrentes. Faça com que sua empresa se destaque e mostre quem você é.</p>
                        </div>
                    </div>
                </div>
            </section>
        <Footer />
        </Container>
    )
}