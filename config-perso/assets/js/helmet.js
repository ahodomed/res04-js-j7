import{ Armor} from "./armor.js"

class Helmet extends Armor
{
    visibility;
    constructor(visibility, name, resistance ){
        super(name, resistance)
        this.visibility = visibility;
    }
    
    set visibility(visibility)
    {
        this.visibility = visibility;
        
    }
    
    get visibility()
    {
        return this.visibility;
    }
    
    
}


export{Helmet};
