/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

import ReviewListItem from './ReviewListItem';
import styles from '../style.module.css';

const ReviewList = ({ reviews, type }) => {
  // display only 7 reviews
  // if less than 7 reviews, display what we have
  let reviewListItems;
  if (reviews.length < 8) {
    reviewListItems = reviews.map(review => <ReviewListItem review={review} key={review._id} />);
  // otherwise, display 2 highest, 3 middlest, 2 lowest
  } else {
    const midpoint = Math.floor(reviews.length / 2);
    const reviewsToDisplay = [reviews[0], reviews[1], reviews[midpoint - 1],
      reviews[midpoint], reviews[midpoint + 1], reviews[reviews.length - 2],
      reviews[reviews.length - 1]];
    reviewListItems = reviewsToDisplay
      .map(review => <ReviewListItem review={review} key={review._id} type={type}/>);
  }
  return (
    <div className={`${styles.review_list}`}>
      <div className={`${styles.subsection_title}`}>
        <a href="/">{type === 'user' ? 'UserReviews' : 'Critic Reviews'}</a>
      </div>
      <div className={`${styles.pad_top_half}`}>
        <div className={`${styles.critic_reviews2}`}>
          {reviewListItems}
        </div>
      </div>
      <div>
        <a href="/" className={`${styles.see_all} ${styles.title} ${styles.boxed} ${styles.oswald}`}>{`SEE ALL ${reviews.length} REVIEWS`}</a>
      </div>
    </div>
  );
};

export default ReviewList;

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
