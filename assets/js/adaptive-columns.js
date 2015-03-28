
/* Adaptive Columns
================================================================ */

$(document).ready(function() {

//-----------------------------------------------------------------
// 2 columns
//-----------------------------------------------------------------

var twoCols = $('.2-cols');

twoCols.owlCarousel({
    items: 1,
    loop: false,
    dots: false,
    nav: true,
    navText: [],
    margin: 31,
    slideBy: 1,
    mouseDrag: false,
    responsive:{
        460 :{                
            items: 2
        }
    }
});

//-----------------------------------------------------------------
// 3 columns
//-----------------------------------------------------------------

var threeCols = $('.3-cols');

threeCols.owlCarousel({
    items: 1,
    loop: false,
    dots: false,
    nav: true,
    navText: [],
    margin: 31,
    slideBy: 1,
    mouseDrag: false,
    responsive:{
        460 :{                
            items: 2
        },
        720 :{                
            items: 3
        }
    }
});

//-----------------------------------------------------------------
// 4 Columns
//-----------------------------------------------------------------

var fourCols = $('.4-cols');

fourCols.owlCarousel({
    items: 1,
    loop: false,
    dots: false,
    nav: true,
    navText: [],
    margin: 31,
    slideBy: 1,
    mouseDrag: false,
    responsive:{
        460 :{                
            items: 2
        },
        720 :{                
            items: 3
        },
        940 :{                
            items: 4
        }
    }
});

//-----------------------------------------------------------------
// 5 Columns
//-----------------------------------------------------------------

var fiveCols = $('.5-cols');

fiveCols.owlCarousel({
    items: 1,
    loop: false,
    dots: false,
    nav: true,
    navText: [],
    margin: 31,
    slideBy: 1,
    mouseDrag: false,
    responsive:{
        460 :{                
            items: 2
        },
        720 :{                
            items: 3
        },
        940 :{                
            items: 5
        }
    }
});

//-----------------------------------------------------------------
// 12 Columns
//-----------------------------------------------------------------

var twelveCols = $('.12-cols');

twelveCols.owlCarousel({
    items: 1,
    loop: false,
    dots: false,
    nav: true,
    navText: [],
    margin: 31,
    slideBy: 1,
    mouseDrag: false,
    responsive:{
        460 :{                
            items: 3
        },
        720 :{                
            items: 6
        },
        940 :{                
            items: 12
        }
    }
});

}); // End document.ready