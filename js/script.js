$(document).ready(function() {
  $("#logo").click(function() {
    $(this).effect("shake", { times: 4 }, 1000);
  });

  $(".welcome-text").hover(
    function() {
      $("span", $(this)).css("text-decoration", "underline red");
    },
    function() {
      $("span", $(this)).css("text-decoration", "none");
    }
  );

  $("span").click(function() {
    $(this).effect("shake", { direction: "up", times: 4, distance: 2 }, 1000);
  });
});
