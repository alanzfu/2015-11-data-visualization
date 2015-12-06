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
//   x:
//   y:
//   cause: 'condo coversion'
//   neighborhood: 'Outer Richmond'
//   date: '2015-10-30T00:00:00'
//   id: "06B8A68E-4962-4369-B556-CA97FA3C2693"
// }

for(var i = 0; i < data.length; i++){
  var datum = data[i];
  //update x and y

  //update causes
  for(var i = 14; i<=31; i++){
    if(datum[i] === true){
      data[i].cause = causes[i-14]; 
    }
  }  

  //create more readable neighborhood property
  data[i].neighborhood = datum[36];
  data[i].date = datum[13];
  data[i].id = datum[1];
}


console.log(data[0].id)
//create canvas

//Update FN for objects added to canvas
var updateData = function(visualData){
}





//initialize
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
    //push onto visualData
  //updateVisual(visualData);


}, 100);


