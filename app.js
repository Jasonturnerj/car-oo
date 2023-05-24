  class Vehicle{
    constructor(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
    }
    honk(){
        return " beep beep";
    }
    toString(){
        return `the vehicle is a ${this.make} from t${this.year}.`;
    }
  }
  class Car extends Vehicle{
    constructor(make, model , year){
        super(make, model , year);
        this.numWheels = 4;

    }
    revEngine(){
        return "vrooooomm whooosh!!!!!!!! ";
    }
  }
  class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model , year);
        this.numWheels= 2 ;
    }
    revEngine(){
        return "vrooooomm whooosh!!!!!!!! ";
    }
  }
  class Garage{
    constructor(capacity){
        this.vehicles =[];
        this.capacity= capacity;
    }
    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            return "Do not put your junk in my garage!!!!!";
        }
        if(this.vehicles.length >= this.capacity){
            return "NO ROOM FOR YOUR JUNKER";
        }
        this.vehicles.push(newVehicle);
        return "Thank you for the new car!!!!!"
    }
  }