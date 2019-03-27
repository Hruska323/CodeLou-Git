



 /*---------highlight imgs-------*/   
//On Hover
   $('.gallary img').mouseover(function() {
        $(this).addClass('hover');
   });

   //On hover off
   $('.gallary img').mouseout(function() {
        $(this).removeClass('hover');
   });




  
/*-----------*/

// /*----countdown clock-------*/copied js tempalte from W3 schools       
        var deadline = new Date("may 4, 2019 17:37:25").getTime(); 
        
        var x = setInterval(function() { 
        
        var now = new Date().getTime(); 
        
        var t = deadline - now; 
            var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
            var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
            var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
            var seconds = Math.floor((t % (1000 * 60)) / 1000); 
        
            document.getElementById("day").innerHTML =days ; 
        
            document.getElementById("hour").innerHTML =hours; 
        
            document.getElementById("minute").innerHTML = minutes;  
        
            document.getElementById("second").innerHTML =seconds;  
        
        
        if (t < 0) { 
                clearInterval(x); 
                
                    document.getElementById("derbyclock").innerHTML = "HAPPY DERBY!!!!"; 
                    
                    document.getElementById("day").innerHTML ='0'; 
                    
                    document.getElementById("hour").innerHTML ='0'; 
                    
                    document.getElementById("minute").innerHTML ='0' ;  
                    
                    document.getElementById("second").innerHTML = '0'; } 
        }, 1000); 

/*----countdown clock-------*/