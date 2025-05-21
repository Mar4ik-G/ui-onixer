import './join-form.scss';
import orangeIcon from '../../assets/course-vector-orange.svg';
import purpleIcon from '../../assets/course-vector-star-purple.svg';


const Index = () => {

  return (
    <>
     <section className="join-form">
      <div className="join-form__container page__container">
        <div className="join-form__info">
          <h2 className="join-form__title">
            Хочеш навчатись?
            <img src={purpleIcon} alt="" className="join-form__icon" />
          </h2>
          <p className="join-form__text">
            Якщо хочеш навчитись, заповни анкету, і ми з тобою зв'яжемось!
          </p>
        </div>

        <div className="join-form__card">
          <img src={orangeIcon} alt="" className="join-form__card-icon" />

          <label className="join-form__label">Прізвище / Ім’я</label>
          <input
            type="text"
            className="join-form__input"
            placeholder="Горбайчук Дарія"
          />

          <label className="join-form__label">Email</label>
          <input
            type="email"
            className="join-form__input"
            placeholder="dariya228@gmail.com"
          />

          <button className="join-form__button">Надіслати</button>

          <p className="join-form__privacy">
            Надсилаючи, я приймаю умови Публічної оферти та надаю згоду на обробку своїх персональних даних
          </p>
        </div>
      </div>
    </section>
    </>
  );
}

export default Index;
