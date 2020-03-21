(function(){

//download wikipedia page
let request = new XMLHttpRequest();
var text;
request.addEventListener('load', (response) => {
    text = response.text;
});
request.open('get', './api.php');
request.send();

//search and replace words with spans
text.replace(/test/g, '<span class="">\1</span>' );
//animate in whole sections
//animate in color and selected text

//remove loading panel
document.getElementById('accessory').style.display = 'none';
})()