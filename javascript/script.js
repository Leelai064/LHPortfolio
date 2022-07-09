//Type.js descriptions
var typed = new Typed("#typed",{
    strings:[
        'Full Stack Developer',
        'Mechanical Engineer',
        'CAD Designer'
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});

//Scrollable Landing Banner

$(document).ready(function(){
    $(window).scroll(function(){
        console.log($(window).scrollTop())
        if($(window),scrollTop()>280){
            $('#navBar').addClass('fixedNavbar');
        }
        if($(window),scrollTop()>280){
            $('#navBar').removeClass('fixedNavbar');
        }
    });
});