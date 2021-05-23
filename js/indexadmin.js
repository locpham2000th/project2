$(document).ready(function(){
    // $('.test').waypoint(
    //     function(direction){
    //         if(direction == "down"){
    //             $('span').addClass("sticky");
    //         }
    //         else{
    //             $('span').removeClass('sticky');
    //         }
    //     },{
    //         offset: '600px'
    //     })

    $(".pram").scroll(function(){
        if($(this).scrollTop()>150){
            console.log("scroll");
            $(".test").css("background-color","red");
        }else{
            $(".test").css("background-color","white");
        }
    })
})