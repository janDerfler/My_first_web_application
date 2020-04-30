let image1 = {
    photo: 'gallery/barveny_kremen_1.jpeg',
    title: 'Barvený křemen',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua',
}

let image2 = {
    photo: 'gallery/kombinovany_VI_1.jpeg',
    title: 'Kombinovaný',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua',
}

let image3 = {
    photo: 'gallery/ryolit_1.jpeg',
    title: 'Ryolit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua',
}

let currentPhoto = 0;
let imagesData = [image1, image2, image3];
let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
    $('.border-wrap[data-index=' + photoNumber + ']').css({"top": "-2px", "box-shadow": "0px 9px 8px -5px rgb(0, 0, 0)"});
  }

loadPhoto(currentPhoto);

$('#rightButton').click(() => {
    currentPhoto++;
    if (currentPhoto > imagesData.length-1) {
        currentPhoto = 0
    };
    loadPhoto(currentPhoto);
})


$('#leftButton').click(() => {
    currentPhoto--;
    if (currentPhoto === -1) {
        currentPhoto = imagesData.length-1
    };
    loadPhoto(currentPhoto);
})


/*Thumbnails*/
imagesData.forEach((image, index) => {
    $('#thumbnails-container').append('<div class="border-wrap" data-index=' + index + '><div class="thumbnail"><img src=' + image.photo + '></div></div>');
    $('.border-wrap').click(function() {
    let indexClicked = $(this).attr('data-index');
    console.log(indexClicked);
    // indexClicked is now a string! if you need it as a number you have to change it
    // because for example "1" + 1 is going to be "11" and not 2
    let numberIndex = parseInt(indexClicked);
    // now numberIndex is a number
    console.log(indexClicked);
    loadPhoto(numberIndex);
  });
})

