import{ Weapon }from "./weapon.js";


class Sword extends Weapon {
    pommelStrikeDamages
    
    constructor(pommelStrikeDamages
, name, hand, damages){
    
    this.pommelStrikeDamages = pommelStrikeDamages;
    this.name = name;
    this.hand = hand;
}


 set pommelStrikeDamages(pommelStrikeDamages){
        this.pommelStrikeDamages = pommelStrikeDamages;
        
    }
    
    get pommelStrikeDamages(){
        return this.pommelStrikeDamages;
    }
}







export{
    Sword
};