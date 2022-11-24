(function (window) {
  var names = ["Vainavi", "Suganya", "Vel", "Arun", "Brabu", "Saravanan", "Amutha", "Anto", "Kumar", "Dhaya"];

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);

