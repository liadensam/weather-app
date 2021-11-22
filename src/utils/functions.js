//five day forcast function

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];     
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];  


export const getDayfromUnix = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} `;
};


export const filterForecast = (array) => {
  return array.filter((_, index) => index % 8 === 0);
};

export const formatUnixTime = (timestamp) => {
  const hours = new Date(timestamp * 1000).getHours();
  const minutes = new Date(timestamp * 1000).getMinutes();
  const twoDigitMinutes = minutes.toString().padStart(2, "0");
  return `${hours}:${twoDigitMinutes}`;
  };