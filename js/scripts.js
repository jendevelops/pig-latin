$(document).ready(function() {
  $(".input").submit(function(event) {
    event.preventDefault();
    var userInput = $("input[name=userInput]").val();
    var lowerCase = userInput.toLowerCase();
    var punctuation = ["?", ".", "!"];
    var words = lowerCase.split(/\s*\b\s*/);
    var noEmpty = words.filter(word => word.length > 0);


    function pigLatinWord(word) {
      var vowel = ["a", "e", "i", "o", "u"];
      if (vowel.includes(word[0])) {
        return word.slice(1, ) + word[0].toUpperCase() + "way";
      } else if (!vowel.includes(word[0])) {
        if (!(vowel.includes(word[1]))) {
          return word.slice(2, ) + toUpperCase(word[0]) + word[1] + "ay";
        } else {
          return word.slice(1, ) + word[0].toUpperCase() + "ay";
        }
      } else if (word.slice(0, 2) === "qu") {
        return word.slice(2, ) + "Quay"
      } else {
        return word.slice(1, ) + word[0].toUpperCase() + "ay";
      }
    }


    var answer = noEmpty.map(function(word) {
      if (punctuation.includes(word)) {
        return word;
      } else {
        return pigLatinWord(word);
      }
    });

    answer.forEach(function(word) {
      $(".translated").append(word + " ");
    });

    $(".translated").show();

  });
});
