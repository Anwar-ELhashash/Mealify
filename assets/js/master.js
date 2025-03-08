let barsIcon = document.getElementById("bars-icon");
let sidePanel = document.getElementById("links");
let exit = document.getElementById("side-panel-exit");
let switchMode = document.getElementById("dark");
let darkELE = document.createElement("link");
let sun = document.getElementById("sun");
let bg1 = document.getElementById("chefsBg1");
let bg2 = document.getElementById("chefsBg2");
let bg3 = document.getElementById("chefsBg3");

darkELE.setAttribute("rel", "stylesheet");
darkELE.setAttribute("href", "assets/css/darkmode.css");

switchMode.onclick = function () {
  document.body.append(darkELE);
  sun.style.display = "flex";
  switchMode.style.display = "none";
  bg1.style.display = "none";
  bg2.style.display = "none";
  bg3.style.display = "none";
};

sun.onclick = function () {
  document.body.removeChild(darkELE);
  sun.style.display = "none";
  switchMode.style.display = "flex";
  bg1.style.display = "block";
  bg2.style.display = "block";
  bg3.style.display = "block";
};

barsIcon.onclick = function () {
  sidePanel.style.cssText = `right: 0;`;
};

exit.onclick = function () {
  sidePanel.style.cssText = `right: -360px`;
};
