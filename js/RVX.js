class carro{
    type = "";
    cost = 0;
    color = "";
    costo_final = 0;
    top = ""; // definido por el valor de un color , si es nulo no hay top
    size_top = 0;
    windshield = ""; // si no esta definido no se agrega
    leds = 0; // igual a cero no se agregan
    turn_signals = 0;// igual a cero no se agregan
    glove_box = 0;// 0 ninguna , 1 driver , 2 passenger, 3 ambas

    // colocar contadores en cada elemento extra

    constructor(){
        this.modelo = "";     
        this.type = "";
        this.cost = 0;
        this.color = "";
        
        this.costo_final = 0;
        //adds
        this.top = ""; 
        this.size_top = 0;
        this.windshield = ""; 
        this.leds = 0;
        this.turn_signals = 0;
        this.glove_box = 0;
    }
    // Basic characteristics 
    setModelo(modelo){
        this.modelo = modelo;
    }
    setType(type){
        this.type = type;
    }

    setCost(){    
        if(this.type=='Elite'){
            this.cost = 9699;     
        }
        if(this.type == "Gas"){
            this.cost = 8049;     
        }
        if(this.type == "Electric"){
            this.cost = 7799;
        }
    }

    setColor(color){
        this.color = color;
    }

    setCosto_final(){
        this.costo_final = this.costo_final +this.cost;
    }
    // adds
    setLeds(value){
        if(value){ // && contLeds == 0
            this.costo_final = this.costo_final + 195.65 ;// al ultimo agregar el costo inicial
        }
    }

    setTurn_signals(value){
        if(value){ // && contLeds == 0
            this.costo_final = this.costo_final + 300;// al ultimo agregar el costo inicial
        }
    }

    setWindShield(t_wind_shield){
        this.windshield = t_wind_shield;
        if(t_wind_shield == "Tinted"){
            this.costo_final = this.costo_final + 156;
        }
        if(t_wind_shield == "Split"){
            this.costo_final = this.costo_final + 195.32;
        }
    }

    setSize_top(size){
        this.size = size;
        if(size == 80){        
            this.costo_final = this.costo_final + 315.12; 
        }
        if(size == 54){
            this.costo_final = this.costo_final + 271;
        }
    }

    setTop(color_top){// necesito una tipo de top y una color top
        this.color_top = color_top;
        
        if(color_top == "Grey" && this.size_top == 80){// este es aparte del tamaño?
            this.costo_final = this.costo_final + 315.12;
        }
        if(color_top == "Black" && this.size_top == 80){
            this.costo_final = this.costo_final + 484.05;
        }
        if(color_top == "Oyster" && this.size_top == 80){
            this.costo_final = this.costo_final + 452;
        }
        if(color_top == "Stone" && this.size_top == 80){
            this.costo_final = this.costo_final + 452;
        }
        if(this.size_top == 54){
            this.costo_final = this.costo_final + 271;
        }
    }

    
}