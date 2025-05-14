import heroImg from '../../assets/hero-rectangle.svg'
import verticalOrangeSVG from '../../assets/hero-vector-orange.svg'
import verticalPurpleSVG from '../../assets/hero-vector-purple.svg'
import './hero.scss'

const Index = () => {
    return (
        <>
            <section className="hero">
                <div className="hero__container page__container">
                    <div className="hero__left">
                        <h1 className="hero__title">
                            <img className='hero__icon' src={verticalOrangeSVG} alt="verticalOrangeSVG"/>
                            Стань Full Stack WordPress Developer отримай роботу
                            <img className='hero__icon' src={verticalPurpleSVG} alt="verticalPurpleSVG"/>
                            за 9 місяців!
                        </h1>
                        <button className="hero__button">Записатись на консультацію</button>
                        <img className="hero__image" src={heroImg} alt="main"/>
                        <div className="hero__label"><p>
                            Курси розробки з нуля від агенції, яка працевлаштує найкращих
                            випускників
                        </p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};


export default Index;