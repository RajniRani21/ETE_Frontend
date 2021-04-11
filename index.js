
const inp1=document.getElementById("inp1");
const inp2=document.getElementById("inp2");
const inp3=document.getElementById("inp3");
const buttn=document.getElementById("buttn")
buttn.addEventListener ("click",enterInput);

function enterInput() {
	let searchCountry = inp1.value;
  let start = inp2.value;
  let end = inp3.value;
  if (searchCountry === "") {
    alert("Please fill all fields");
    return;
  }
  fetchCovidData(searchCountry, start, end);
}

function fetchCovidData(searchCountry, start, end)
 {
  const url = `https://api.covid19api.com/country/${searchCountry}?from=${start}T00:00:00Z&to=${end}T00:00:00Z`;
  const data = fetch(url);
  data
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      displayCovidData(data);
    });
}

function displayCovidData(data) {
  console.log(data);
  let output = "<div>";

  for (let i = 0; i < data.length; i++) {
    output += `<div>`;
    output += `<p>Confirmed Cases: ${data[i].Confirmed}</p>`;
    output += `<p>Active Cases: ${data[i].Active}</p>`;
    output += `<p>Deaths: ${data[i].Deaths}</p>`;
    output += `</div>`;
  }
  output += "</div>";
  document.getElementById("outpt-contain").innerHTML = output;
}
// NAME:-RAJNI RANI
// ID:-1811980505