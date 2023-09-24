export function getCityWeatherEndpoint(city) {
  // eslint-disable-next-line no-undef
  const key = process.env.REACT_APP_API_KEY;
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
}

export function getIconWeatherUrl(icon) {
  return `https://openweathermap.org/img/wn/${icon}.png`;
}
