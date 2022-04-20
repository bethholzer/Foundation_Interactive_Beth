// BLOTTER

let blotterGallery = document.querySelector('div.blotter-gallery');

const emptyImages = document.querySelectorAll('img'); // doesn't necessarily have to be empty

const images = ['assets/SF/blotter/blotter-1.png', 
                'assets/SF/blotter/blotter-2.png', 
                'assets/SF/blotter/blotter-3.png', 
                'assets/SF/blotter/blotter-4.png', 
                'assets/SF/blotter/blotter-5.png', 
                'assets/SF/blotter/blotter-6.png', 
                'assets/SF/blotter/blotter-7.png', ];

var i=0;

function populateImages(){
    for(const image of emptyImages){
        image.setAttribute('src', 'idk/'+images[i]);
        i++;
    }

    if (i > 6){ i =0;}  // this number can change depending on how many images you have available
}

blotterGallery.addEventListener('click',populateImages);

// EARTH

console.log(emptyImages);

let earthGallery = document.querySelector('div.earth-gallery');

const emptyImages = document.querySelectorAll('img'); // doesn't necessarily have to be empty

const images = ['assets/SF/whole-earth/WE-1.jpg', 
                'assets/SF/whole-earth/WE-2.jpg', 
                'assets/SF/whole-earth/WE-3.jpg', 
                'assets/SF/whole-earth/WE-4.jpg', 
 ];

var i=0;

function populateImages(){
    for(const image of emptyImages){
        image.setAttribute('src', 'idk/'+images[i]);
        i++;
    }

    if (i > 3){ i =0;}  // this number can change depending on how many images you have available
}

earthGallery.addEventListener('click',populateImages);

console.log(emptyImages);