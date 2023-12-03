import { createContext, useContext, useState } from 'react';

const RatingsContext = createContext(undefined);

export const useRatingsContext = () => useContext(RatingsContext);

export const RatingsProvider = ({ children }) => {
  const [good, setGoodRating] = useState(0);
  const [neutral, setNeutralRating] = useState(0);
  const [bad, setBadRating] = useState(0);
  const [total, setTotalRatings] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const addGoodRating = () => {
    setGoodRating(good + 1);
  };
  const addNeutralRating = () => {
    setNeutralRating(neutral + 1);
  };
  const addBadRating = () => {
    setBadRating(bad + 1);
  };
  const countTotalRatings = () => {
    setTotalRatings(good + neutral + bad);
  };
  const countPositivePercentage = () => {
    setPositivePercentage(Math.round((good / total) * 100));
  };

  return (
    <RatingsContext.Provider
      value={{
        good,
        neutral,
        bad,
        total,
        positivePercentage,
        addGoodRating,
        addNeutralRating,
        addBadRating,
        countTotalRatings,
        countPositivePercentage,
      }}
    >
      {children}
    </RatingsContext.Provider>
  );
};
