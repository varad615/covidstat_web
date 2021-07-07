fetch("https://corona.lmao.ninja/v2/countries/india")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.active);
    var date = new Date(data.updated);
    console.log(date.toLocaleString());
    document.getElementById("country").innerHTML = data.country;
    document.getElementById("updated").innerHTML = date.toLocaleString();
    document.getElementById("cases").innerHTML = data.cases;
    document.getElementById("active").innerHTML = data.active;
    document.getElementById("todaycases").innerHTML = data.todayCases;
    document.getElementById("recovered").innerHTML = data.recovered;
    document.getElementById("todayrecovered").innerHTML = data.todayRecovered;
    document.getElementById("death").innerHTML = data.deaths;
    document.getElementById("todaydeath").innerHTML = data.todayDeaths;
  });
