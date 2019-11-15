function initMap () {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 51.996192, lng: 5.891148}
  })

  // zijpendaalseweg 167
  var infoZijpendaalseweg = new google.maps.InfoWindow({
    content: 'Zijpendaalseweg 167 Arnhem'
  })

  var markZijpendaalseweg = new google.maps.Marker({
    position: {lat: 51.996192, lng: 5.891148},
    map: map
  })

  markZijpendaalseweg.addListener('click', function() {
    infoZijpendaalseweg.open(map, markZijpendaalseweg)
  })

  // alexanderweg 35
  var infoAlexanderweg = new google.maps.InfoWindow({
    content: 'alexanderstraat 35 Arnhem'
  })

  var markAlexanderweg = new google.maps.Marker({
    position: {lat: 51.985354,  lng: 5.880853},
    map: map
  })

  markAlexanderweg.addListener('click', function() {
    infoAlexanderweg.open(map, markAlexanderweg)
  })

  // Apeldoornseweg 210
  var infoApeldoornseweg = new google.maps.InfoWindow({
    content: 'Apeldoornseweg 210 a Arnhem'
  })

  var markApeldoornseweg = new google.maps.Marker({
    position: {lat: 51.990578, lng: 5.908762},
    map: map
  })

  markApeldoornseweg .addListener('click', function() {
    infoApeldoornseweg .open(map, markApeldoornseweg )
  })

  // Beukenlaan 3 Arnhem
  var infoBeukenlaan = new google.maps.InfoWindow({
    content: 'Beukenlaan 3 Arnhem'
  })

  var markBeukenlaan = new google.maps.Marker({
    position: {lat: 52.004537, lng: 5.929043},
    map: map
  })

  markBeukenlaan .addListener('click', function() {
    infoBeukenlaan .open(map, markBeukenlaan )
  })

  // Kamillelaan 8-10-12 Arnhem
  var infoKamillelaan = new google.maps.InfoWindow({
    content: 'Kamillelaan 8-10-12 Arnhem'
  })

  var markKamillelaan = new google.maps.Marker({
    position: {lat: 51.965890, lng: 5.917834},
    map: map
  })

  markKamillelaan .addListener('click', function() {
    infoKamillelaan .open(map, markKamillelaan )
  })

  // Kazerneplein 6 Arnhem
  var infoKazerneplein = new google.maps.InfoWindow({
    content: 'Kazerneplein 6 Arnhem'
  })

  var markKazerneplein = new google.maps.Marker({
    position: {lat: 51.991305, lng: 5.924871},
    map: map
  })

  markKazerneplein .addListener('click', function() {
    infoKazerneplein .open(map, markKazerneplein )
  })

  // Korianderstraat 81 Arnhem
  var infoKorianderstraat = new google.maps.InfoWindow({
    content: 'Korianderstraat 81 Arnhem'
  })

  var markKorianderstraat = new google.maps.Marker({
    position: {lat: 51.967406, lng: 5.921131},
    map: map
  })

  markKorianderstraat .addListener('click', function() {
    infoKorianderstraat .open(map, markKorianderstraat )
  })

  // Kronenburgsingel 16 Arnhem
  var infoKronenburgsingel = new google.maps.InfoWindow({
    content: 'Kronenburgsingel 16 Arnhem'
  })

  var markKronenburgsingel = new google.maps.Marker({
    position: {lat: 51.960343, lng: 5.899953},
    map: map
  })

  markKronenburgsingel .addListener('click', function() {
    infoKronenburgsingel .open(map, markKronenburgsingel )
  })

  // Middachtensingel 2 Arnhem
  var infoMiddachtensingel = new google.maps.InfoWindow({
    content: 'Middachtensingel 2 Arnhem'
  })

  var markMiddachtensingel = new google.maps.Marker({
    position: {lat: 51.984114, lng: 5.956792},
    map: map
  })

  markMiddachtensingel .addListener('click', function() {
    infoMiddachtensingel .open(map, markMiddachtensingel )
  })

  // Papendallaan 51 Arnhem
  var infoPapendallaan = new google.maps.InfoWindow({
    content: 'Papendallaan 51 Arnhem'
  })

  var markPapendallaan = new google.maps.Marker({
    position: {lat: 52.012075, lng: 5.819528},
    map: map
  })

  markPapendallaan .addListener('click', function() {
    infoPapendallaan .open(map, markPapendallaan )
  })

  // Thorbeckestraat 6, Arnhem
  var infoThorbeckestraat = new google.maps.InfoWindow({
    content: 'Thorbeckestraat 6, Arnhem'
  })

  var markThorbeckestraat = new google.maps.Marker({
    position: {lat: 51.981106, lng: 5.926302},
    map: map
  })

  markThorbeckestraat .addListener('click', function() {
    infoThorbeckestraat .open(map, markThorbeckestraat )
  })

  // Utrechtsestraat 40/42 arnhem
  var infoUtrechtsestraat = new google.maps.InfoWindow({
    content: 'Utrechtsestraat 40/42 Arnhem'
  })

  var markUtrechtsestraat = new google.maps.Marker({
    position: {lat: 51.984077, lng: 5.897561},
    map: map
  })

  markUtrechtsestraat .addListener('click', function() {
    infoUtrechtsestraat .open(map, markUtrechtsestraat )
  })

  // Velperweg 39 Arnhem
  var infoVelperweg = new google.maps.InfoWindow({
    content: 'Velperweg 39 Arnhem'
  })

  var markVelperweg = new google.maps.Marker({
    position: {lat: 51.987746, lng: 5.926406},
    map: map
  })

  markVelperweg .addListener('click', function() {
    infoVelperweg .open(map, markVelperweg )
  })

  // Veluwestraat 120 Arnhem
  var infoVeluwestraat = new google.maps.InfoWindow({
    content: 'Veluwestraat 120 Arnhem'
  })

  var markVeluwestraat = new google.maps.Marker({
    position: {lat: 51.989375, lng: 5.887081},
    map: map
  })

  markVeluwestraat .addListener('click', function() {
    infoVeluwestraat .open(map, markVeluwestraat )
  })

  // Nijverheidstraat 67 a Bemmel
  var infoNijverheidstraat = new google.maps.InfoWindow({
    content: 'Nijverheidstraat 67 a Bemmel'
  })

  var markNijverheidstraat = new google.maps.Marker({
    position: {lat: 51.907449, lng: 5.924673},
    map: map
  })

  markNijverheidstraat .addListener('click', function() {
    infoNijverheidstraat .open(map, markNijverheidstraat )
  })

  // Tellegenlaan 2 Dieren
  var infoTellegenlaan = new google.maps.InfoWindow({
    content: 'Tellegenlaan 2 Dieren'
  })

  var markTellegenlaan = new google.maps.Marker({
    position: {lat: 52.051348, lng: 6.099097},
    map: map
  })

  markTellegenlaan .addListener('click', function() {
    infoTellegenlaan .open(map, markTellegenlaan )
  })

  // Einsteinweg 8a Elst
  var infoEinsteinweg = new google.maps.InfoWindow({
    content: 'Einsteinweg 8a Elst '
  })

  var markEinsteinweg = new google.maps.Marker({
    position: {lat: 51.907409, lng: 5.864313},
    map: map
  })

  markEinsteinweg .addListener('click', function() {
    infoEinsteinweg .open(map, markEinsteinweg )
  })

  // Pr. Irenestraat 49 Elst
  var infoIrenestraat = new google.maps.InfoWindow({
    content: 'Pr. Irenestraat 49 Elst'
  })

  var markIrenestraat = new google.maps.Marker({
    position: {lat: 51.920025, lng: 5.846161},
    map: map
  })

  markIrenestraat .addListener('click', function() {
    infoIrenestraat .open(map, markIrenestraat )
  })

  // Laan van Scheut 2 Nijmegen
  var infoLaanVanScheut = new google.maps.InfoWindow({
    content: 'Laan van Scheut 2 Nijmegen'
  })

  var markLaanVanScheut = new google.maps.Marker({
    position: {lat: 51.826905, lng: 5.863049},
    map: map
  })

  markLaanVanScheut .addListener('click', function() {
    infoLaanVanScheut .open(map, markLaanVanScheut )
  })

  // Groeneweg 14 Renkum
  var infoGroeneweg = new google.maps.InfoWindow({
    content: 'Groeneweg 14 Renkum'
  })

  var markGroeneweg = new google.maps.Marker({
    position: {lat: 51.974784, lng: 5.736977},
    map: map
  })

  markGroeneweg .addListener('click', function() {
    infoGroeneweg .open(map, markGroeneweg )
  })

  // Hutteweg 24 Ulft
  var infoHutteweg = new google.maps.InfoWindow({
    content: 'Hutteweg 24 Ulft'
  })

  var markHutteweg = new google.maps.Marker({
    position: {lat: 51.895845, lng: 6.382247},
    map: map
  })

  markHutteweg .addListener('click', function() {
    infoHutteweg .open(map, markHutteweg )
  })

  // Marijkeweg 5 Wageningen
  var infoMarijkeweg= new google.maps.InfoWindow({
    content: 'Marijkeweg 5 Wageningen'
  })

  var markMarijkeweg = new google.maps.Marker({
    position: {lat: 51.969396, lng: 5.654658},
    map: map
  })

  markMarijkeweg .addListener('click', function() {
    infoMarijkeweg .open(map, markMarijkeweg )
  })

  // Stationsplein 8 Zevenaar
  var infoStationsplein = new google.maps.InfoWindow({
    content: 'Stationsplein 8 Zevenaar'
  })

  var markStationsplein = new google.maps.Marker({
    position: {lat: 51.922968, lng: 6.074255},
    map: map
  })

  markStationsplein .addListener('click', function() {
    infoStationsplein .open(map, markStationsplein )
  })
}
