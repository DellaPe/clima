import getCityCode from "./../getCityCode"
import convertUnit from "convert-units";

const getAllWeather = (response, city, country) => {
  const { data } = response;
  const temperature = Number(
    convertUnit(data.main.temp).from("K").to("C").toFixed(0)
  );
  const state = data.weather[0].main;

  const cityProps = getCityCode(city, country);
  const valueProps = { temperature, state };

  return ({[cityProps]: valueProps}); //[Buenas Aires-Argentina]: { datos }
}

export default getAllWeather