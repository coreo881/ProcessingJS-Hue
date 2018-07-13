var hueData1;
var changeLight = {hue:0};
// var changeLight2 = {hue:0}; 

function setup() {
  createCanvas(800, 600);
}

function fetchOne(){
      fetch('http://192.168.x.x/api/<my id>/lights/1/state', {
    method: 'PUT',
    body: JSON.stringify(changeLight),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}

function fetchTwo(){
    fetch('http://192.168.x.x/api/<my id>/lights/1/state', {
    method: 'PUT',
    body: JSON.stringify(changeLight),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    

}

function draw() {
  background(0);
  fetchOne();
  fetchTwo();

  if(changeLight.hue>=65280){
     changeLight.hue = 0
  }else{
  changeLight.hue+=100;
  }
}