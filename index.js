// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) { 
    const hqBlock = 42;
    const blocks = (Math.max(pickupLocation, hqBlock) - Math.min(pickupLocation, hqBlock));
    return blocks;
  }
  function distanceFromHqInFeet(pickupLocation) {
    distanceFromHqInBlocks();
    const distanceInFeet = (distanceFromHqInBlocks(pickupLocation) * 264);
    return distanceInFeet;
  }
  function distanceTravelledInFeet(pickupLocation, destination) {
    const feetTravelled = ((Math.max(pickupLocation, destination) - Math.min(pickupLocation, destination)) * 264);
    return feetTravelled;
  } 
  function calculatesFarePrice(pickupLocation, destination) {
    let distance = distanceTravelledInFeet(pickupLocation, destination);
    const farePrice = ((distance - 400 ) * 2) / 100;
    if (distance <= 400) {
        return 0;
    }else if(distance > 400 && distance <= 2000) {
        return farePrice;
    }else if (distance > 2000 && distance < 2500){
        return 25;
    }else if(distance > 2500){
        return 'cannot travel that far';
    }
    
}