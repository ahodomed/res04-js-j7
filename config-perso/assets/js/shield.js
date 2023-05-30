import{Armor} from "./armor.js";


class Shield extends Armor
{
    
    block;
    
    constructor(name,resistance,block)
    {
        super(name, resistance);
    }
    
    set name(name)
    {
        this.name = name;
    }
    
    get(name)
    {
        return this.name;
    }
    
    set()
    {
        
    }
}


export{ Shield }