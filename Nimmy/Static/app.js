function start(){
    var url = "./joineddata.json";
    var locations=[];
    d3.json(url).then((response)=> {

  

    response.forEach(x=>{
        locations.push(x.Zip_Code)
        });
        locations = locations.filter( function( item, index, inputArray ) {
            return inputArray.indexOf(item) == index;
       
     });
     
     locations.forEach(function(name) {
        d3.select("#selDataset").append("option").text(name).property("value");
    });
    });
    mapdata(77062)

    }

function mapdata(valueselected){
    var sf = [29.749907,-95.358421 ];
var url = "./joineddata.json";
var container = L.DomUtil.get('map');
if(container != null){
container._leaflet_id = null;
}

var myMap = L.map("map", {
    center: sf,
    zoom: 11
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

d3.json(url).then(response=>{
    var locations=[];
    let dataunfiltered = response;
    let dataraw = dataunfiltered.filter((val) => val.Zip_Code == valueselected);
    console.log(dataraw);
    dataraw.forEach(x=>{
        locations.push([x.Latitude,x.Longitude])
    })
    // locations.forEach(x=>{
    //     L.marker(x).addTo(myMap);
    // });
    L.heatLayer(locations, {
        radius: 20,
        blur: 20
    }).addTo(myMap);
    console.log(locations);

})

}

function onchangeselected(valueselected){
    mapdata(valueselected)
}
    start()
