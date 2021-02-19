import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import StatisticsItem from './StatisticsItem';

const Statistics = ({ title, stats }) => (
    <section className={s.statistics}>
        {title && (<h2 className={s.title}>Upload stats</h2>)}

        <ul className={s.statList}>{stats.map(stat => (
            <li key={stat.id} className={s.item}>
                <StatisticsItem
                    label={stat.label}
                    percentage={stat.percentage}
                />
            </li>))}
        </ul>
    </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;