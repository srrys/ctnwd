function coolio() {
  console.log("test");
  setTimeout(() => {
    document.getElementById("text").innerHTML = "S i m  "
  }, 1000);
  setTimeout(() => {
    document.getElementById("text").innerHTML = "S i m p l a n g"
  },2000);
  console.log("fin");
  setTimeout(() => {
    window.location.href = "home.html";
  }, 3150);
}
