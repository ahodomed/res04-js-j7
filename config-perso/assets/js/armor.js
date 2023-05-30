class Armor{
    name;
    resistance;
    
    constructor(name, resistance)
    {
        this.name = name;
        this.resistance = resistance;
        
    }
    
    set name(name){
        this.name = name;
    }
    
    
    get(){
        return this.name;
    }
    
    
    set resistance(resistance){
        this.resistance = resistance;
    }
    
    get resistance(){
        return this.resistance;
    }
}


export{ Armor }