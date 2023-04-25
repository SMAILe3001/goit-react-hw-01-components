import PropTypes from 'prop-types';
import { StatisticElement } from './statistic-elements';
import css from './statistics.module.css';

export function Statistics({ text, stats }) {
  return (
    <section className={css.statistics}>
      {text && <h2 className={css.title}>{text}</h2>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <StatisticElement key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  text: PropTypes.string,
  data: PropTypes.array,
};
