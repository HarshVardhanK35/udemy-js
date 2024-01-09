// ----------------------- navigator.geolocation.getCurrentPosition(curSuccess, curError, curPositions)
function curSuccess(pos) {
  const coords = pos.coords;
  console.log(coords)
  console.log(`lat: ${coords.latitude}`);
  console.log(`long: ${coords.longitude}`);
  console.log(`withIn: ${coords.accuracy} meters`);
}
function curError(err) {
  console.log(`error - code ${err.code} with message: ${err.message}`);
}
const curPosition = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
// navigator.geolocation.getCurrentPosition(curSuccess, curError, curPosition);

// ----------------------- navigator.geolocation.watchPosition(watchSuccess, watchError, watchPositions)
const target = {
  lat: 20.99,
  lng: 78.89
}
function watchSuccess(pos){
  const coords = pos.coords;
  if(target.lat === coords.lat && target.lng === coords.longitude){
    console.log("You have reached your destination !!!")
    navigator.geolocation.clearWatch(id)
  }
}
function watchError(err){
  console.log(`err - code: ${err.code} with message: ${err.message}`)
}
const watchPositions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
}
// const id = navigator.geolocation.watchPosition(watchSuccess, watchError, )