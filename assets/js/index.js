 // Scroll The Header From Top To Botton
 window.onscroll = function () { myScrollFunction(); };

 var header = document.getElementById("header");
  scroll = header.offsetTop;

 function myScrollFunction() {
     if (window.pageYOffset > sticky) {
         header.classList.add("scroll");
     } else {
         header.classList.remove("scroll");
     }
 }





// creat New List in index.html page

$( "<h2>Useful Education links</h2>").addClass("headList_0").appendTo( ".designList" );

$("#educationList").addClass("headList_1").addClass("headList_1 a");

var myArray = [
'<a href=https://www.do.se/other-languages/english/>Equality Ombudsman</a>' ,
'<a href=https://scb.se/en_/>Statistics Sweden</a>',
'<a href=https://skr.se/tjanster/englishpages.411.html/>Swedish Association of Local Authorities and Regions</a>',
'<a href=https://www.skolinspektionen.se/en/About-Skolinspektionen/About-the-Swedish-Schools-Inspectorate/>Swedish Schools Inspectorate</a>',
'<a href=https://www.government.se/government-of-sweden/ministry-of-education-and-research/>Ministry of Education and Research</a>'

   ];

  

function myListItem(data) {
var list = document.getElementById('educationList');
var ul = document.createElement('ul');
for (var i = 0; i < data.length; i++) { 
ul.innerHTML = ul.innerHTML + "<li><a href='#'>" + myArray[i] + "</a></li>";
}

list.appendChild(ul);
}
myListItem(myArray);




//Creat Ney Table

let informationTable = [
{English_Name: "Social Science Programme", Swedish_Name: "Samhällsvetenskapsprogrammet", Percent_Of_Students:"19.2%" },
{English_Name: "Natural Science Programme", Swedish_Name: "Naturvetenskapsprogrammet", Percent_Of_Students:"14.9%" },
{English_Name: "Business Management and Economics Programme", Swedish_Name: "Ekonomiprogrammet", Percent_Of_Students:"14.3%" },
{English_Name: "Technology Programme", Swedish_Name: "Teknikprogrammet", Percent_Of_Students:"9.7%" },
{English_Name: "Arts Programme", Swedish_Name: "Estetiska programmet", Percent_Of_Students:"7.0%" },
{English_Name: "Electricity and Energy Programme", Swedish_Name: "El- och energiprogrammet", PPercent_Of_Students:"4.9%" },
{English_Name: "Building and Construction Programme", Swedish_Name: "Bygg-och anläggningsprogrammet", Percent_Of_Students:"4.3%" },
{English_Name: "Vehicle and Transport Programme", Swedish_Name: "Fordons- och transportprogrammet",Percent_Of_Students:"3.6%" },
{English_Name: "Health and Social Care Programme", Swedish_Name: "Vård- och omsorgsprogrammet", Percent_Of_Students:"3.4%" },
{English_Name: "Child and Recreation Programme", Swedish_Name: "Barn- och fritidsprogrammet", Percent_Of_Students:"3.0%" },
{English_Name: "Business and Administration Programme", Swedish_Name: "Handels- och administrationsprogrammet", Percent_Of_Students:"2.9%" },
{English_Name: "Natural Resource Use Programme", Swedish_Name: "Naturbruksprogrammet", Percent_Of_Students:"2.9%" },
{English_Name: "Handicraft Programme", Swedish_Name: "Hantverksprogrammet", Percent_Of_Students:"2.2%" },
{English_Name: "Restaurant Management and Food Programme", Swedish_Name: "Restaurang- och livsmedelsprogrammet", Percent_Of_Students:"1.7%" },
{English_Name: "Industrial Technology Programme", Swedish_Name: "Industritekniska programmet", Percent_Of_Students:"1.4%" },
{English_Name: "HVAC and Property Maintenance Programme", Swedish_Name: "VVS-och fastighetsprogrammet", Percent_Of_Students:"1.2%" },
{English_Name: "Hotel and Tourism Programme", Swedish_Name: "Hotell- och turismprogrammet", Percent_Of_Students:"1.0%" },
{English_Name: "Humanities Programme", Swedish_Name: "Humanistiska programmet", Percent_Of_Students:"0.8%" }
];

function creatTableHead(table, content) {
let thead = table.createTHead();
let row = thead.insertRow();
for (let key of content) {
let th = document.createElement("th");
let text = document.createTextNode(key);
th.appendChild(text);
row.appendChild(th);
}
}

function creatTable(table, content) {
for (let element of content) {
let row = table.insertRow();
for (var key in element) {
let cell = row.insertCell();
let text = document.createTextNode(element[key]);
cell.appendChild(text);
}
}
}

let table = document.querySelector("table");
let data = Object.keys(informationTable[0]);
creatTableHead(table, data);
creatTable(table, informationTable);
table.setAttribute("border" , "1");
$("table").addClass("tableForm");






