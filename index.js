const element = document.getElementById("bm");

lottie.loadAnimation({
  container: element, // the dom element that will contain the animation
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "data.json", // the path to the animation json
});
