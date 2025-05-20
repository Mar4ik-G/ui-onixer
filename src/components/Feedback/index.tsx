import './feedback.scss'
import purpleRegtangleImg from '../../assets/feedback-ragtangle-purple.png'
import orangeStar from '../../assets/hero-vector-purple.svg'
import purpleMainStar from '../../assets/facts-vector-purple.svg'
import purpleStar from '../../assets/course-vector-orange.svg'
import arrowIcon from '../../assets/arrow-icon.svg'


const Index = () => {

  const feedbacks = [
    {
      name: 'Вікторія',
      role: '',
      avatar: 'https://i.pravatar.cc/60?u=1',
      icon: purpleStar,
      text: `Я дизайнер, але хотіла навчитись верстати сайти на WordPress. Курс з верстки і розробки був саме тим, що потрібно! Все пояснюється доступно, багато практичних завдань, а головне — тепер можу самостійно створювати сайти.`,
    },
    {
      name: 'Василь',
      role: '',
      avatar: '',
      icon: orangeStar,
      text: `Я дизайнер, але хотів навчитись верстати сайти на WordPress. Курс з верстки і розробки був саме тим, що потрібно! Все пояснюється доступно. Тепер можу самостійно створювати сайти!`,
    },
    {
      name: 'Людмила',
      role: '',
      avatar: 'https://i.pravatar.cc/60?u=2',
      icon: purpleStar,
      text: `Курс з розробки плагінів — це топ! Дізналась багато нових речей про API WordPress, кастомні типи записів і як правильно будувати архітектуру плагінів. Тепер пишу власні рішення для клієнтів. Я дуже задоволена!`,
    },
    {
      name: 'Олег',
      role: '',
      avatar: 'https://i.pravatar.cc/60?u=3',
      icon: orangeStar,
      text: `Проходив курс WordPress Full Stack Developer, я дуже задоволений! Викладачі детально пояснюють матеріал, багато практики, і вже під час навчання вдалося зробити кілька реальних проєктів.`,
    },
  ]

  return (
    <>
<section className="feedback">
      <div className="page__container">
        <div className="feedback__header">
          <h2 className="feedback__title">Відгуки наших студентів  <img className="feedback__title-icon" src={purpleMainStar} alt="" /></h2>
          <div className="feedback__nav">
            <img className='arrow-prev' src={arrowIcon} alt="prev" />
            <img className='arrow-next' src={arrowIcon} alt="next" />
          </div>
        </div>

        <div className="feedback__list">
          {feedbacks.map((item, i) => (
            <div className="feedback__card" key={i}>
              <div className="feedback__card-top">
                <div className="feedback__name">
                {item.avatar ? (
                  <img className="feedback__avatar" src={item.avatar} alt={item.name} />
                ) : (
                  <div className="feedback__avatar feedback__avatar--initial">
                    {item.name.charAt(0)}
                  </div>
                )}
                  {item.name}
                <img className="feedback__icon" src={item.icon} alt="icon" />
                </div>
              </div>
              <div className="feedback__text">{item.text}</div>
            </div>
          ))}
        </div>

        <div className='feedback__bottom'>
          <p className='feedback__bottom-label'>Час діяти!</p>
          <img src={purpleRegtangleImg} alt="Image"/>
        </div>
      </div>
    </section>
    </>
  );
}

export default Index;
