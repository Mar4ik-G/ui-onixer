import './App.scss'
import Header from "./components/Header";
import HeroSection from "./components/ HeroSection";
import WordPressInfo from "./components/WordPressInfo";

function App() {
    return (
        <div className="wrapper">
            <div className="page">
                <header className="page__header">
                    <div className="page__container">
                        <Header />
                    </div>
                </header>

                <main className="page__content">
                    <div className="page__container">
                        <HeroSection/>
                        <WordPressInfo/>
                    </div>
                </main>

                <footer className="page__footer">
                    <div className="page__container">FOOTER</div>
                </footer>
            </div>
        </div>
    )
}

export default App
