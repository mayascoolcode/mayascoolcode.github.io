
// _____  ____________________.___________    _______    _________
// /  _  \ \_   ___ \__    ___/|   \_____  \   \      \  /   _____/
// /  /_\  \/    \  \/ |    |   |   |/   |   \  /   |   \ \_____  \ 
// /    |    \     \____|    |   |   /    |    \/    |    \/        \
// \____|__  /\______  /|____|   |___\_______  /\____|__  /_______  /
//       \/        \/                      \/         \/        \/ 

// -------------- GALLERY :::
 function switchGALLERY(g) {
    
    var gallery = document.getElementById(g);
    var photos = document.getElementById('photosectionGallery');
    var videos = document.getElementById('videosectionGallery');
    
    if (gallery.style.display == 'none') {
        if (g == 'photosectionGallery') {
            gallery.style.display = 'block';
            videos.style.display = 'none';
        }
        if (g == 'videosectionGallery') {
            gallery.style.display = 'block';
            photos.style.display = 'none';
        }   
    }
    else {
        gallery.style.display = 'none';
    };
}

// -------------- COLLECTION :::
function showCOLLECTION(c, b) {
    
    var collection = document.getElementById(c);

    if (b.checked) {
        collection.style.display = 'block';
    } 
    else {
        collection.style.display = 'none';
    }
}


