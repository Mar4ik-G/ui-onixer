import logo from '../../../public/logo.svg'
import './header.scss'

const Index = () => {
    return (
        <>
            <nav className="header">
                <div className="header__logo">
                    <img src={logo} alt="logo"/>
                </div>

                <ul className="header__links">
                    <li className="header__link">Курси</li>
                    <li className="header__link">Наші ментори</li>
                    <li className="header__link">FAQ</li>
                    <li className="header__link">Відгуки</li>
                    <li className="header__link">Блог</li>
                </ul>

                <div className="header__actions">
                    <div className="header__lang">
                        <span>УКР</span><span> РУС</span>
                    </div>
                    <button className="header__login">Увійти</button>
                </div>
            </nav>

        </>
    );
};

export default Index;