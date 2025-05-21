import './footer.scss';
import logo from '../../../public/logo.svg'; // заміни шлях за потреби

const Index = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <img src={logo} alt="Onyxer logo" className="footer__logo" />
          <ul className="footer__links">
            <li>Курси</li>
            <li>Наші ментори</li>
            <li>Відгуки</li>
            <li>FAQ</li>
            <li>Блог</li>
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__heading">Соціальні мережі</h4>
          <ul className="footer__links">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Tik Tok</li>
            <li>LinkedIn</li>
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__heading">Контакти</h4>
          <div className="footer__contact">
            <div className='contact__item'>
              <p>Телефон</p>
              <p>+380 (67) 555 55 55</p>
            </div>
            <div className='contact__item'>
              <p>Email</p>
              <p>itacademyonxyer@gmail.com</p> 
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Index;
