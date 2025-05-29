import './course-diractions.scss'
import orangeIcon from '../../assets/wp-vector-orange.svg'
import purpleStarIcon from '../../assets/course-vector-star-purple.svg'

const Index = () => {
    return (
        <>
            <section className="directions">
                <div className="directions__container page__container">
                    <h2 className="directions__title">
                        <span>Чого ви навчитеся на курсі?</span>
                        <img src={orangeIcon} alt="" className="directions__icon" />
                    </h2>
                    <p className="directions__subtitle">
                        Курс складається з чотирьох основних напрямків
                    </p>

                    <div className="directions__list">
                        {[
                            { num: '01', text: 'Верстка та UI-дизайн' },
                            { num: '02', text: 'Розробка на WordPress' },
                            { num: '03', text: 'E-commerce на WordPress' },
                            { num: '04', text: 'Розробка плагінів' },
                        ].map((item, i) => (
                            <div className="directions__card" key={i}>
                                <div className="directions__badge-wrapper">
                                    <img className="directions__badge-icon" src={purpleStarIcon} alt="" />
                                    <span className="directions__badge">{item.num}</span>
                                </div>
                                <p className="directions__text">{item.text}</p>
                            </div>

                        ))}
                    </div>

                    <button className="directions__button">Деталі про курс</button>
                </div>
            </section>

        </>
    );
};

export default Index;
