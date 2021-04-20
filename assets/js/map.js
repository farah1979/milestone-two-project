function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: { lat: 59.334591, lng: 18.06 },
  });
  // Set LatLng and title text for the markers.
  const touristPoints = [
      [
          { lat: 59.325, lng: 18.07 },
          "<h6>Kafe Himlavalvet</h6><p  style='color:#000; font-size: 12px;  letter-spacing: 1px;'><strong>Adress:</strong> Drottninggatan 120, 113 60 Stockholm,<br>Sverige<br> <strong>Telefon:</strong> 0046 8-31 40 41,<br><strong>Hemsida:<a href ='https://www.kafehimlavalvet.se/' target='_blank'>www.kafehimlavalvet.se</a> </strong><br> <img src='assets/image/cafe-himlavalvet.jpg'  > </p>",
      ],
      [
          { lat: 59.33981132291015, lng: 18.082809884656452 },
          "<h6>Karla Café</h6><p style='color:#000;  font-size: 12px;  letter-spacing: 1px;'><strong>Adress:</strong> Karlavägen 71, 114 49 Stockholm<br> Sverige<br><strong>Telefon:</strong>  0046 8-660 74 73 ,<br><strong>Hemsida:<a href ='https://karlacafe.com/' target='_blank'>www.karlacafe.se</a> </strong><br> <img src='assets/image/karla-logo.png'  width='100', height='100'> </p>",
      ],
      [
          { lat: 59.34677520266328, lng: 18.033688176328575 },
          "<h6>Caffé Nero</h6><p style='color:#000; font-size: 12px;  letter-spacing: 1px;'><strong>Adress:</strong> Solnavägen 2, 113 65 Solna<br> , <br><strong>Hemsida: <a href ='https://caffenero.com/se/sv/' target='_blank'>www.caffenero.com</a> </strong><br> <img src='assets/image/caffe-nero-logo.jpg'  height='100' ></strong></p>",
      ],
      [
          { lat: 59.32011523377366, lng: 18.05069938315683 },
          "<h4>Skinnarviksberget</h4><p style='color:#000;  font-size: 12px;  letter-spacing: 1px;'><strong>Adress:</strong> Stor, 169 86 Stockholm <br> Sverige<br><strong>Telefon:</strong>  +46850800508 ,<br><strong>Hemsida:<a href ='https://www.stadtillstrand.se/2019/07/16/skinnarviksberget/' target='_blank'>Info About skinnarviksberget</a> </strong><br> <img src='assets/image/Skinnarviksberget-bild.jpg'  width='100', height='100'> </p>",
      ],
      [
          { lat: 59.320598514582244, lng: 18.069164796459553 },
          "<h4>Hilton Stockholm Slussen</h4><p style='color:#000;  font-size: 12px;  letter-spacing: 1px;'><strong>Adress:</strong> Guldgränd 8, 104 65 Stockholm <br> Sverige<br><strong>Telefon:</strong>  +46851735300 ,<br><strong>Hemsida:<a href ='https://www.hilton.com/en/hotels/stoslhi-hilton-stockholm-slussen/?WT.mc_id=zELWAKN0EMEA1HI2DMH3LocalSearch4DGGenericx6STOSLHI' target='_blank'>Hilton Stockholm Slussen</a> </strong><br> <img src='assets/image/hilton.png'   height='100'> </p>",
      ],
      [
          { lat: 59.31784682548384, lng: 18.06254498196946 },
          "<h4>Hellstens Glashus</h4><p style='color:#000;  font-size: 12px;  letter-spacing: 1px;'><strong>Adress:</strong> Wollmar Yxkullsgatan 13, 118 50 Stockholm<br> Sverige<br><strong>Telefon:</strong>  +46846007900 ,<br><strong>Hemsida:<a href ='https://hellstensglashus.se/' target='_blank'>Hellstensglashus</a> </strong><br> <img src='assets/image/Glashuset.jpg'   height='100'> </p>",
      ],
      [
          { lat: 59.330356077765614, lng: 18.056176499859397 },
          "<h4>Radisson Blu Waterfront Hotel</h4><p style='color:#000;  font-size: 12px;  letter-spacing: 1px;'><strong>Adress:</strong> Nils Ericsons Plan 4, 111 64 Stockholm<br> Sverige<br><strong>Telefon:</strong>  +46850506000 ,<br><strong>Hemsida:<a href ='https://www.radissonhotels.com/en-us/hotels/radisson-blu-stockholm?cid=a:se+b:gmb+c:emea+i:local+e:rdb+d:nob+h:STOZW' target='_blank'>Radisson Blu Waterfront Hotel</a> </strong><br> <img src='assets/image/radison.jpg' height='100'> </p>",
      ],
      [
          { lat: 59.31607859850672, lng: 18.078752338485206 },
          "<h4>NOFO Hotel</h4><p style='color:#000;  font-size: 12px;  letter-spacing: 1px;'><strong>Adress:</strong> Tjärhovsgatan 11, 116 21 Stockholm<br> Sverige<br><strong>Telefon:</strong>  +46850311200 ,<br><strong>Hemsida:<a href ='https://www.nofohotel.se/' target='_blank'>NOFO Hotel</a> </strong><br> <img src='assets/image/nofo-hotel.jpg' height='100'> </p>",
      ],
      [
          { lat: 59.31280201152838, lng: 18.081043328739785 },
          "<h4>ilcaffè</h4><p style='color:#000;  font-size: 12px;  letter-spacing: 1px;'><strong>Adress:</strong> Södermannagatan 23, 116 40 Stockholm<br> Sverige<br><strong>Telefon:</strong>  +4684629500 ,<br><strong>Hemsida:<a href ='http://ilcaffe.se/cafe/sodermannagatan/' target='_blank'>ilCaffe</a> </strong><br> <img src='assets/image/il-caffe.jpg' height='100'> </p>",
      ],
      [
          { lat: 59.33358833098538, lng: 18.058887852752676 },
          "<h4>Luzette</h4><p style='color:#000;  font-size: 12px;  letter-spacing: 1px;'><strong>Adress:</strong> Centralplan 25, 111 20 Stockholm<br> Sverige<br><strong>Telefon:</strong>  +46851931600 ,<br><strong>Hemsida:<a href ='https://luzette.se/' target='_blank'>Luzette</a> </strong><br> <img src='assets/image/luzette.jpg' height='100'> </p>",
      ],
      [
          { lat: 59.31817534007741, lng: 18.015457526284635 },
          "<h4>Café Cul de Sac</h4><p style='color:#000;  font-size: 12px;  letter-spacing: 1px;'><strong>Adress:</strong>Lusuddsvägen 10, 117 66 Stockholm<br> Sverige<br><strong>Telefon:</strong> +46735358027 ,<br><strong>Hemsida:<a href ='https://www.cafeculdesac.se/' target='_blank'>www.cafeculdesac.se</a> </strong><br> <img src='assets/image/cafe.jpg' height='100'> </p>",
      ],
      [
          { lat: 59.33928489547102, lng: 18.035892247875225 },
          "<h6>Storstaden Event & Konferens AB</h6><p style='color:#000;  font-size: 12px;  letter-spacing: 1px;'><strong>Adress:</strong>Sankt Eriksgatan 70, 113 20 Stockholm<br> Sverige ,<br> <img src='assets/image/konferens.jpg' height='100'> </p>",
      ],
      [
          { lat: 59.345628553119816, lng: 17.99323439119517 },
          "<h6>Hufvudsta Gård Mat & Möten AB</h6> <p style='color:#000;  font-size: 12px;  letter-spacing: 1px;'><strong>Adress:</strong> Hufvudsta Gård, 171 73 Solna<br><strong>Telefon:</strong>  +4684466430 <br>,<strong>Hemsida:<a href ='https://www.hufvudstagard.se/' target='_blank'>Hufvudsta Gård Mat & Möten AB</a> </strong><br> <img src='assets/image/Hufvudsta-logo.png' height='100'> </p>",
      ],
      [
          { lat: 59.3541609661811, lng: 17.975724930752882 },
          "<h6>STHLM Stage And Music</h6><p style='color:#000;  font-size: 12px;  letter-spacing: 1px;'><strong>Adress:</strong> Hemvärnsgatan 13, 171 54 Solna<br><strong>Telefon:</strong>  +46706677540 <br>,<strong>Hemsida:<a href ='http://stageandmusic.se/' target='_blank'>Stage And Music</a> </strong><br> <img src='assets/image/stageandmusic-logo.png' style=' background-color: #000;' height='100'> </p>",
      ],
      [
        { lat: 59.271389399661345, lng: 18.10280434267766 },
        "<h6>Skogskyrkogården</h6><p style='color:#000;  font-size: 12px;  letter-spacing: 1px;'><strong>Adress:</strong>Sockenvägen, Stockholm<br><strong>Telefon:</strong>  +46850831730 <br>,<strong>Hemsida:<a href ='https://skogskyrkogarden.stockholm.se/' target='_blank'>Skogskyrkogården</a> </strong><br> <img src='assets/image/skog.jpg' style=' background-color: #000;' height='100'> </p>",
    ],
  ];


  // Creat a link between external anchor and Google map.
  $(".location-on-map").click(function() {
    map.setCenter(new google.maps.LatLng(this.dataset.lat, this.dataset.lng));
    map.setZoom(16);
    });




  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow({
      maxWidth: 250,
  });
  const markers = touristPoints.map(([position, title], i) => {
      const marker = new google.maps.Marker({
          position,
          map,
          title: `${i + 1}. ${title}`,
          label: `${i + 1}`,
          optimized: false,
      });
      marker.addListener("click", () => {
          infoWindow.close();
          infoWindow.setContent(marker.getTitle());
          infoWindow.open(marker.getMap(), marker);
      });
      return marker;
  });
  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
      imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
