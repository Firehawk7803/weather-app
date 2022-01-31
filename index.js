function onClick() {
  let city;
  city = document.getElementById("city").value;
  let cityTextElement;
  cityTextElement = document.getElementById("city-text");
  cityTextElement.innerHTML = '<i class="fa fa-map-marker-alt"></i> ' + city;
  let cityNameElement;
  cityNameElement = document.getElementById("city-name");
  cityNameElement.innerHTML = city + " City";
  let contentElement;
  contentElement = document.getElementById("city-content");
  contentElement.innerHTML =
    "You can get more details about " +
    city +
    " by exploring <br />official website at your mobile phone";
}
