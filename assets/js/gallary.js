//                                                                Gallary-page
onFilterSelect("all") //---------------------Show All Items
function onFilterSelect(filterType) {
  let galleryImages = $(".column");
  for(var i=0; i < galleryImages.length; i++) {
      if(galleryImages[i].className.indexOf(filterType) > -1 || filterType === 'all'){ 
        $(galleryImages[i]).addClass("show");
      } else {
        $(galleryImages[i]).removeClass("show");
      }
  };
};
var galleryContainer = $("#myGallary");
var buttons = Container.$(".btn");
buttons.forEach(button => {
  button.addEventListener("click", function(){
    var current = $(".active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });  
});