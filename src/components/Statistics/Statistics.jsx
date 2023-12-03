import css from './Statistics.module.css';
import propTypes from 'prop-types';
import { useRatingsContext } from 'components/RatingsContext/RatingsContext';

export const Statistics = () => {
  const { good, neutral, bad, total, positivePercentage } = useRatingsContext();
  return (
    <>
      <ul className={css.statisticsList}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  positivePercentage: propTypes.number,
};
