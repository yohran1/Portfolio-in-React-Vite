import 'swiper/css'
import style from './Carrossel.module.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import cakes_1 from '../img/cakes/bolo-1.jpg'
import cakes_2 from '../img/cakes/bolo-2.jpg'
import cakes_3 from '../img/cakes/bolo-3.jpg'
import cakes_4 from '../img/cakes/bolo-4.jpg'
import cakes_5 from '../img/cakes/bolo-5.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { register } from 'swiper/element/bundle'
register()

const data = [cakes_1, cakes_2, cakes_3, cakes_4, cakes_5]


export default function Carrossel(){

    return(
        <div className={style.slide}>
            <p>Meu acervo de bolos</p>

            <Swiper 
                slidesPerView={1}
                pagination={{clickable: true}}
                navigation
                loop
            >
                {data.map((item, index) => {
                    return(
                        <SwiperSlide key={index}>
                            <img 
                                src={item}
                                alt='slide'
                                className={style.slide_item}
                            />
                        </SwiperSlide>
                    )})}

            </Swiper>
        </div>
    )
}