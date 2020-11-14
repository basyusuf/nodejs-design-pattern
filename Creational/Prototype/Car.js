class Car{
    constructor(license_plate="Undefined Plate"){
        this._license_plate=license_plate;
        this._car_part = []
    }
    getLicensePlate(){
        return this._license_plate;
    }
    setLicensePlate(license_plate){
        this._license_plate=license_plate;
    }
    getCarPart(){
        return this._car_part;
    }
    addPart(item){
        this._car_part.push(item)
    }
    clone(){
        let proto = Object.getPrototypeOf(this);
        let clone = Object.create(proto);

        clone._license_plate = this._license_plate;
        clone._car_part = [...this._car_part]
        return clone;
    }
}
module.exports=Car;