let barsIcon = document.getElementById("bars-icon");
let sidePanel = document.getElementById("links");
let exit = document.getElementById("side-panel-exit");
let switchMode = document.getElementById("dark");
let darkELE = document.createElement("link");
let sun = document.getElementById("sun");

darkELE.setAttribute("rel", "stylesheet");
darkELE.setAttribute("href", "assets/css/darkmode.css");

switchMode.onclick = function () {
  document.head.append(darkELE);
  sun.style.display = "flex";
  switchMode.style.display = "none";
};

sun.onclick = function () {
  document.head.removeChild(darkELE);
  sun.style.display = "none";
  switchMode.style.display = "flex";
};

barsIcon.onclick = function () {
  sidePanel.style.cssText = `right: 0;`;
};

exit.onclick = function () {
  sidePanel.style.cssText = `right: -360px`;
};
