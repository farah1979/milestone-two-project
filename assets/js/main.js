function myFunction() {
  window.open("sweden.html");
   
}

$( "<h2>Welcome To Sweden...<br> Please Follow Me</h2>").addClass("paragraph").appendTo( ".text" );



/*-------------------------------------------------JS-stockholm-page-*/

$(document).ready(function(){
  $(".nav-section ").css({"font-size":"15px" , "text-content": "center" , "color":"#000" , "font-family": '"roboto" , sans-serif' ,  "font-weight": "400" ,  "text-transform": "uppercase"});
  $("#tab-cont").addClass("nav-section")

 


 });
 var triggerEl = document.querySelector('#myTab a[href="#home"]')
bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name

var triggerFirstTabEl = document.querySelector('#myTab li:first-child a')
bootstrap.Tab.getInstance(triggerFirstTabEl).show() // Select first tab
