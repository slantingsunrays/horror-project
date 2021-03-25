let locations ={
    one:{
        name:"The Dark Woods" ,
        text:"You wake up in the middle of the dark woods.It seems like it's midnight. The wind is whistling and the air is chilly. How did you get here? As you try to make sense of the situation, you see a glowing light to the *south*.", 
        north:"two", 
        south:"four",
        east:null, 
        west:null,
        pickUp:null,   
        enter:null, 
        exit:null
    },
   

    two:{
        name:"The Sounds",
        text:"You decide to go towards the sounds to see if you can find other people. As you're walking, you find a strange cloak hanging from a tree branch that you can *pick up*. You can still see the glowing light to the *south*",
        north:null, 
        south:"three",
        east:null, 
        west:null, 
        enter:null,
        pickUp:"cloak",         
        use:null ,         
        exit:null
    },
    three:{
        name:"The Clearing",
        text:"You find a clearing with footprints trailing off to the *west*. You can also also see the source of light just off to the *south*.",
        north:null, 
        south:"four",
        east:null, 
        west:"five",
        enter:null, 
        exit:null
    },    
    four:{
        name:"The Hut",
        text:"You stumble through some bushes to find the hut. It seems empty, with the roof on the verge of collapsing and the walls crumbling. Yet, light peeks out from the window and it seems like a good place to rest. You check the door to see if you can *enter* it",
        north: null, 
        south:null,
        east:null, 
        west:null,
        enter:"six", 
        exit:null
    },
    five:{
        name:"Footprints",
        text:"As you're following the footprints, you hear some murmuring in the far distance carried by the wind. It seems to be coming from the *east* but the footsteps keep leading *west*",
        north:null, 
        south:null,
        east:"eight", 
        west:"ten",
        enter:null, 
        exit:null
    }, 
    six:{
        name:"Inside The Home",
        text:"You're inside the hut and there seems to be a small glowing lamp that you didn't notice. It seems warm and inviting. Feeling more tired by the minute, you decide you can *use* the lantern as a safegard against animals while you rest.",
        north:null, 
        south:null,
        east:null, 
        west:null,
        enter:null,
        pickUp:null, 
        use:"You settle down to sleep feeling safe and sound. The morning sun peeks through the window, casting a shadow of your lifeless body. The lamp seems to grow a little brighter. Did you want to *restart*?",  
        exit:null,
        restart:"one"
    },
    seven:{
        name:"Voices In The Wind",
        text:"As you follow the voices, the whisperings seem to be getting louder. You're hesitant to follow them now. As you look back, you can still see the glow of light to the *south*. The location of the voices seems to be still coming from the *east* ",
        north:null, 
        south:"four",
        east:"four", 
        west:null,
        enter:null, 
        pickUp:null, 
        use:null,     
        exit:null
    }, 
  
    eight:{
        name:"Whisperings of The Woods",
        text:"You start walking faster towards the voices. Hopefully they're travellers that can help you find a way home. Why do the woods seem darker and deeper? You hurry *east*.  ",
        north:null, 
        south:null,
        east:"nine", 
        west:null,
        enter:null, 
        pickUp:null,         
        use:null,          
        exit:null
    },
    nine:{
        name:"The Lost Ones",
        text:"As you follow the voices, the trees get closer and closer and the darkness gets deeper and deeper. You can hardly see in front of you at this point. All you have are the voices to go on. You break into a *run*.",
        north:null, 
        south:null,
        east: null, 
        west: null,
        enter:null, 
        pickUp:"You pick up the tree branch and start slowly inserting into into your ear. Did you want to *restart*?",       
        use:null,       
        run:"You don't know how long you've been in these woods now. You can't...feel the the chill...or your body for that matter. All you can hear are the whisperings inside your head.How do you make it stop? You see a tree branch you can *pick up*. ", 
        exit:null,
        restart:"one"
    },
   ten:{
        name:"The Strangers",
        text:"You track the footprints and see a group of travellers dressed in rags with a caravan in the tow. You're trying to decide if you want to *interact* with them. You feel your cloak might be of *use* here.",
        north:"twelve", 
        south:null,
        east: null, 
        west: null,
        enter:null, 
        pickUp:null,          
        use:"You put the cloak around you and your footsteps seem to dampen. You quietly follow the travellers and they don't seem to notice you. Eventually you reach the edges of the woods and see a decrepit house along the *north* stretch of the road.",  
        interact:"eleven", 
        exit:null
    },
   eleven:{
        name:"Meeting",
        text:"You approach the travellers warily to ask for help. They greet you and ask if you'd like to join them. You accept their help and travel *north* with them.",
        north:"thirteen", 
        south:null,
        east: null, 
        west: null,
        enter:null, 
        pickUp:null,        
        use:null,  
        interact:null, 
        exit:null
    },
    twelve:{
        name:"To be continued...",
        text:"",
        north:null, 
        south:null,
        east: null, 
        west: null,
        enter:null, 
        pickUp:null, 
        use:null,  
        interact:null, 
        exit:null,
        restart:"one"
    },
    thirteen:{
        name:"The Sacrifice",
        text:"The travellers take a break for the night and set up camp. In the middle of the night, you are woken up to the sounds of people...chanting? All you see is a flash of moonlight before you feel something sharp pierce your stomach. The last thing you remember is a warm, pooling sensation and the chanting growing louder. Did you want to *restart*?",
        north:null, 
        south:null,
        east: null, 
        west: null,
        enter:null, 
        pickUp:null, 
        use:null,    
        interact:null, 
        exit:null,
        restart:"one"
    }


}

export default locations; 