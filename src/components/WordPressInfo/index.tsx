import Rectangle from '../../assets/wp-rectangle.svg'
import orangeVector from '../../assets/wp-vector-orange.svg'
import './wp-info.scss'


const Index = () => {
    return (
        <>
            <section className="wp-info">
                <div className="wp-info__container page__container">
                    <div className="wp-info__content">
                        <h2 className="wp-info__title">Що таке WordPress? <img src={orangeVector} alt=""/></h2>
                        <h2 className="wp-info__title-mobile">WordPress? <img src={orangeVector} alt=""/></h2>
                        <p className="wp-info__description">
                            WordPress — найпопулярніша в світі платформа для керування контентом на сайті. Вона надає
                            адміністративну панель для власника сайту, за допомогою якої він може гнучко налаштувати та
                            керувати усіма сторінками сайту
                        </p>
                        <h3 className='wp-info__subtitle'>Full Stack WordPress Developer — це:</h3>
                        <ul className="wp-info__list">
                            <li className="wp-info__item">Спеціаліст, який створює сайт з нуля</li>
                            <li className="wp-info__item">Верстає front-end та робить його адаптивним</li>
                            <li className="wp-info__item">Розробляє back-end функціонал</li>
                            <li className="wp-info__item">Інтегрує сервіси (платежі, запити, листи тощо)</li>
                        </ul>
                    </div>
                    <div className="wp-info__image">
                        <img src={Rectangle} alt="WordPress illustration"/>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Index;
