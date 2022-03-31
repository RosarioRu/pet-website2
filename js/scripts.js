$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").addClass("dark-mode");
    $("button#dark").hide();
    $("button#light").show();
  });

  $("button#light").click(function() {
    $("button#light").hide();
    $("button#dark").show();
    $("body").removeClass();
    $("body").adddClass("light-mode");
    // $("button#light").hide();
    // $("button#dark").show();
    
  });

});
