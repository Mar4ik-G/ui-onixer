import './course-fit.scss'
import orangeIcon from '../../assets/revenue-vector-orange.svg'
import purpleIcon from '../../assets/hero-vector-purple.svg'


const Index = () => {
    return (
        <>
            <section className="course-fit">
                <div className="course-fit__container page__container">
                    <div className='course-fit__header'>
                        <h2 className="course-fit__title">
                            Як відбувається навчання?
                            <br/>
                            Для кого підійде курс?
                        </h2>
                        <img src={orangeIcon} alt="" className="course-fit__icon"/>
                    </div>

                    <div className="course-fit__content">
                        <div className="course-fit__left">
                            <p className="course-fit__description">
                                Навчання включає онлайн-лекції, практичні завдання з перевіркою та розбір реальних кейсів із персональними рекомендаціями від менторів
                            </p>
                            <button className="course-fit__button">Консультація</button>
                        </div>

                        <div className="course-fit__right">
                            <p className="course-fit__note">Курс підходить як новачкам у IT, так і досвідченим розробникам</p>

                            <div className="course-fit__group">
                                <p><strong>Новачки:</strong></p>
                                <ul>
                                    <li><img src={purpleIcon} alt=""/> Хочуть отримати нову професію</li>
                                    <li><img src={purpleIcon} alt=""/> Освоїли HTML та CSS самостійно</li>
                                    <li><img src={purpleIcon} alt=""/> Пройшли курс Front-End розробки</li>
                                </ul>
                            </div>

                            <div className="course-fit__group">
                                <p><strong>Досвідчені розробники:</strong></p>
                                <ul>
                                    <li><img src={purpleIcon} alt=""/> Хочуть покращити свої знання WordPress</li>
                                </ul>
                            </div>

                            <div className="course-fit__group">
                                <p><strong>За віком:</strong></p>
                                <ul>
                                    <li><img src={purpleIcon} alt=""/> Від 14 до 22+ років</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Index;