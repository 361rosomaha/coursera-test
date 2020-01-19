(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speakWord = function speak(name) {
    console.log(speakWord + " " + name);
  }
  window.helloSpeaker = helloSpeaker;
})(window);