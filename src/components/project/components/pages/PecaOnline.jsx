import Container from "../../../layout/Container";
import HeaderLocation from "../HeaderLocation";
import NavBar from "../NavBar";
import style from './PecaOnline.module.css'
import CardCakes from "../CardCakes";
import Footer from '../../../layout/Footer'

import cake_1 from '../../img/cakes/pedido-1.png'
import cake_2 from '../../img/cakes/pedido-2.png'
import cake_3 from '../../img/cakes/pedido-3.png'
import cake_4 from '../../img/cakes/pedido-4.png'
import cake_5 from '../../img/cakes/pedido-5.png'
import cake_6 from '../../img/cakes/pedido-6.png'
import create from '../../img/cakes/criar.png'



export default function PecaOnline(){

    return (
        <Container customClass='min-height'>
            <NavBar />
        <section className={style.section}>
        <div className={style.container}>
            <HeaderLocation />
            <div className={style.infoPedidos}>
                {/* <h2>MENU DE BOLOS</h2> */}
                <p>Encomendar com 3 dias de antecedência</p>
                <h4>Bolos de Casamento</h4>
            </div>
            <div className={style.pedidos}>
                    <CardCakes 
                        title='Bolo de Casamento Dourado'
                        information='Esse é um item do seu menu. Adicione uma breve descrição.'
                        price='100'
                        img={cake_1}
                    />
                    <CardCakes 
                        title='Bolo de Casamento de Pérolas'
                        information='Esse é um item do seu menu. Adicione uma breve descrição.'
                        price='100'
                        img={cake_2}
                    />
                    <CardCakes 
                        title='Bolo de Casamento Rústico'
                        information='Esse é um item do seu menu. Adicione uma breve descrição.'
                        price='100'
                        img={cake_3}
                    />
                    <CardCakes 
                        title='Bolo de Casamento Romântico'
                        information='Esse é um item do seu menu. Adicione uma breve descrição.'
                        price='100'
                        img={cake_4}
                    />
                    <CardCakes 
                        title='Bolo de Casamento Lilás'
                        information='Esse é um item do seu menu. Adicione uma breve descrição.'
                        price='100'
                        img={cake_5}
                    />
                    <CardCakes 
                        title='Bolo de Casamento Florido'
                        information='Esse é um item do seu menu. Adicione uma breve descrição.'
                        price='100'
                        img={cake_6}
                    />
                </div>
                <div className={style.pedidos}>
                    <h3>Personalize Seu Bolo</h3>
                    <CardCakes 
                        title='Personalize seu próprio Bolo'
                        information='Esse é um item do seu menu. Adicione uma breve descrição.'
                        price='0,00'
                        img={create}
                    />
                </div>
        </div>
        </section>
            <Footer />
        </Container>
    )
}