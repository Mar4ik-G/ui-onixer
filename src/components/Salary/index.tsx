import './salary.scss'
import vectorOrange from '../../assets/revenue-vector-orange.svg'

const Index = () => {

    const chartData = [
        { label: '$500', value: '10%' },
        { label: '$1000', value: '40%' },
        { label: '$2000', value: '100%', active: true },
        { label: '$3000', value: '60%' },
        { label: '$4000', value: '30%' },
        { label: '$5000', value: '20%' },
        { label: '$6000', value: '10%' },
        { label: '$7000', value: '6%' },
        { label: '$8000', value: '4%' },
        { label: '$9000', value: '3%' },
        { label: '$10000', value: '2%' },
    ];


    return (
        <>
            <section className="salary">
                <div className="salary__container page__container">
                    <h2 className="salary__title">
                        Заробітня плата <img className="salary__icon" src={vectorOrange} alt=""/>
                    </h2>
                    <p className="salary__subtitle">Розрахуй зарплату WordPress-розробника</p>

                    <div className="salary__filters">
                        <select className="salary__select">
                            <option value="Dou">Dou</option>
                        </select>
                        <select className="salary__select">
                            <option value="Січень, 2025">Січень, 2025</option>
                        </select>
                        <select className="salary__select">
                            <option value="1 рік досвіду">1 рік досвіду</option>
                        </select>
                        <select className="salary__select">
                            <option value="Україна">Україна</option>
                        </select>
                        <button className="salary__button">Розрахувати</button>
                    </div>

                    <div className="salary__chart-wrapper">
                        <div className="salary__chart">
                            <p className="salary__range">$1 025 - 2 500</p>
                            {chartData.map((bar, i) => (
                                <div
                                    key={i}
                                    className={`bar${bar.active ? ' bar--active' : ''}`}
                                    style={{ height: bar.value }}
                                    data-label={bar.label}
                                ></div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default Index;