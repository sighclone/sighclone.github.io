function verifyFullscreen(){
    if((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
        closeFullscreen();
    }
    else {
        openFullscreen();
    }
}
var elem = document.documentElement;
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

// GENERIC CONTROL FUNCTION FOR ANY ELEM
function elemControl(elemID){
  console.log("Control triggered by elem: "+elemID);
  var x = document.getElementById(elemID);
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}

function startMenuControl(){
    // all of these functions are now obsolete -> just get calling elem ID as parameter, the control logic is the same for all elems
    // *new elements use the generic control function
    var x = document.getElementById("startMenu");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
}

function softwareListControl(){
    var x = document.getElementById("softwareList");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
}

// GENERIC CLOSE FUNCTION FOR ALL ELEMENTS

function elemClose(elemID){
  var x= document.getElementById(elemID);
  if (x.style.display === "block") {
    x.style.display = "none";
  }
}

function elemToggle(elemID){
  var x = document.getElementById(elemID);
  if (x.style.display === "none") {
  x.style.display = "block";
  }
  else {
      x.style.display = "none";
  }
}

function softwareListClose(){
    var x = document.getElementById("softwareList");
    if (x.style.display === "block") {
    x.style.display = "none";
    }
}

function closeTIN(){
    var x = document.getElementById("TIN");
    if (x.style.display === "none") {
    x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

function TINControl(){
    var x = document.getElementById("TIN");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
}

function closeEasyThinker(){
    var x = document.getElementById("EasyThinker");
    if (x.style.display === "none") {
    x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

function EasyThinkerControl(){
    var x = document.getElementById("EasyThinker");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
}

function closeBruhBot(){
    var x = document.getElementById("BruhBot");
    if (x.style.display === "none") {
    x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

function BruhBotControl(){
    var x = document.getElementById("BruhBot");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
}

function closeFileProtecc(){
    var x = document.getElementById("FileProtecc");
    if (x.style.display === "none") {
    x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

function FileProteccControl(){
    var x = document.getElementById("FileProtecc");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
}

function closeStudyDash(){
    var x = document.getElementById("StudyDash");
    if (x.style.display === "none") {
    x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

function StudyDashControl(){
    var x = document.getElementById("StudyDash");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
}


function skillsListControl(){
    var x = document.getElementById("skillsList");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
}

function skillsListClose(){
    var x = document.getElementById("skillsList");
    if (x.style.display === "block") {
    x.style.display = "none";
    }
}

function closeSkills(){
    var x = document.getElementById("Skills");
    if (x.style.display === "none") {
    x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

function skillsControl(){
    var x = document.getElementById("Skills");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
}

function gettingStartedControl(){
    var x = document.getElementById("gettingStarted");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

function getGoingControl(){
    var x = document.getElementById("getGoing");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
}

function resetGS(){
    document.getElementById("getGoing").style.display = "none";
    document.getElementById("gettingStarted").style.display = "block";
}

function closeAbout(){
    var x = document.getElementById("about");
    if (x.style.display === "none") {
    x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

function aboutControl(){
    var x = document.getElementById("about");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
}

function closeEasyThinker(){
  var x = document.getElementById("EasyThinker");
  if (x.style.display === "none") {
  x.style.display = "block";
  }
  else {
      x.style.display = "none";
  }
}

function EasyThinkerControl(){
  var x = document.getElementById("EasyThinker");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}

function closezilminerGUI(){
  var x = document.getElementById("zilminerGUI");
  if (x.style.display === "none") {
  x.style.display = "block";
  }
  else {
      x.style.display = "none";
  }
}

function zilminerGUIControl(){
  var x = document.getElementById("zilminerGUI");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}