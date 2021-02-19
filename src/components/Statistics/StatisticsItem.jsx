import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const StatisticsItem = ({ id, label, percentage }) => (
    <>
        <span className={s.label}>{label}</span>
        <span className={s.percentage}>{percentage}</span>
    </>
);

export default StatisticsItem;