import purpleVector from '../../assets/course-vector-purple.svg'
import orangeVector from '../../assets/course-vector-orange.svg'
import orangeRegtangle from '../../assets/course-rectangle-orange.svg'
import purpleRegtangle from '../../assets/course-rectangle-purple.svg'
import './course.scss'

const Index = () => {
    return (
      <>
          <section className="about-course">
              <div className="about-course__container page__container">
                  <h2 className="about-course__title">
                      Про наш курс <img className="about-course__icon" src={purpleVector} alt="purple vector" />
                  </h2>
                  <p className="about-course__description">
                      Курс від IT-компанії Onyxer Digital, яка працює по всьому світу
                      Після навчання ви:
                  </p>
                  <ul className="about-course__benefits">
                      <li><img className="benefit__icon" src={orangeVector} alt="orange vector"/> Знайдете роботу
                          або станете фрілансером
                      </li>
                      <li><img className="benefit__icon" src={orangeVector} alt="orange vector"/> Опануєте верстку,
                          WordPress, плагіни, e-commerce
                      </li>
                      <li><img className="benefit__icon" src={orangeVector} alt="orange vector"/> Отримаєте
                          практичні навички та персональні рекомендації
                      </li>
                  </ul>

                  <div className="about-course__grid">

                      <div className="about-course__card about-course__card--stat about-course__card--small">
                          <div className="about-course__value">9</div>
                          <div className="about-course__label">місяців</div>
                          <div className="about-course__corner-wrapper">
                              <div className="about-course__corner"/>
                          </div>
                      </div>

                      <div className="about-course__card about-course__card--image about-course__card--wide">
                          <img src={purpleRegtangle} alt="main" />
                          <div className="about-course__tag">Що тебе чекає?</div>
                      </div>

                      <div className="about-course__card about-course__card--stat about-course__card--small">
                          <div className="about-course__value">63</div>
                          <div className="about-course__label">заняття</div>
                          <img src={orangeVector} alt="orange vector"/>
                          <div className="about-course__corner-wrapper">
                              <div className="about-course__corner">
                              </div>
                          </div>
                      </div>

                      <div className="about-course__card about-course__card--list about-course__card--small">
                          <ul>
                              <li>Персональні рекомендації</li>
                              <li>Перевірка домашніх завдань</li>
                              <li>Записи занять</li>
                          </ul>
                          <img src={orangeVector} className="about-course__icon" />
                      </div>

                      <div className="about-course__card about-course__card--stat about-course__card--small">
                          <div className="about-course__value">8</div>
                          <div className="about-course__label">персональних занять</div>
                          <div className="about-course__corner-wrapper">
                              <div className="about-course__corner"/>
                          </div>
                      </div>

                      <div className="about-course__card about-course__card--image about-course__card--wide">
                          <img src={orangeRegtangle} alt="bottom img"/>
                          <button className="about-course__cta about-course__button">Консультація</button>
                      </div>
                  </div>
              </div>
          </section>

      </>
    );
};

export default Index;