import icon1 from '../../assets/course-vector-wave-purple.svg'
import icon2 from '../../assets/course-vector-orange.svg'
import icon3 from '../../assets/facts-vector-purple.svg'
import icon4 from '../../assets/wp-vector-orange.svg'
import iconLink from '../../assets/arrow-link.svg'
import './course-details.scss'

const Index = () => {

    const courses = [
        {
            title: 'Курс',
            subtitle: 'Курс Верстка з нуля',
            lessons: 25,
            hours: 90,
            duration: 6,
            seats: 37,
            price: '30 000',
        },
        {
            title: 'Курс',
            subtitle: 'WordPress розробник ',
            lessons: 45,
            hours: 38,
            duration: 3,
            seats: 30,
            price: '88 999',
        },
        {
            title: 'Курс',
            subtitle: 'ECommerce на WooCommerce ',
            lessons: 15,
            hours: 98,
            duration: 3,
            seats: 20,
            price: '54 000',
        },
        {
            title: 'Курс',
            subtitle: 'Розробка плагінів',
            lessons: 14,
            hours: 68,
            duration: 7,
            seats: 40,
            price: '24 600',
        }
    ]


    return (
        <>
            <div className="details">
                <h2 className="details__title">
                    Детальніше про курси
                    <img className="details__icon" src={icon3} alt="" />
                </h2>

                <div className="details__cards">
                    {courses.map(course => (
                        <div className="details__card">
                            <div className="details__card-header">
                                <div>
                                    <div className="details__course-subtitle">{course.subtitle}</div>
                                </div>
                                <img src={iconLink} alt="Arrow" className="details__arrow" />
                            </div>

                            <ul className="details__info-list">
                                <li><img src={icon2} /> {course.lessons} занять</li>
                                <li><img src={icon3} /> {course.hours} годин</li>
                                <li><img src={icon4} /> {course.duration} місяці</li>
                                <li><img src={icon1} /> {course.seats} місць</li>
                            </ul>

                            <div className="details__price-row">
                                <span className="details__price-label">Ціна</span>
                                <span className="details__price-value">{course.price} грн</span>
                            </div>

                            <button className="details__button">Забронювати</button>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default Index;