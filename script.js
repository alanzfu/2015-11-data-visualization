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

  data[i].zip = datum[12];
  data[i].neighborhood = datum[36];
  data[i].date = datum[13];
  data[i].id = datum[1];
}


//d3 Update Functions ------------------------------------------------------------

//create canvas

//Update FN for objects added to canvas
var updateVisual = function(visData){
  //Join Data
  var evictions = d3.select('svg').selectAll('.eviction')
    .data(visData, function(d){
      return d.id
    })

  //Enter
  evictions.enter()
    .append('circle')
    .transition()
    .duration(200)
      .attr('cx',function(d){return d.x})
      .attr('cy',function(d){return d.y})
      .attr('r', 3);

  //Exit
  evictions.exit()
    .transition()
    .duration(100)
      .attr('opacity',0)
      .attr('r',10)
    .remove();

}



//Initialization-------------------------------------------------
//create canvas
//var width = 800;
//var height = 600;


//more stuff from sfPath.js
var visualData = [];
updateVisual(visualData);

//median household income for that year in san francisco should display as well



//LOOPING-------------------------------------------------
//these will all be forms, so we'll need to grab these values
var start = d3.select('#startDate').attr('value');
console.log(start);
var speed = d3.select('#speed') 
var evictionType = d3.select('#type');

//d3 start, speed, type
  //datestring = 1997
var dateString = '1997-10-5'

setInterval(function(){
  visualData = [];
  if(data[data.length-1].date === mostrecentdate){
    visualData.push(data.pop());
  }
  else {
    increment the dateString
    change the date string on the DOM
  }
  updateVisual(visualData);
}, 100);


