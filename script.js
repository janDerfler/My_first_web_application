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


$('#photo').attr('src', imagesData[currentPhoto].photo);    
$('#photo-title').text(imagesData[currentPhoto].title);
$('#photo-description').text(imagesData[currentPhoto].description);



$('#rightButton').click(() => {
    currentPhoto++;
    if (currentPhoto > imagesData.length-1) {
        currentPhoto = 0
    };
    $('#photo').attr('src', imagesData[currentPhoto].photo);    
    $('#photo-title').text(imagesData[currentPhoto].title);
    $('#photo-description').text(imagesData[currentPhoto].description);
})


$('#leftButton').click(() => {
    currentPhoto--;
    if (currentPhoto === -1) {
        currentPhoto = imagesData.length-1
    };
    $('#photo').attr('src', imagesData[currentPhoto].photo);    
    $('#photo-title').text(imagesData[currentPhoto].title);
    $('#photo-description').text(imagesData[currentPhoto].description);
})