const { getTrailInfo } = require('./getTrailInfo');

const getTrail = async trailHead => {
  const { details, tags, images } = await getTrailInfo(trailHead);
  return await {
    ...trailHead,
    overview: details.overview,
    lat: details.lat,
    lng: details.lng,
    difficulty: details.difficulty,
    length: details.length,
    elevationGain: details.elevationGain,
    routeType: details.routeType,
    tags,
    images,
  };
};

module.exports = getTrail;
