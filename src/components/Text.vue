<template>
<div>
    <h1>Adventure Area</h1>
    <h2>{{currentLocation.name}}</h2>
    <p>{{currentLocation.text}}</p>
    <input type="text" v-on:keydown.enter="performAction" v-model="userInput">
</div>
  
</template>

<script>
export default {
name:'mainComponent',
    data(){
        return{
            currentLocation:{ 
                name:null,
                text:null
            },
            locations:{
                one:{
                    name:"Jetty", 
                    text:"You wake up and find yourself on an old jetty.",
                    north:'two', 
                    east:'null',
                    west:'null',
                    south:'null'

                }, 
                two:{
                    name:"Shore", 
                    text:"You find your way to the shore",
                    north:'null', 
                    east:'null',
                    west:'null',
                    south:'null'
                }                

            },
            userInput:null 
        }
    },
    created(){
        this.currentLocation=this.locations['one']; 
    },
    methods:{
        performAction(){
            console.log(this.userInput)
            switch(this.userInput){
                case 'north':
                    if(this.currentLocation.north!==null){
                        this.currentLocation=this.locations[this.currentLocation.north]; 
                    }

            }
        }
        
    }

}
</script>

<style  scoped>

</style>>

