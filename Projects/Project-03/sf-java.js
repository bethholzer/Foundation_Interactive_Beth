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

const hamburger = ['WE-1.jpg', 
                'WE-2.jpg', 
                'WE-3.jpg', 
                'WE-4.jpg', ];

let earthGallery = document.querySelector('div.earth-gallery');

let earthImages = document.querySelector('img.earth'); 

function populateEarthImages(){
        earthImages.setAttribute('src', 'assets/SF/whole-earth/'+hamburger[i]);
        i++;
        if(i > 3){ i = 0;}
}

earthGallery.addEventListener('click', populateEarthImages);