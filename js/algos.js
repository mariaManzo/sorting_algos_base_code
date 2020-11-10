// Converts from degrees to radians.
Number.prototype.toRadians = function() {
  return this * Math.PI / 180;
};


// Calculates the distance between Grenoble and the given city
function distanceFromGrenoble(city)
{
  //console.log("distanceFromGrenoble - implement me !");
  var GrenobleLat = 45.166667;
  var GrenobleLong = 5.716667;
  var cityLat = city.latitude;
  var cityLong = city.longitude;

  const R = 6371e3; // metres
  const φ1 = GrenobleLat * Math.PI/180; // φ, λ in radians
  const φ2 = cityLat * Math.PI/180;
  const Δφ = (cityLat-GrenobleLat) * Math.PI/180;
  const Δλ = (cityLong-GrenobleLong) * Math.PI/180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  const d = R * c; // in metres
  const distInKm = d /1000;

  return distInKm;

}



// Swap 2 values in array csvData
// i is the index of the first city
// j is the index of the second city
function swap(i,j)
{
  displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)
  let tmp = csvData[i];
  csvData[i] = csvData[j];
  csvData[j] = tmp;

}

// Returns true if city with index i in csvData is closer to Grenoble than city with index j
// i is the index of the first city
// j is the index of the second city
function isLess(i, j)
{
  displayBuffer.push(['compare', i, j]); // Do not delete this line (for display)
  return distanceFromGrenoble(csvData[i]) < distanceFromGrenoble(csvData[j]);
}


function insertsort(){

  for (let i = 1; i < csvData.length; i++){
    for (let j = i; j > 0 && isLess(j, j-1); j--){
      swap(j,j-1);
    }
  }
}

function selectionsort()
{
  for(var i = 0; i < csvData.length-1; i++){
    //stocker l'index de l'élément minimum
    var min = i;
    for(var j = i+1; j < csvData.length; j++){
      if(isLess(j,min)){
        // mettre à jour l'index de l'élément minimum
        min = j;
      }
    }
    swap(i, min);
  }

}

function bubblesort()
{
  let isSwapped
  do {
    isSwapped = false
    for (let i = 0; i < csvData.length-1; i++) {
      if (!isLess(i, i+1)) {
        swap(i, i+1)
        isSwapped = true
      }
    }
  } while (isSwapped)
}

function shellsort()
{
  console.log("shellsort - implement me !");
}

function mergesort()
{
  console.log("mergesort - implement me !");
}

function heapsort()
{
  console.log("heapsort - implement me !");
}


  function quicksort()
  {

  }



function quick3sort()
{
  console.log("quick3sort - implement me !");
}


function sort(algo)
{
  switch (algo)
  {
    case 'insert': insertsort();break;
    case 'select': selectionsort();break;
    case 'bubble': bubblesort();break;
    case 'shell': shellsort();break;
    case 'merge': mergesort();break;
    case 'heap': heapsort();break;
    case 'quick': quicksort();break;
    case 'quick3': quick3sort();break;
    default: throw 'Invalid algorithm ' + algo;
  }
}
