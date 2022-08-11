var n = 0;
var t = 0;

window.onresize = function () {
    var size = window.innerWidth;
    if (size > 767) {
        $('.side-nav').removeClass("show");
        $('.mobile-togg').removeClass("showing");
        $('.close-icon').hide();
        $('.ham-icon').show();
    } else if(size < 767) {

    }
}


$('.mobile-togg').click(()=>{
    $('.mobile-togg').toggleClass("showing");
    $('.side-nav').toggleClass("show");
    if ($('.side-nav').hasClass("show")) {
        $('.close-icon').show();
        $('.ham-icon').hide();
    } else {
        $('.side-nav').hasClass("show")
        $('.close-icon').hide();
        $('.ham-icon').show();
    }
});

$('.nav-link').click((event)=>{
    var crewSlider;
    var techSlider;
    clearInterval(crewSlider);
    clearInterval(techSlider);
    $('.nav-link').each((index, value)=>{
        value.classList.remove('active')
    })

    if (event.target.id == 3) {
        crewSlider = setInterval(()=>{
                if (n >= 0 && n < 3) {
                    n++;
                    // alert('dd')
                } else {
                    n = 0;
                }
                $('.indicate-link').each((index, value)=>{
                    value.classList.remove('white')
                })
            
                $('.crew-body').each((index, value)=>{
                    value.classList.remove('show')
                })
            
                $('.indicate-link')[n].classList.add('white');
            
                $('.crew-body')[n].classList.add('show');
                $('.crew-content').html(`<img src="./assets/crew/${n}.png" alt="" srcset="">`);
        
            }, 5000);
    } else if (event.target.id == 4) {
        techSlider = 
        setInterval(()=>{
            if (t >= 0 && t < 2) {
                t++;
                // alert('dd')
            } else {
                t = 0;
            }
            $('.tech-link').each((index, value)=>{
                value.classList.remove('ontech')
            })
        
            $('.tech-body').each((index, value)=>{
                value.classList.remove('show')
            })
        
            $('.tech-link')[t].classList.add('ontech');
        
            $('.tech-body')[t].classList.add('show');
            $('.tech-content').html(`<img src="./assets/technology/${t}.jpg" alt="" srcset="">`);
    
        }, 5000);
    }

    $('.page-body').each((index, value)=>{
        value.classList.remove('show')
    })
    event.target.classList.add('active');
    $('.page-body')[event.target.id - 1].classList.add('show');

    $('.main-page').attr('id', '');
    if (event.target.id == 2) {
        $('.main-page').attr("id", 'bg-destination')
    } else if(event.target.id == 3){
        $('.main-page').attr("id", 'bg-crew')
    }else if(event.target.id == 4){
        $('.main-page').attr("id", 'bg-technology')
    } else {
        $('.main-page').attr("id", 'bg-home')
    }
})

$('.mars-link').click((event)=>{
    $('.mars-link').each((index, value)=>{
        value.classList.remove('active')
    })

    $('.mars-body').each((index, value)=>{
        value.classList.remove('show')
    })

    event.target.classList.add('active');
    $('.mars-body')[event.target.id - 1].classList.add('show');
});
