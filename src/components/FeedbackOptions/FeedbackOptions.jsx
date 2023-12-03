import css from './FeedbackOptions.module.css';
import propTypes from 'prop-types';
import { useRatingsContext } from '../RatingsContext/RatingsContext';

export const FeedbackOptions = () => {
  const { addGoodRating, addNeutralRating, addBadRating } = useRatingsContext();
  const options = [
    { desc: 'good', func: addGoodRating },
    { desc: 'neutral', func: addNeutralRating },
    { desc: 'bad', func: addBadRating },
  ];
  return (
    <>
      {options.map(option => {
        return (
          <button
            type="button"
            onClick={option.func}
            key={option.desc}
            className={css.rateButtons}
          >
            {option.desc}
          </button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  option: propTypes.shape({
    desc: propTypes.string,
    func: propTypes.func,
  }),
};
