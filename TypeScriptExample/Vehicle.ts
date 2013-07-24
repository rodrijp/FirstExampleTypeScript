module VehicleModule {

    export interface Vehicle {
        GetName(): string;
    }

    export class Car implements Vehicle {
        Name: string;
        Model: string;
        constructor(name: string, model: string) {
            this.Name = name;
            this.Model = model;
        }
        public GetName(): string {
        return 'Car:' + this.Model + ' ' + this.Name
    }
    }

    export class OffRoadCar extends Car {
        constructor(name: string, model: string) {
            super(name, model);
        }
        public GetName() {
        return 'Car (OffRoad):' + this.Model + ' ' + this.Name
    }
    }

    class GetNameBeautifulService<T extends Vehicle> {
        public GetNameBeatifull(vehicle: T) {
            var s = '---------------------------<br/>'
         s = s + '--- ' + vehicle.GetName() + ' ---</br>'
         s = s + '---------------------------<br/>'
         return s;
        }

    }

}
