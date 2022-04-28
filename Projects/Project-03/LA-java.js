

const images = ['punx-1.png', 
                'punx-3.png', 
                'punx-4.png', 
                'punx-5.png', 
                'punx-7.png',
                'punx-8.png',
                'punx-9.png',];


var i = 0;

/*Scream Gallery*/

let screamGallery = document.querySelector('div.scream-gallery');

let screamImages = document.querySelector('img.scream');


function populateScreamImages(){
    screamImages.setAttribute('src', 'assets/LA/punx/'+images[i]);
    i++;
    if(i > 6){ i = 0;}
}

screamGallery.addEventListener('click', populateScreamImages);


/*Flyer gallery*/

var j = 0;

const hamburger = ['flyer-1.png', 
                'flyer-2.png', 
                'flyer-3.png', 
                'flyer-4.png',
                'flyer-5.png',
                'flyer-6.png',
                'flyer-7.png',
                'flyer-8.png', 
                'flyer-9.png',];

let flyerGallery = document.querySelector('div.flyer-gallery');

let flyerImages = document.querySelector('img.flyer'); 

function populateFlyerImages(){
        flyerImages.setAttribute('src', 'assets/LA/flyers/'+hamburger[j]);
        j++;
        if(j > 8){ j = 0;}
}

flyerGallery.addEventListener('click', populateFlyerImages);

/*Slash gallery*/

var k = 0;

const fries = ['slash-1.png', 
                'slash-2.png', 
                'slash-3.png',   
                'slash-4.png', 
                'slash-5.png', 
                'slash-6.png', 
                'slash-7.png', 
                'slash-8.png', 
                'slash-9.png',    ];

let slashGallery = document.querySelector('div.slash-gallery');

let slashImages = document.querySelector('img.slash'); 

function populateSlashImages(){
        slashImages.setAttribute('src', 'assets/LA/slash/'+fries[k]);
        k++;
        if(k > 8){ k = 0;}
}

slashGallery.addEventListener('click', populateSlashImages);

/*Decline gallery*/

var m = 0;

const soda = ['decline-1.png', 
                'decline-2.png', 
                'decline-3.png',  
                'decline-4.png', 
                'decline-5.png', 
                'decline-6.png', 
                'decline-7.png',  ];

let declineGallery = document.querySelector('div.decline-gallery');

let declineImages = document.querySelector('img.decline'); 

function populateDeclineImages(){
        declineImages.setAttribute('src', 'assets/LA/decline/'+soda[m]);
        m++;
        if(m > 6){ m = 0;}
}

declineGallery.addEventListener('click', populateDeclineImages);

/*Spinner*/

window.onscroll = function(){
    scrollRotate();
}

function scrollRotate(){
    let chainBlack = document.getElementById('chainBlack');
    chainBlack.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";

    let wireRed = document.getElementById('wireRed');
    wireRed.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";

    let wireBlack = document.getElementById('wireBlack');
    wireBlack.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";

    let chainRed = document.getElementById('chainRed');
    chainRed.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";

}



