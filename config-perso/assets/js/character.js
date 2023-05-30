class Character{
    helmet;
    axe;
    shield;
    sword;
    
    constructor(){
        this.helmet = false;
        this.axe = false; 
        this.shield = false;
        this.sword = false;
    }
    
    
     get helmet ()
     {
        return this.helmet;
      }

    set helmet (helmet)
    {
        this.helmet = helmet;
    }
    

    set axe (axe)
    {
        this.axe = axe;
    }
    
         get axe ()
    {
        return this.axe;
    }


        set shield (shield)
    {
        this.shield = shield;
    }
    
         get shield ()
    {
        return this.shield;
    }
    
    render(){
        
    }
}

export{Character}