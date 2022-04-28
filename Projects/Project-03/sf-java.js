/* Stuff for both galleries*/

const images = ['blotter-1.png', 
                'blotter-2.png', 
                'blotter-3.png', 
                'blotter-4.png', 
                'blotter-5.png', 
                'blotter-6.png', 
                'blotter-7.png',];

//just need image name, not the path, which is defined in setAttribute
// you can create another array for different images

var i = 0;

/*Blotter Gallery*/

let blotterGallery = document.querySelector('div.blotter-gallery');

let blotterImages = document.querySelector('img.blotter');


function populateBlotterImages(){
    blotterImages.setAttribute('src', 'assets/SF/blotter/'+images[i]);
    i++;
    if(i > 6){ i = 0;}
}

blotterGallery.addEventListener('click', populateBlotterImages);


/*Earth gallery*/

var j = 0;

const hamburger = ['WE-1.png', 
                'WE-2.png', 
                'WE-3.png', 
                'WE-4.png', ];

let earthGallery = document.querySelector('div.earth-gallery');

let earthImages = document.querySelector('img.earth'); 

function populateEarthImages(){
        earthImages.setAttribute('src', 'assets/SF/whole-earth/'+hamburger[j]);
        j++;
        if(j > 3){ j = 0;}
}

earthGallery.addEventListener('click', populateEarthImages);

/*Poster gallery*/

var k = 0;

const fries = ['poster-1.png', 
                'poster-2.png', 
                'poster-3.png', 
                'poster-4.png',
                'poster-5.png',
                'poster-6.png',
                'poster-7.png', ];

let posterGallery = document.querySelector('div.poster-gallery');

let posterImages = document.querySelector('img.poster'); 

function populatePosterImages(){
        posterImages.setAttribute('src', 'assets/SF/poster/'+fries[k]);
        k++;
        if(k > 6){ k = 0;}
}

posterGallery.addEventListener('click', populatePosterImages);

/*Cult gallery*/

var m = 0;

const soda = ['cult-1.png', 
                'cult-2.png', 
                'cult-3.png', 
                'cult-4.png',
                'cult-5.png',
                'cult-6.png', ];

let cultGallery = document.querySelector('div.cult-gallery');

let cultImages = document.querySelector('img.cult'); 

function populateCultImages(){
        cultImages.setAttribute('src', 'assets/SF/cult/'+soda[m]);
        m++;
        if(m > 5){ m = 0;}
}

cultGallery.addEventListener('click', populateCultImages);

/*Spinner*/

window.onscroll = function(){
    scrollRotate();
}

function scrollRotate(){
    let blueSpin = document.getElementById('blueSpin');
    blueSpin.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";

    let purpleSpin = document.getElementById('purpleSpin');
    purpleSpin.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";

    let lightSpin = document.getElementById('lightSpin');
    lightSpin.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";

}



