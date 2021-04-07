// The following example creates five accessible and
// focusable markers.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat:  59.334591, lng: 18.063240 },
  });

  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    [{ lat: 59.325, lng: 18.07 }, "<h6>Kafe Himlavalvet</h6><p><strong>Adress:</strong> Drottninggatan 120, 113 60 Stockholm,<br> <strong>Telefon:</strong> 08-31 40 41</p>"],
    [{ lat: 59.33879, lng: 18.08487 }, "<h6>Karla Café</h6><p><strong>Adress:</strong> Karlavägen 71, 114 49 Stockholm<br> <strong>Telefon:</strong>  08-660 74 73</p>"],
    [{ lat: 59.36038489496856, lng:17.999916533739082}, "<h6>Restaurang Etage</h6><p><strong>Adress:</strong> Centralvägen 21, 171 68 Solna<br> <strong>Telefon:</strong>  +46768558100 , <br><strong>Hemsida:</strong></p>"],
    [{ lat: 59.32011523377366, lng:18.05069938315683 }, "<h4 id='one'>Skinnarviksberget</h4>"],
    [{ lat:59.32483832078746, lng: 18.067565089814156 }, "<h4>Collector's Victory Hotel</h4>"],
    [{ lat: 59.32100663281551, lng: 18.06928170355612}, "<h4>Hilton Stockholm Slussen</h4>"],
    [{ lat:59.315421210904596, lng:18.0441061384852}, "Zinkensdamm Hotell & Vandrarhem"],
    [{ lat: 59.330356077765614, lng:18.056176499859397 }, "Radisson Blu Waterfront Hotel"],
    [{ lat: 59.31607859850672, lng:18.078752338485206}, "NOFO Hotel"],
    [{ lat: 59.309726485142434, lng:18.057595072802823 }, "Sachsska barnsjukhuset Södersjukhuset Barn och ungdoms Akutmottagning"],
    [{ lat: 59.31835551111759, lng:18.049913226133178}, "Pane Vino"],
    [{ lat: 59.33928489547102, lng:18.035892247875225},  "<h6>Storstaden Event & Konferens AB</h6><p><strong>Adress:</strong> Sankt Eriksgatan 70, 113 20 Stockholm<br></p>"],
    [{ lat: 59.345628553119816, lng: 17.99323439119517}, "<h6>Hufvudsta Gård Mat & Möten AB</h6> <p><strong>Adress:</strong> Hufvudsta Gård, 171 73 Solna<br><strong>Telefon:</strong>  +4684466430 </p>"],
    [{ lat: 59.3541609661811, lng:17.975724930752882}, 
         "<h6>STHLM Stage And Music</h6><p><strong>Adress:</strong> Hemvärnsgatan 13, 171 54 Solna<br><strong>Telefon:</strong>  +46706677540</p>"],
  ];
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();
  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });
    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}



//                                                                portofolio-page
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}