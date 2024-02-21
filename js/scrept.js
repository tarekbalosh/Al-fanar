




   




window.onscroll = function () {
    if(window.scrollY > 60 )
    {
        $(".d-btn .btn").css({
        
            "right" : "20px",           
            "transition" : ".3s",
 
        })
      
     }
     else 
    {
    
        $(".d-btn .btn").css({      
            "right" : "-50px",
            "transition" : ".3s",
 
        })
      
    }
    if (window.scrollY > 650) {
        $(".line1").css({
            "animation": "rightphoto 1s ease-in-out"
        }),
            $(".line2").css({
                "animation": "left 1s ease-in-out"
            })
    }

    if (window.innerWidth > 767) {



        if (window.scrollY > 700) {
            $(".images .img1").fadeIn(1000)
            $(".images .img4").fadeIn(1000)
            $(".images .img3").fadeIn(1000)
        }

    }

}


$(".icon").click(function () {
    $(".one , .two , .three , .four , .five , .sex , .seven").fadeOut();
})





$(".d-btn .btn").click(function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

function one(p1, p2, p3) {
    if (window.innerWidth > 766) {

        $(p1).fadeIn();
        $(p2, p3, p4).fadeOut();
        $(p1).animate(
            {
                position: 'absolute',
                top: '1500px',
            }, 1000
        );


    }
    else {
        $(p1).fadeIn();


        $(".one").animate(
            {
                position: 'absolute',
                top: '1500px',
            }, 1000
        );

        $(".two").animate(
            {
                position: 'absolute',
                top: '2000px',
            }, 1000
        );
        $(".three").animate(
            {
                position: 'absolute',
                top: '2500px',
            }, 1000
        );
    }
}
function artical(p4, p5, p6, p7) {
    if (window.innerWidth > 766) {

        $(p4).fadeIn();
        $(p5, p6, p7).fadeOut();
        $(p4).animate(
            {
                position: 'absolute',
                top: '2300px',
            }, 1000
        );

    }
    else {
        $(p4).fadeIn();


        $(".four").animate(
            {
                position: 'absolute',
                top: '5000px',
            }, 1000
        );

        $(".five").animate(
            {
                position: 'absolute',
                top: '5200',
            }, 1000
        );
        $(".sex").animate(
            {
                position: 'absolute',
                top: '5400',
            }, 1000
        );
        $(".seven").animate(
            {
                position: 'absolute',
                top: '5600',
            }, 1000
        );
    }
}
