$(document).ready(function() {
  var optionsArray = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G,", "H", "H", "I", "I", "J", "J"]
  shuffle(optionsArray);
  set(optionsArray);
  var box1 = undefined;
  var box2 = undefined;
  var counter = 0
  $("th").click(function() {
    if ($(this).attr("class") === "hidden") {
      if (box1 === undefined) {
        box1 = $(this);
        show(box1);
      } else {
        box2 = $(this);
        show(box2);
        if ($(box1).text() === $(box2).text()) {
          box1 = undefined;
          box2 = undefined;
          counter += 1
          if (counter == 8)
            $("p").text('You win')
        }
        else {
          setTimeout(function() {
            box1 = hide(box1);
          }, 300);
          setTimeout(function() {
            box2 = hide(box2);
          }, 300);
        };
      };
    } else {
      alert("Click a box");
    };
    $("#reset").click(function() {
      $("td").removeClass("reveal");
      $("td").addClass("notReveal");
      shuffle(optionsArray);
      set(optionsArray);
      var box1 = undefined;
      var box2 = undefined;
      var counter = 0;
      $("p").text('Click Boxes to match symbols')
    });
  });
});
function shuffle(optionsArray) {
  for (var j, x, i = optionsArray.length; i; j = parseInt(Math.random() * i), x = optionsArray[--i], optionsArray[i] = optionsArray[j], optionsArray[j] = x);
  return optionsArray;
}
function set(optionsArray) {
  
  var index = 0;
  $("td").each(function() {
    $(this).text(optionsArray[index]);
    index++;
  });
}
function show(box) {
  $(box)
    .removeClass("notReveal")
    .addClass("reveal");
}
function hide(box) {
  $(box)
    .removeClass("reveal")
    .addClass("notReveal");
  return undefined;
}



