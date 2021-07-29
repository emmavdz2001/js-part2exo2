// Déclaration de la variable image.
var myImg = document.getElementById('myImg');
// Evènement clic sur l'image qui appelle la fonction sizeUp().
myImg.addEventListener('click', sizeUp);
// Déclaration de la fonction sizeUp() qui affiche une image agrandie.
function sizeUp() {

// Version numéro :
    myImg.style.width = '1200px';
// Version numéro deux :
    var widthImg = myImg.clientWidth;
    var heightImg = myImg.clientHeight;
// Si l'image est supérieur ou égale à 800 px alors...
    if (widthImg >= 800) {
// ... on affiche une alerte informant que l'on a atteint le niveau de zoom max.
        alert('Vous avez atteint le niveau zoom maximal.');
    }
// Sinon... 
    else {
// ...on modifie la largeur de 200px (à chaques clics) 
        myImg.style.width = widthImg + 200 + 'px';
// et la hauteur de 100px (à chaques clics)
        myImg.style.height = heightImg + 100 + 'px';
    }
}