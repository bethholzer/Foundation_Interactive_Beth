

const images = ['people-1.png', 
                'people-2.png', 
                'people-3.png', 
                'people-4.png', 
                'people-5.png', 
                'people-6.png', 
                'people-7.png', ,];


var i = 0;

/*People Gallery*/

let peopleGallery = document.querySelector('div.people-gallery');

let peoplemages = document.querySelector('img.people');


function populatePeopleImages(){
    peoplemages.setAttribute('src', 'assets/NYC/people/'+images[i]);
    i++;
    if(i > 6){ i = 0;}
}

peopleGallery.addEventListener('click', populatePeopleImages);


/*Flyer gallery*/

var j = 0;

const hamburger = ['cbgb-1.png', 
                'cbgb-2.png', 
                'cbgb-3.png',  
                'cbgb-4.png', 
                'cbgb-5.png', 
                'cbgb-6.png', 
];

let cbgbGallery = document.querySelector('div.cbgb-gallery');

let cbgbImages = document.querySelector('img.cbgb'); 

function populateCbgbImages(){
        cbgbImages.setAttribute('src', 'assets/NYC/cbgb/'+hamburger[j]);
        j++;
        if(j > 5){ j = 0;}
}

cbgbGallery.addEventListener('click', populateCbgbImages);

/*Record gallery*/

var k = 0;

const fries = ['cover-1.png', 
                'cover-2.png', 
                'cover-3.png',   
                'cover-4.png', 
                'cover-6.png', 
                'cover-7.png', 
                'cover-8.png',   ];

let recordGallery = document.querySelector('div.record-gallery');

let recordImages = document.querySelector('img.record'); 

function populateRecordImages(){
        recordImages.setAttribute('src', 'assets/NYC/records/'+fries[k]);
        k++;
        if(k > 6){ k = 0;}
}

recordGallery.addEventListener('click', populateRecordImages);

/*Arch gallery*/

var m = 0;

const soda = ['arch-1.png', 
                'arch-2.png', 
                'arch-3.png',  
                'arch-4.png', 
                'arch-5.png', 
                'arch-6.png', 
                'arch-7.png', ];

let archGallery = document.querySelector('div.arch-gallery');

let archImages = document.querySelector('img.arch'); 

function populateArchImages(){
        archImages.setAttribute('src', 'assets/NYC/arch/'+soda[m]);
        m++;
        if(m > 6){ m = 0;}
}

archGallery.addEventListener('click', populateArchImages);

/*Spinner*/

window.onscroll = function(){
    scrollRotate();
}

function scrollRotate(){
    let recordSpin = document.getElementById('recordSpin');
    recordSpin.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";

    let recordSpin4 = document.getElementById('recordSpin4');
    recordSpin4.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";

    let recordSpin2 = document.getElementById('recordSpin2');
    recordSpin2.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";

    let recordSpin3 = document.getElementById('recordSpin3');
    recordSpin3.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";



}



