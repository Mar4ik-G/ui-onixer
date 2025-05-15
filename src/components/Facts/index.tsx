import vectorPurple from '../../assets/facts-vector-purple.svg'
import coca from '../../assets/coca.svg'
import reuter from '../../assets/reuter.svg'
import journal from '../../assets/journal.svg'
import forbes from '../../assets/forbes.svg'
import nasa from '../../assets/nasa.svg'
import './facts.scss'

const Index = () => {
    return (
        <>
            <section className="facts">
                <div className="facts__container page__container">
                    <h2 className="facts__title">
                        Цікавий факт <img src={vectorPurple} alt="icon" className="facts__icon" />
                    </h2>
                    <p className="facts__subtitle">30% сайтів по всьому світу розроблено на WordPress</p>

                    <div className="facts__brands">
                        <div className="facts__brand"><img src={coca} alt="Coca Cola" /></div>
                        <div className="facts__brand"><img src={reuter} alt="Reuters" /></div>
                        <div className="facts__brand"><img src={journal} alt="WSJ" /></div>
                        <div className="facts__brand"><img src={forbes} alt="Forbes" /></div>
                        <div className="facts__brand"><img src={nasa} alt="NASA" /></div>
                    </div>
                </div>
            </section>

        </>
    );
};


export default Index;