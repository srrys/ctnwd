function coolio() {
  console.log("test");
  setTimeout(() => {
    document.getElementById("text").innerHTML = "C o t t o n"
  }, 1000);
  setTimeout(() => {
    document.getElementById("text").innerHTML = "C o t t o n w o o d"
  },2000);
  console.log("fin");
  setTimeout(() => {
    window.location.href = "home.html";
  }, 3150);
}
