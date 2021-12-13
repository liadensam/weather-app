//five day forcast function

export const cities = [
  "Abuja",
  "Amsterdam",
  "Aswān",
  "Athens",
  "Bangkok",
  "Barcelona",
  "Belgrade",
  "Brno",
  "Budapest",
  "Buenos Aires",
  "Cape Town",
  "Dakar",
  "El Alto",
  "Hanoi",
  "Harbin",
  "Kingston",
  "Kuala Lumpur",
  "Kuwait",
  "Kyiv",
  "Lagos",
  "Ljubljana",
  "London",
  "Madrid",
  "Melbourne",
  "Miami",
  "Minsk",
  "Moscow",
  "New Delhi",
  "New York",
  "Norilsk",
  "Paris",
  "Porto",
  "Prague",
  "Reykjavik",
  "Seoul",
  "Skopje",
  "Sofia",
  "Split",
  "Sydney",
  "São Paulo",
  "Tallinn",
  "Tenerife",
  "Tirana",
  "Toronto",
  "Vancouver",
  "Vienna",
  "Vilnius",
  "Warsaw",
  "Winnipeg",
  "Yakutsk",
];     


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

//specific unit, function to get it displayed correctly the date
export const getDayfromUnix = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} `;
};

//filter the forecast so I gte five days
export const filterForecast = (array) => {
  return array.filter((_, index) => index % 8 === 0);
};

//displayiind the hours for sunset and sunrise correctly
export const formatUnixTime = (timestamp) => {
  const hours = new Date(timestamp * 1000).getHours();
  const minutes = new Date(timestamp * 1000).getMinutes();
  const twoDigitMinutes = minutes.toString().padStart(2, "0");
  return `${hours}:${twoDigitMinutes}`;
  };