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
text.replace(/idea/g, '<span class="idea">\1</span>' );
text.replace(/concept/g, '<span class="concept">\1</span>' );

//place text in target div
let wiki = document.getElementById('wiki');
wiki.innerHTML = text;

//animate in whole sections
//animate in color and selected text

//remove loading panel
document.getElementById('accessory').style.display = 'none';
})()