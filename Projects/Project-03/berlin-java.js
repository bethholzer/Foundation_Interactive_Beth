/* Stuff for both galleries*/

const images = ['ravers-1.jpg', 
                'ravers-2.jpg', 
                'ravers-3.jpg', 
                'ravers-4.jpg', 
                'ravers-5.jpg', 
                'ravers-6.jpg', 
                'ravers-7.jpg',
                'ravers-8.jpg',
                'ravers-9.jpg',
                'ravers-10.jpg',];

//just need image name, not the path, which is defined in setAttribute
// you can create another array for different images

var i = 0;

/*Raver Gallery*/

let raverGallery = document.querySelector('div.raver-gallery');

let raverImages = document.querySelector('img.raver');


function populateRaverImages(){
    raverImages.setAttribute('src', 'assets/BERLIN/ravers/'+images[i]);
    i++;
    if(i > 6){ i = 0;}
}

raverGallery.addEventListener('click', populateRaverImages);


/*Flyer gallery*/

var j = 0;

const hamburger = ['flyer-1.png', 
                'flyer-2.png', 
                'flyer-3.png', 
                'flyer-4.png',
                'flyer-5.png',
                'flyer-6.png',
                'flyer-7.png',
                'flyer-8.png', ];

let flyerGallery = document.querySelector('div.flyer-gallery');

let flyerImages = document.querySelector('img.flyer'); 

function populateFlyerImages(){
        flyerImages.setAttribute('src', 'assets/BERLIN/flyers/'+hamburger[j]);
        j++;
        if(j > 7){ j = 0;}
}

flyerGallery.addEventListener('click', populateFlyerImages);

/*Frontpage gallery*/

var k = 0;

const fries = ['frontpage-1.png', 
                'frontpage-2.png', 
                'frontpage-3.png', 
                'frontpage-4.png',
                'frontpage-5.png',
                'frontpage-6.png',
                'frontpage-7.png', ];

let frontpageGallery = document.querySelector('div.frontpage-gallery');

let frontpageImages = document.querySelector('img.frontpage'); 

function populateFrontpageImages(){
        frontpageImages.setAttribute('src', 'assets/BERLIN/frontpage/'+fries[k]);
        k++;
        if(k > 6){ k = 0;}
}

frontpageGallery.addEventListener('click', populateFrontpageImages);

/*Love gallery*/

var m = 0;

const soda = ['love-parade-1.png', 
                'love-parade-2.png', 
                'love-parade-3.png', 
                'love-parade-4.png',
                'love-parade-5.png',
                'love-parade-6.png',
                'love-parade-7.png', ];

let loveGallery = document.querySelector('div.love-gallery');

let loveImages = document.querySelector('img.love'); 

function populateLoveImages(){
        loveImages.setAttribute('src', 'assets/BERLIN/loveparade/'+soda[m]);
        m++;
        if(m > 6){ m = 0;}
}

loveGallery.addEventListener('click', populateLoveImages);

/*Spinner*/

window.onscroll = function(){
    scrollRotate();
}

function scrollRotate(){
    let greenSpin = document.getElementById('greenSpin');
    greenSpin.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";

    let orangeSpin = document.getElementById('orangeSpin');
    orangeSpin.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";

    let pinkSpin = document.getElementById('pinkSpin');
    pinkSpin.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";

    let yellowSpin = document.getElementById('yellowSpin');
    yellowSpin.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";

}



