export default function calcAvgRating(counts) {
  const { stars, reviews } = counts;

  const numOfOneStar = stars['1'];
  const numOfTwoStar = stars['2'];
  const numOfThreeStar = stars['3'];
  const numOfFourStar = stars['4'];
  const numOfFiveStar = stars['5'];

  const pairs = [
    [numOfOneStar, 1],
    [numOfTwoStar, 2],
    [numOfThreeStar, 3],
    [numOfFourStar, 4],
    [numOfFiveStar, 5],
  ];

  const totalStars = pairs.reduce((total, pair) => {
    total += pair[0] * pair[1];
    console.log(total);
    return total;
  }, 0);

  console.log(totalStars);

  const totalReviews = reviews['_total'];

  const avgRating = totalStars / totalReviews;

  return Math.round(avgRating * 10) / 10;
}
