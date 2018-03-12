$( document ).ready( function () {
    
    $("#planets dt").click( function (e) {
        
        console.log($(this).next().html() );
        
        //if no 2nd arguments, will grab it
        if ( $(this).next().css("display") == "none") {
            //^change from planets dd
            $(this).next().css("display", "block");
        
        } else {
        
            $("#planets dd").css("display", "none");
            
        }
            
    
                           
    });
    
});
    

                    
