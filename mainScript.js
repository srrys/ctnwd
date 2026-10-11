const error = document.getElementById("errors");
const user = document.getElementById("username");
function run() {
  console.log("running");
  let lineDos = "createNewWindow <- creates new window for graphics. ";
  let lineTres = "destroyWindow <- removes window";
  const userCode = document.getElementById("input").value;
  const lines = userCode.split("\n");
  const out = document.getElementById("output");
  const windowE = document.getElementById("window");
  const blockE = document.getElementById("blockA");
  const signedInDude = document.getElementById("");
  const buttonW = document.getElementById("buttonA");
  const windowUI = document.getElementById("UIwindow");
  const titleTitle = lines[lines.findIndex(item => item.includes("newTitle =")) + 1];
  const movementP = document.getElementById("moveMP");
  console.log("fart McFartfart");
  if (localStorage.getItem("moveBot1") === "true") {
    if (lines.includes("addMovementPanel")) {
      movementP.style.display = "block";
    }
  }
  if (localStorage.getItem("mathLi1") === "true") {
    if (lines.includes("plusItems =") && lines[lines.findIndex(item => item.includes("plusItmes =")) + 3] === "endPlus") {
      let UNO = lines[lines.findIndex(item => item.includes("plusItems =")) + 1];
      let DOS = lines[lines.findIndex(item => item.includes("plusItems =")) + 2];
      let TOTAL = UNO + DOS;
      out.innerHTML += ` ${TOTAL}`;
    }
    if (lines.includes("multItems =") && lines[lines.findIndex(item => item.includes("multItems =")) + 3] === "endMult") {
      let MULTa = lines[lines.findIndex(item => item.includes("multItems =")) + 1];
      let MULTb = lines[lines.findIndex(item => item.includes("multItems =")) + 2];
      let Mtotal = MULTa * MULTb;
      out.innerHTML += ` ${Mtotal}`;
    }
  }
  if (userCode.split("\n")[0].includes("--help--")) {
    out.innerHTML = "//HELP:  doc =           \n prints one line of code on the console \n endDoc <- closes doc." + lineDos + lineTres;
  }
  if (userCode.includes("doc  =") || userCode.includes("doc=")) {
    error.style.display = "block";
    error.innerHTML = "Type error. doc must have exactly one space from equal.";
  }
  if (userCode.includes("createNewGameWindow")) {
    windowE.style.display = "block";
    console.log("created");
    console.log("asdasd");
  }
  if (userCode.includes("createNewUiWindow")) {
    windowUI.style.display = "block";
    windowE.style.backgroundImage = "none";
  }
  if (userCode.includes("createNewButton") && userCode.includes("createNewUiWindow")) {
    buttonW.style.display = "block";
  }
  if (userCode.includes("destroyWindow")) {
    windowE.style.display = "none";
  }
  if (userCode.includes("createNewBlock")) {
    blockE.style.display = "block";
  }
  if (userCode.includes("newButton =") && userCode.includes("endButton")) {
    buttonW.style.display = "block";
    const buttonTitle = lines[lines.findIndex(item => item.includes("newButton =")) + 1];
    if (buttonTitle) {
      buttonW.innerHTML = buttonTitle;
    }
  }
  if (titleTitle) {
    document.getElementById("titleA").innerHTML = titleTitle;
  }
  if (lines.includes("doc =")) {
    if (lines.includes("newButton =") && lines.includes("endButton")) {
      console.log("-");
    }
    else {
      out.innerHTML = "output-> " + lines[lines.findIndex(item => item.includes("doc =")) +1];
    }
  }
  if (lines.includes("GravityEnabled") && blockE.style.display === "block" && blockE.classList.contains("redblock")) {
    out.innerHTML = " //Gravity Enabled.";
    if (blockE.style.top === "") {
      blockE.classList.add("grav");
      setTimeout(() => {
        blockE.classList.remove("grav");
        blockE.classList.add("normWG");
      }, 1000);
    }
  }  
  if (lines.length === 0) {
    out.innerHTML  = "output-> //null";
    error.style.display = "block";
    error.innerHTML = "A statement is either not recognised or there is no code.";
  }
  if (lines.length > 20) {
    out.innerHTML = "Greater than 20 lines."
  }
}
function save() {
  localStorage.setItem("project", document.getElementById("input").value);
}
function load() {
  let project = localStorage.getItem("project");
  document.getElementById("input").innerHTML = project;
}
function goAwayError() {
  error.innerHTML = "";
  error.style.display = "none";
}
console.log("SimpLang vers 1.1.0");
console.log("goonbot");
function clicked() {
  const lines = document.getElementById("input").value.split("\n");
  if (lines[lines.findIndex(item => item.includes("newButton")) + 2].includes("doc =")) {
    document.getElementById("output").innerHTML = "output-> " + lines[lines.findIndex(item => item.includes("newButton")) + 3];
  }
}
function gotonews() {
  window.location.href = "news.html";
}
function MovebotDL() {
  localStorage.setItem("moveBot1", "true");
  if (localStorage.getItem("mathLi1") === "true") {
    alert("MoveBot is already downloaded.");
  }
  else {
    alert("MoveBot Downloaded.");
    localStorage.setItem("moveBot1", "true");
  }
}
function MathLiDL() {
  if (localStorage.getItem("mathLi1") === "true") {
    alert("MathLi is already downloaded.");
  }
  else {
    alert("MathLi Downloaded.");
    localStorage.setItem("mathLi1", "true");
  }
}
function tutorial() {
  userCode.value = "createNewGameWindow \ncreateNewBlock \ndoc = \nHello World! \nendDoc";
}
console.log("testing again 😢");
