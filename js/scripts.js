var leapYear = function(year) {
  if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) { // name of form
    var year = parseInt($("input#year").val()); // val() gets input from form
    var result = leapYear(year);

    $(".year").text(year); // .year from span class year
    if (!result) {
      $(".not").text("not"); // .not from span class not
    }

    $("#result").show(); // shows the div id that we hid in css
    event.preventDefault(); // make sure it doesn't submit to a server
  });
});
