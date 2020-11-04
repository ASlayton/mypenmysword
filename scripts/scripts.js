$("#archive-page").hide();
$("#about-page").hide();

$("#archive-btn").click(function() {
  $("#archive-page").show();
  $("#about-page").hide();
  $("#home-page").hide();
});

$("#about-btn").click(function() {
  $("#archive-page").hide();
  $("#about-page").show();
  $("#home-page").hide();
});

$("#home-btn").click(function() {
  $("#archive-page").hide();
  $("#about-page").hide();
  $("#home-page").show();
});
