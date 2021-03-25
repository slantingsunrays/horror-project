<template>
<div class="adventure">
    <h1 class="title"><span>The Woods Are Lovely, Dark and Deep</span></h1>    
    <div class="container"> 
        <h2>{{currentLocation.name}}</h2>
        <p>{{currentLocation.text}}</p>        
        <p>{{message}}</p>
        <p>{{useMessage}}</p>
        <input type="text" id="input" v-on:keydown.enter="performAction" v-model="userInput">
        <p>{{error}}</p>
    </div>
    
</div>
  
</template>

<script>
import locations from '../assets/locations'; 

export default {
name:'adventure',
    data(){
        return{
            currentLocation:{ 
                name:null,
                text:null
            },
            locations:locations,
            error:'', 
            message:'', 
            userInput:null,
            useMessage:''
        }
    },
    created(){
        this.currentLocation=this.locations['one']; 
    },
    methods:{
        
        performAction(){
            this.error =''; 
            this.message=''; 
            console.log(this.userInput)
            switch(this.userInput){
                case 'north':
                    if(this.currentLocation.north!==null){
                        this.currentLocation=this.locations[this.currentLocation.north]; 
                        // if this survive counter =true , add one to survive counter 
                    } else{
                      this.error="You can't go north from here" 
                    }
                    break; 
                case 'south': 
                    if(this.currentLocation.south!==null){
                        this.currentLocation=this.locations[this.currentLocation.south]; 
                    }else{
                      this.error="You can't go south from here" 
                    }
                    break; 
                case 'east': 
                    if(this.currentLocation.east!==null){
                        this.currentLocation=this.locations[this.currentLocation.east]; 
                    }else{
                      this.error="You can't go east from here" 
                    }
                break; 

                case 'west': 
                    if(this.currentLocation.west!==null){
                        this.currentLocation=this.locations[this.currentLocation.west]; 
                    }else{
                      this.error="You can't go west from here" 
                    }
                break;

                case 'enter': 
                    if(this.currentLocation.enter!==null){
                        this.currentLocation=this.locations[this.currentLocation.enter]; 
                    }else{
                      this.error="You can't enter here" 
                    }
                break;
                

                case 'exit': 
                    if(this.currentLocation.exit!==null){
                        this.currentLocation=this.locations[this.currentLocation.exit]; 
                    }else{
                      this.error="You can't exit here" 
                    }
                break;
                
                // case 'pick up the '+ this.currentLocation.pickUp: 
                case 'pick up': 
                    if(this.currentLocation.pickUp!==null){
                        this.message="You picked up "+ this.currentLocation.pickUp
                    }else{
                      this.error="There's nothing to pick up" 
                    }
                break;

                // case 'use ' +this.currentLocation.tool: 
                case 'use': 
                    if(this.currentLocation.use!==null){
                        this.message=this.currentLocation.use 
                        
                    }else{
                      this.error="There's nothing you can use right now" 
                    }
                break;

                case 'interact': 
                    if(this.currentLocation.interact!==null){
                        this.currentLocation=this.locations[this.currentLocation.interact]; 
                    }else{
                      this.error="There's no one to interact with right now" 
                    }
                break;
                
                case 'run': 
                    if(this.currentLocation.run!==null){
                        this.message=this.currentLocation.run; 
                    }else{
                      this.error="There's no one to interact with right now" 
                    }
                break;
               
                case 'restart': 
                    if(this.currentLocation.restart!==null){
                        this.currentLocation=this.locations[this.currentLocation.restart]; 
                    }else{
                      this.error="You can't do that right now"
                    }
                break;
                default:
                this.error="You can't do that right now"

            }
            
            this.userInput=null; 
        }
        
    }

}
</script>

<style scoped>



.container{
    color:whitesmoke; 
    margin:10px;
    background-color:#222;
    border:5px solid;    
    padding:30px; 
    width:1000px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top:50px;
    width: 40%; 
    

}
.title{
    color:whitesmoke;
   

}



span{
    border-bottom: 5px solid whitesmoke; 
    margin-top:10px; 
}
input{
    height:30px; 
    background-color:whitesmoke;
    font-size: 1.2em; 
    margin-top:20px; 

}

</style>>

