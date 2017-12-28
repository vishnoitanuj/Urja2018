function change_background( new_image_source ) {

    var myimage =document.getElementById('body');

    myimage.attr( 'src', new_image_source );

    setTimeout( function () {

        change_background( 'new image source here' );

    }, 10000);

}

