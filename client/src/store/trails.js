const LOAD_ALL_TRAILS = 'trails/LOAD_ALL_TRAILS';
const LOAD_QUERIED_TRAILS = 'trails/LOAD_QUERIED_TRAILS';

const LOAD_TRAIL = 'trails/LOAD_TRAIL';
const SET_WEATHER = '/weather/SET_WEATHER';

const SET_MATCHES = 'trails/SET_MATCHES';

export const loadAllTrails = trails => ({
  type: LOAD_ALL_TRAILS,
  trails,
});

export const loadQueriedTrails = (city, trails) => ({
  type: LOAD_QUERIED_TRAILS,
  city,
  trails,
});

export const loadTrail = trail => ({
  type: LOAD_TRAIL,
  trail,
});

export const setMatches = matches => ({ type: SET_MATCHES, matches });

const setWeather = (weather, week) => {
  return {
    type: SET_WEATHER,
    weather,
    week,
  };
};

export const getAllTrails = () => async dispatch => {
  const res = await fetch('/api/trails');
  if (res.ok) {
    const data = await res.json();
    dispatch(loadAllTrails());
  }
};

export const getTrails = name => async dispatch => {
  const res = await fetch(`/api/trails/us/${name.toLowerCase()}`);
  if (res.ok) {
    const data = await res.json();

    dispatch(loadQueriedTrails(data.city, data.trails));
  }
};

export const getTrail = id => async dispatch => {
  const res = await fetch(`/api/trails/trail/${id}`);

  if (res.ok) {
    const data = await res.json();

    dispatch(loadTrail(data));
  }
};

export const getWeather = (lat, lng) => {
  return async dispatch => {
    const res = await fetch(`/api/trails/weather/lat=${lat}&lng=${lng}`);
    if (res.ok) {
      const weather = await res.json();

      const convertKelvintoFahrenheit = temp => temp * (9 / 5) - 459.67;
      const week = weather.daily.slice(0, 4).map((d, i) => {
        const icon = `http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`;
        const min = convertKelvintoFahrenheit(d.temp.min);
        const max = convertKelvintoFahrenheit(d.temp.max);
        const options = { weekday: 'long' };
        const today = new Date();
        const day = new Date(today);
        day.setDate(day.getDate() + i);
        const dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(day);

        return {
          icon,
          min,
          max,
          day,
          dayOfWeek,
        };
      });

      dispatch(setWeather(weather, week));
    }
  };
};

export default function trailsReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_ALL_TRAILS:
      return { ...state, list: action.trails };
    case LOAD_QUERIED_TRAILS:
      return { ...state, city: action.city, matches: action.trails };

    case LOAD_TRAIL:
      return { ...state, current: action.trail };

    case SET_WEATHER:
      return {
        ...state,
        weather: {
          current: action.weather,
          daily: action.week,
        },
      };

    case SET_MATCHES:
      return { ...state, matches: action.match };

    default:
      return state;
  }
}
