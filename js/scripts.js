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
    //WHY DO THESE TWO LINES OF CODE NEED TO BE FIRST FOR IT TO WORK????
  });

  $("p.clickable").click(function() {
    $("p.clickable").toggleClass("now-clicked");
  });

  
    
});
