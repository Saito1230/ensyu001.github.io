const CODE = "130010";
const WEATHERAPI = "https://weather.tsukumijima.net/api/forecast";

fetch(WEATHERAPI + `?city=${CODE}`)
  .then((res) => res.json())
    .then(data => {
      $(".weather_1").html(data["forecasts"][0]["dateLabel"] + ` (${data["forecasts"][0]["date"]})`);
      $(".weather_data_1").html(data["forecasts"][0]["telop"]);
      $(".weather_2").html(data["forecasts"][1]["dateLabel"] + ` (${data["forecasts"][1]["date"]})`);
      $(".weather_data_2").html(data["forecasts"][1]["telop"]);
    });
