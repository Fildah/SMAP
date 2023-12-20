let lepek = document.getElementById("toggleLepek");
let korysi = document.getElementById("toggleKorysi");
let vejce = document.getElementById("toggleVejce");
let ryby = document.getElementById("toggleRyby");
let arasidy = document.getElementById("toggleArasidy");
let soja = document.getElementById("toggleSoja");
let mleko = document.getElementById("toggleMleko");
let skorapky = document.getElementById("toggleSkorapky");
let celer = document.getElementById("toggleCeler");
let horcice = document.getElementById("toggleHorcice");
let sezam = document.getElementById("toggleSezam");
let sira = document.getElementById("toggleSira");
let vlci = document.getElementById("toggleVlci");
let mekkysi = document.getElementById("toggleMekkysi");

chrome.storage.sync.get("lepek", function (data) {
  lepek.checked = data.lepek;
});
chrome.storage.sync.get("korysi", function (data) {
  korysi.checked = data.korysi;
});
chrome.storage.sync.get("vejce", function (data) {
  vejce.checked = data.vejce;
});
chrome.storage.sync.get("ryby", function (data) {
  ryby.checked = data.ryby;
});
chrome.storage.sync.get("arasidy", function (data) {
  arasidy.checked = data.arasidy;
});
chrome.storage.sync.get("soja", function (data) {
  soja.checked = data.soja;
});
chrome.storage.sync.get("mleko", function (data) {
  mleko.checked = data.mleko;
});
chrome.storage.sync.get("skorapky", function (data) {
  skorapky.checked = data.skorapky;
});
chrome.storage.sync.get("celer", function (data) {
  celer.checked = data.celer;
});
chrome.storage.sync.get("horcice", function (data) {
  horcice.checked = data.horcice;
});
chrome.storage.sync.get("sezam", function (data) {
  sezam.checked = data.sezam;
});
chrome.storage.sync.get("sira", function (data) {
  sira.checked = data.sira;
});
chrome.storage.sync.get("vlci", function (data) {
  vlci.checked = data.vlci;
});
chrome.storage.sync.get("mekkysi", function (data) {
  mekkysi.checked = data.mekkysi;
});

lepek.addEventListener("change", function () {
  chrome.storage.sync.set({ lepek: this.checked });
});
korysi.addEventListener("change", function () {
  chrome.storage.sync.set({ korysi: this.checked });
});
vejce.addEventListener("change", function () {
  chrome.storage.sync.set({ vejce: this.checked });
});
ryby.addEventListener("change", function () {
  chrome.storage.sync.set({ ryby: this.checked });
});
arasidy.addEventListener("change", function () {
  chrome.storage.sync.set({ arasidy: this.checked });
});
soja.addEventListener("change", function () {
  chrome.storage.sync.set({ soja: this.checked });
});
mleko.addEventListener("change", function () {
  chrome.storage.sync.set({ mleko: this.checked });
});
skorapky.addEventListener("change", function () {
  chrome.storage.sync.set({ skorapky: this.checked });
});
celer.addEventListener("change", function () {
  chrome.storage.sync.set({ celer: this.checked });
});
horcice.addEventListener("change", function () {
  chrome.storage.sync.set({ horcice: this.checked });
});
sezam.addEventListener("change", function () {
  chrome.storage.sync.set({ sezam: this.checked });
});
sira.addEventListener("change", function () {
  chrome.storage.sync.set({ sira: this.checked });
});
vlci.addEventListener("change", function () {
  chrome.storage.sync.set({ vlci: this.checked });
});
mekkysi.addEventListener("change", function () {
  chrome.storage.sync.set({ mekkysi: this.checked });
});
