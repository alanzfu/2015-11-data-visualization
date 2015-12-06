//data is currently stored as [{}....{}]
data = data['data'];
var causes = [
  'non-payment',
  'breach',
  'nuisance',
  'illegal use',
  'failure to sign renewal',
  'access denial',
  'unapproved subtenant',
  'owner move-in',
  'demolution',
  'capital improvement',
  'substantial rehab',
  'ellis act',
  'condo conversion',
  'roommate same room',
  'other cause',
  'late payments',
  'lead remediation',
  'development'
]
//changes data so that they have accessible/readable x,y and causes
// datum = {
//   x: .datum[37][2]
//   y: datum[37][1] 
//   cause: 'condo coversion'
//   neighborhood: 'Outer Richmond'
//   date: '2015-10-30T00:00:00'
//   id: "06B8A68E-4962-4369-B556-CA97FA3C2693"
// }

for(var i = 0; i < data.length; i++){
  var datum = data[i];
  //update x and y


  data[i].neighborhood = datum[36];
  data[i].date = datum[13];
  data[i].id = datum[1];
}


//create canvas

//Update FN for objects added to canvas
var updateVisual = function(visData){
  //Join Data
  var evictions = d3.select('svg').selectAll('.eviction')
    .data(visData, function(d){
      return d.id
    })

  //Update

  //Enter
  var evictions

  //Enter/Update


  //Exit

}



//Initialization-------------------------------------------------
//create canvas
var width = 800;
var height = 600;

var svg = d3.select("body")
  .append("svg")
    .attr("width", width)
    .attr("height", height);

//more stuff from sfPath.js


var visualData = [];
updateVisual(visualData);

//d3 start, speed, type
  //datestring = 1997

setInterval(function(){
  //increment the currentDate
  //change the date on the DOM
    //.text
  //overwrite visual data with []
  //while(last datum.date === currentDate)
    //pop if off data
    //if(matches type)
      //push onto visualData
  //updateVisual(visualData);


}, 100);


