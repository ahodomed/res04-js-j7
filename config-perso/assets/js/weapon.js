class Weapon
{
    name;
    hand;
    damages;
    
    constructor(name, hand, damages)
    {
        this.name = name;
        this.hand = hand;
        this.damages = damages;
    }
    
    set name(name){
        this.name = name;
        
    }
    
    get name(){
        return this.name;
    }
    
     set hand(hand){
        this.hand = hand;
        
    }
    
    get hand(){
        return this.hand;
    }
    
    
     set damages(damages){
        this.damages = damages;
        
    }
    
    get damages(){
        return this.damages;
    }
    
    

}