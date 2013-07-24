var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var VehicleModule;
(function (VehicleModule) {
    var Car = (function () {
        function Car(name, model) {
            this.Name = name;
            this.Model = model;
        }
        Car.prototype.GetName = function () {
            return 'Car:' + this.Model + ' ' + this.Name;
        };
        return Car;
    })();
    VehicleModule.Car = Car;

    var OffRoadCar = (function (_super) {
        __extends(OffRoadCar, _super);
        function OffRoadCar(name, model) {
            _super.call(this, name, model);
        }
        OffRoadCar.prototype.GetName = function () {
            return 'Car (OffRoad):' + this.Model + ' ' + this.Name;
        };
        return OffRoadCar;
    })(Car);
    VehicleModule.OffRoadCar = OffRoadCar;

    var GetNameBeautifulService = (function () {
        function GetNameBeautifulService() {
        }
        GetNameBeautifulService.prototype.GetNameBeatifull = function (vehicle) {
            var s = '---------------------------<br/>';
            s = s + '--- ' + vehicle.GetName() + ' ---</br>';
            s = s + '---------------------------<br/>';
            return s;
        };
        return GetNameBeautifulService;
    })();
})(VehicleModule || (VehicleModule = {}));
//@ sourceMappingURL=Vehicle.js.map
