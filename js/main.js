var headers = ["Pagina de Machu", "Machu page"];
var headerIndex = 0;
var headerElement = document.getElementById("changeHeader");
var headerSpeed = 2000;

setInterval(changeHeader, headerSpeed);

function changeHeader() {
  headerElement.innerHTML = headers[headerIndex];
  headerIndex++;
  if (headerIndex >= headers.length) {
    headerIndex = 0;
  }
}