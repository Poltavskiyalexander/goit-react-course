import React from 'react';
// import style from './Statistical.module.css';
import PropTypes from 'prop-types';
import style from './Statistical.module.css';
const randomColor = () => {
  return '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
};

const Statistical = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.stat_list}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={style.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistical.defaultProps = {
  title: '',
};

Statistical.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
export default Statistical;
