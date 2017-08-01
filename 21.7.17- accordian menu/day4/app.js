var codings = ["Javascript", "JQuery", "Ruby"]

var on = false
$(".container").on("click", function(e){
  if (!e.target.className.split(" ").some(function(element) {
    return element == "on"
  })){
    if (e.target.className == "box")  {
      codings.forEach(function(element) {
        $(e.target).addClass("on")
        $(e.target).append($("<div class='new'>" + element + "</div>"))
      })
    }
  } else {
    $(e.target).removeClass("on")
    $(".new").remove()
  }
})
