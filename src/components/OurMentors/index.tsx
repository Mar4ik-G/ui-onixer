import './our-mentors.scss'
import purpleStarIcon from '../../assets/course-vector-purple.svg'
import orangeStarIcon from '../../assets/course-vector-orange.svg'
import Nazar from '../../assets/Nazar.png'
import Valeria from '../../assets/Valeria.png'
import Max from '../../assets/Max.png'
import Sofa from '../../assets/Sofa.png'
import facebook from '../../assets/facebook.svg'
import linkedin from '../../assets/linkedin.svg'



const Index = () => {

    const mentors = [
        {
            name: 'Назар Козак',
            position: 'Lead WordPress Developer',
            text: 'Розробник з 12-річним досвідом. Працював у Envato та Automattic, створив 30+ преміум-шаблонів для ThemeForest. Спеціалізується на продуктивності сайтів, оптимізації Core Web Vitals',
            img: Nazar,
            icon: facebook,
        },
        {
            name: 'Валерія Гончаренко',
            position: 'Full-Stack WP Developer',
            text: 'Досвід 8 років. Колишня розробниця Kinsta, експертка у WooCommerce, REST API та хмарних рішеннях для масштабування WordPress-проєктів',
            img: Valeria,
            icon: facebook,
        },
        {
            name: 'Максим Шевченко',
            position: 'Senior Plugin Developer',
            text: 'Досвід 9 років. Автор 15+ популярних WP-плагінів, серед яких рішення для AI-контенту. Був CTO стартапу, що працює з автоматизацією WordPress',
            img: Max,
            icon: linkedin,
        },
        {
            name: 'Софія Бойко',
            position: 'UX/UI Designer',
            text: 'У дизайні 7 років. Співпрацювала з Elementor та WPBakery, створюючи кастомні інтерфейси. Фахівчиня з дизайн-систем, мобільної адаптації та інтерактивних веб-рішень',
            img: Sofa,
            icon: facebook,
        },
    ];


    return (
        <>
            <section className="mentors">
                <div className="mentors__container page__container">
                    <div className="mentors__header">
                        <h2 className="mentors__title">Наші ментори</h2>
                        <img src={purpleStarIcon} alt="" className="mentors__icon" />
                    </div>

                    <div className="mentors__arrows">
                        <button className="mentors__arrow mentors__arrow--prev">←</button>
                        <button className="mentors__arrow mentors__arrow--next">→</button>
                    </div>

                    <div className="mentors__list">
                        {mentors.map(({ name, position, text, img, icon }, i) => (
                            <div key={i} className="mentors__card">
                                <div className="mentors__image-wrapper">
                                    <img src={img} alt={name} className="mentors__image" />
                                    <img src={orangeStarIcon} alt="" className="mentors__badge" />
                                </div>
                                <div className="mentors__info">
                                    <div className="mentors__card-header">
                                        <div className='card-header__title'>
                                        <p className="mentors__name">{name}</p>
                                        <p className="mentors__position">{position}</p>
                                        </div>
                                    <img src={icon} alt="" className="mentors__social" />
                                    </div>
                                    <p className="mentors__desc">{text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </>
    );
};

export default Index;
