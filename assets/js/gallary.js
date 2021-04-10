//                                                                Gallary-page
gallarySelect("all") //---------------------Show All Items

function gallaryAddClass(item, name) {
  var i;
  var str1;
  var  str2;
  str1 = item.className.split(" ");
  str2 = name.split(" ");
  for (i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) == -1) {
      item.className += " " + str2[i];
    };
  };
};

function gallaryClassDelete(item, name) {
   var i;
   var  str1;
   var str2;
  str1 = item.className.split(" ");
  str2 = name.split(" ");
  for (i = 0; i < str2.length; i++) {
    while (str1.indexOf(str2[i]) > -1) {
      str1.splice(str1.indexOf(str2[i]), 1);     
    }
  }
  item.className = str1.join(" ");
}

function gallarySelect(data) {
  let i;
  let x = $(".column");
  if (data == "all") {
    data = "";
  };
  
  for (i = 0; i < x.length; i++) {
    gallaryClassDelete(x[i], "show");
    if (x[i].className.indexOf(data) > -1){ 
      gallaryAddClass(x[i], "show");
    };
    
  };
};

var container = $("#myGallary");
var b = Container.$(".btn");
for (var i = 0; i < b.length; i++) {
  b[i].addEventListener("click", function(){
    var current = $(".active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}