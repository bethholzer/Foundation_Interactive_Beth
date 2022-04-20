let blotterGallery = document.querySelector('div.blotter-gallery');

const emptyImages = document.querySelectorAll('img'); // doesn't necessarily have to be empty

const images = ['blotter-1.png', 
                'blotter-2.png', 
                'blotter-3.png', 
                'blotter-4.png', 
                'blotter-5.png', 
                'blotter-6.png', 
                'blotter-7.png', ];

var i=0;

function populateImages(){
    for(const image of emptyImages){
        image.setAttribute('src', 'images/'+images[i]);
        i++;
    }

    if (i > 6){ i =0;}  // this number can change depending on how many images you have available
}

blotterGallery.addEventListener('click',populateImages);

console.log(emptyImages);