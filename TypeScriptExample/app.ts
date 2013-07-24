/// <reference path='jquery.d.ts'/>
/// <reference path='Vehicle.ts'/>

window.onload = () => {
    
    var offRoadCar = new VehicleModule.OffRoadCar('FreeLander', 'Land Rover');
    $('#content').html(offRoadCar.GetName());
};
