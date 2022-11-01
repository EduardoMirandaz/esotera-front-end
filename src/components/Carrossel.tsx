import styles from './Carrossel.module.css'
import { Carousel } from 'react-responsive-carousel';
import Carrossel1 from '../assets/Carrossel1.png'
import Carrossel2 from '../assets/Carrossel2.png'
import Carrossel3 from '../assets/Carrossel3.png'
import Carrossel4 from '../assets/Carrossel4.png'

export function Carrossel(){
    return(
        <>
            <div className={styles.carrosselContainer}>
                <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
                    <div>
                        <img src={Carrossel1} />
                    </div>
                    <div>
                        <img src={Carrossel2} />
                    </div>
                    <div>
                        <img src={Carrossel3} />
                    </div>
                    <div>
                        <img src={Carrossel4} />
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default Carrossel