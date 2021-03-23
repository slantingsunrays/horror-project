<template>
<div>
    <h1>Adventure Area</h1>
    <h2>{{currentLocation.name}}</h2>
    <p>{{currentLocation.text}}</p>
    
    <p>{{message}}</p>
    <input type="text" v-on:keydown.enter="performAction" v-model="userInput">
    <p>{{error}}</p>
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
            // toolName:'', 
            message:'', 
            userInput:null 
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
                
                case 'pick up the '+ this.currentLocation.pickUp: 
                    if(this.currentLocation.pickUp!==null){
                        this.message="You picked up "+ this.currentLocation.pickUp
                    }else{
                      this.error="There's nothing to pick up" 
                    }
                break;

                case 'use ' +this.currentLocation.tool: 
                    if(this.currentLocation.use!==null){
                        this.message=this.currentLocation.use 
                    }else{
                      this.error="There's nothing you can use right now" 
                    }
                break;

                case 'run': 
                    if(this.currentLocation.run!==null){
                        this.currentLocation=this.locations[this.currentLocation.run]; 
                    }else{
                      this.error="You can't run right now" 
                    }
                break;
                
                case 'fight': 
                    if(this.currentLocation.run!==null){
                        this.currentLocation=this.locations[this.currentLocation.fight]; 
                    }else{
                      this.error="You can't fight right now" 
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

<style  scoped>

</style>>

