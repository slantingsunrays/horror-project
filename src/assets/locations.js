let locations ={
    one:{
        name:'Jetty',
        text:"You're on jetty",
        north:"two", 
        south:"seven",
        east:null, 
        west:null,
        pickUp:"hammer",
        fight:null, 
        run:null,          
        enter:null, 
        exit:null
    },
   

    two:{
        name:'Shore',
        text:"You're on shore",
        north:"seven", 
        south:"one",
        east:"three", 
        west:"four",
        enter:null,
        pickUp:null, 
        tool:"hammer", 
        use:"You used the hammer to bash down the wall and got a glowing rock",  
        fight:null, 
        run:null, 
        exit:null
    },
    three:{
        name:'Shore 2',
        text:"You're on shore 2",
        north:null, 
        south:null,
        east:'five', 
        west:"two",
        enter:null, 
        exit:null
    },    
    four:{
        name:'Cliffs',
        text:"You're on cliffs",
        north: null, 
        south:null,
        east:"two", 
        west:null,
        enter:null, 
        exit:null
    },
    five:{
        name:'Look-out',
        text:"You're on look out",
        north:null, 
        south:null,
        east:null, 
        west:"three",
        enter:"six", 
        exit:null
    }, 
    six:{
        name:'Inside',
        text:"You're on inside",
        north:null, 
        south:null,
        east:null, 
        west:null,
        enter:null, 
        exit:"five"
    },
    seven:{
        name:'Path',
        text:"You're on path",
        north:null, 
        south:null,
        east:null, 
        west:null,
        enter:null, 
        exit:"five"
    },


}

export default locations; 