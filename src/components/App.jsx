import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { useRatingsContext } from './RatingsContext/RatingsContext';
import { useEffect } from 'react';

export const App = () => {
  const {
    good,
    neutral,
    bad,
    total,
    countTotalRatings,
    countPositivePercentage,
  } = useRatingsContext();

  useEffect(() => {
    countTotalRatings();
  }, [good, neutral, bad, countTotalRatings]);

  useEffect(() => {
    countPositivePercentage();
  }, [good, countPositivePercentage]);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
