let kulaniciadi = prompt("Kulanıcı Adi Giriniz :");
let myname = document.querySelector("#myName");
myname.innerHTML = kulaniciadi;
function zaman() {
  let moment = new Date();

  let hour = moment.getHours();

  let minute = moment.getMinutes();

  let second = moment.getSeconds();

  var d = new Date();

  var days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  let loadInner = document.querySelector("#myClock");

  loadInner.innerHTML =
    hour + ":" + minute + ":" + second + " " + days[d.getDay()];
}
let now = setInterval(zaman, 100);
