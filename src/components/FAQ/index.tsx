import './faq.scss'
import orangeIcon from '../../assets/course-vector-orange.svg'
import arrowDown from '../../assets/arrow-icon.svg'
import { useState } from 'react';


const Index = () => {

  const faqData = [
    {
      question: 'Чи потрібен досвід у програмуванні?',
      answer: 'Ні, курс "Верстка з нуля" починається з основ',
    },
    {
      question: 'Як відбувається оплата?',
      answer: 'Оплата можлива частинами або повністю одразу через сайт',
    },
    {
      question: 'Для кого підходять ці курси?',
      answer: 'Курси підходять для новачків і тих, хто хоче покращити знання',
    },
    {
      question: 'Чи є підтримка від менторів?',
      answer: 'Так, кожен студент має доступ до перевірки домашки і рекомендацій',
    },
    {
      question: 'Чи будуть записи уроків?',
      answer: 'Так, всі уроки доступні в записі',
    },
    {
      question: 'Чи отримаю я сертифікат?',
      answer: 'Так, після проходження курсу ви отримаєте сертифікат',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="faq">
      <div className="faq__container page__container">
          <h2 className="faq__title">
            Часті запитання
            <img src={orangeIcon} alt="" className="faq__icon" />
          </h2>
        <div className='faq__content'>
        <div className="faq__left">
          <p className="faq__subtitle">Якщо у тебе залишилися запитання про курси, навчальний процес або оплату – ми тут, щоб допомогти!</p>
          <p><strong>Напиши нам, і ми підберемо оптимальний курс саме для тебе</strong></p>
          <button className="faq__button">Залишити запитання</button>
        </div>

        <div className="faq__list">
          {faqData.map((item, i) => (
            <div
              key={i}
              className={`faq__item ${activeIndex === i ? 'active' : ''}`}
              onClick={() => setActiveIndex(i === activeIndex ? -1 : i)}
            >
              <div className="faq__question">
                {item.question}
                <img className={`${activeIndex === i ? '' : 'question-icon-active'}`} src={arrowDown} alt="toggle" />
              </div>
              {activeIndex === i && <div className="faq__answer">{item.answer}</div>}
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default Index;
