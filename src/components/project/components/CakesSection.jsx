import style from './CakesSection.module.css'
import { Link } from 'react-router-dom'
import cake_1 from '../img/cakes/bolo-branco.webp'
import cake_2 from '../img/cakes/bolo-branco-tres-andares.webp'
import confeiteiro from '../img/cakes/confeiteiro.webp'


export default function CakesSection(){

    return(
        <section>

            <div className={style.cakes_section}>
                <div className={style.info}>
                    <h2>MEUS BOLOS SÃO CONFECCIONADOS COM AMOR</h2>
                    <p>Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em “Editar Texto” ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes. Sou um ótimo espaço para você contar sua história.</p>
                </div>

                <div className={style.img_cake}>
                    <img src={cake_1} alt={cake_1} />
                </div>
            </div>

            <div className={style.cakes_links}>
                <div className={style.cakes_box}>
                    <div className={style.image_container}>
                        <img src={cake_2} alt='Cake' />
                        <Link to='/projeto/pecaOnline'>
                            <button>Faça seu pedido online</button>
                        </Link>
                    </div>
                </div>
                <div className={style.cakes_box}>
                    <div className={style.image_container}>
                        <img src={confeiteiro} alt='Confeiteiro' />
                        <Link to='/projeto/sobre'>
                            <button>Conheça o confeiteiro</button>
                        </Link>
                    </div>
                </div>
                <div className={style.cakes_box}>
                    <div className={style.image_container}>
                        <img src={cake_2} alt='Cake' />
                        <Link to='/projeto/pecaOnline'>
                            <button>Personalize seu bolo</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}