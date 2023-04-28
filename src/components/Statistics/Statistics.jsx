import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistic = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({ label, percentage, id }) => (
          <li key={id} className={css.item}>
            <span className={css.label}>{label}</span>
            <span className="percentage">
              {percentage}
              {`%`}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { Statistic };

Statistic.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.string,
  id: PropTypes.string,
};
