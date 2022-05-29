import propTypes from 'prop-types'
import s from './Statistics.module.css'

function generateRandomColor() {
    const chart = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += chart[Math.floor(Math.random() * 16)];
    }
    return color;
}

function Statistics({title, stats}){
    return (
        <section className={s.statistics}>
            <h2 className={s.title}>{title}</h2>

            <ul className={s.statList}>
            {stats.map(stat => (
                <li className={s.statsItem} key={stat.id} style={{ backgroundColor: generateRandomColor()}}>
                    <span className={s.label}>{stat.label}</span>
                    <span className={s.percentage}>{stat.percentage}%</span>
                </li>
            ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: propTypes.string.isRequired,
    stats: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            label: propTypes.string.isRequired,
            percentage: propTypes.number.isRequired,
        }),
    ),
};

export default Statistics