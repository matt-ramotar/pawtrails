const faker = require('faker');

const fs = require('fs').promises;

const reactions = [
  '🐾',
  '💯',
  '🆒',
  '🌄',
  '🌋',
  '🌞',
  '🌇',
  '🏔️',
  '🌊',
  '🌌',
  '🚵',
  '🌼',
  '🎉',
  '😫',
  '🍺',
  '🐕',
  '🔥',
  '⛺',
  '🌡️',
  '🙌',
  '👍',
  '💩',
  '🗑️',
  '🦝',
  '🥴',
  '🐺',
  '🐻',
  '🦌',
  '🌲',
  '❤️',
  '💪',
  '🏃',
];
const trailConditions = [
  'Great!',
  'Blowdown',
  'Bridge out',
  'Bugs',
  'Closed',
  'Fee',
  'Flooded',
  'Icy',
  'Muddy',
  'No shade',
  'Off trail',
  'Over grown',
  'Private property',
  'Rocky',
  'Scramble',
  'Snow',
  'Washed out',
];

function getRandomUser() {
  return Math.floor(Math.random() * 52) + 1;
}

function getRandomRating() {
  return Math.floor(Math.random() * 3) + 3;
}

function getRandomNumberBetween1And5() {
  return Math.floor(Math.random() * 5) + 1;
}

function getRandomReaction() {
  const randomNumber = Math.floor(Math.random() * 31);
  return reactions[randomNumber];
}

function getRandomTrailCondition() {
  const randomNumber = Math.floor(Math.random() * 16);
  return trailConditions[randomNumber];
}

async function genReviews() {
  const reviews = [];

  const reviewTrailConditions = [];

  const reviewReactions = [];

  const trailSummaries = [];

  let trail = 1;

  while (trail <= 475) {
    const trailSummary = {
      counts: {
        stars: {
          _total: 0,
          5: 0,
          4: 0,
          3: 0,
          2: 0,
          1: 0,
        },
        reviews: {
          _total: 0,
        },
        reactions: {},
        trailConditions: {},
      },
    };
    const startReviewNumber = (trail - 1) * 3 + 1;
    const endReviewNumber = startReviewNumber + 2;
    let reviewNumber = startReviewNumber;

    while (reviewNumber <= endReviewNumber) {
      const review = {
        trailId: trail,
        userId: getRandomUser(),
        rating: getRandomRating(),
        body: faker.lorem.paragraph(),
        date: faker.date.recent(),
        createdAt: 'new Date()',
        updatedAt: 'new Date()',
      };

      reviews.push(review);

      // update summary statistics

      trailSummary['counts']['stars']['_total']++;
      trailSummary['counts']['stars'][review.rating]++;
      trailSummary['counts']['reviews']['_total']++;

      const numberOfReactions = getRandomNumberBetween1And5();
      const numberOfTrailConditions = getRandomNumberBetween1And5();

      let reactionNumber = 1;

      while (reactionNumber <= numberOfReactions) {
        const reaction = getRandomReaction();
        // update summary statistics
        trailSummary['counts']['reactions'][reaction] = trailSummary['counts']['reactions'][reaction]
          ? trailSummary['counts']['reactions'][reaction] + 1
          : 1;

        // push to reviewReactions
        reviewReactions.push({ reviewId: reviewNumber, reaction, createdAt: 'new Date()', updatedAt: 'new Date()' });

        reactionNumber++;
      }

      let trailConditionNumber = 1;

      while (trailConditionNumber <= numberOfTrailConditions) {
        const trailCondition = getRandomTrailCondition();
        // update summary statistics
        trailSummary['counts']['trailConditions'][trailCondition] = trailSummary['counts']['trailConditions'][
          trailCondition
        ]
          ? trailSummary['counts']['trailConditions'][trailCondition] + 1
          : 1;

        // push to reviewTrailConditions
        reviewTrailConditions.push({
          reviewId: reviewNumber,
          trailCondition,
          createdAt: 'new Date()',
          updatedAt: 'new Date()',
        });

        trailConditionNumber++;
      }

      reviewNumber++;
    }

    const jsonifiedSummary = JSON.stringify(trailSummary);

    trailSummaries.push({
      trailId: trail,
      summary: jsonifiedSummary,
      createdAt: 'new Date()',
      updatedAt: 'new Date()',
    });

    trail++;
  }

  await fs.writeFile('./reviews.json', JSON.stringify(reviews));
  await fs.writeFile('./reviewTrailConditions.json', JSON.stringify(reviewTrailConditions));
  await fs.writeFile('./reviewReactions.json', JSON.stringify(reviewReactions));
  await fs.writeFile('./trailSummaries.json', JSON.stringify(trailSummaries));
}

genReviews();
