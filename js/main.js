(function(){

//download wikipedia page
let request = new XMLHttpRequest();
var text;
request.addEventListener('load', (response) => {
    if(response.currentTarget.status == 200){
        text = JSON.parse(response.currentTarget.responseText);
    }
    console.log(text);

//search and replace words with spans
text.replace(/idea/g, '<span class="idea">\1</span>' );
text.replace(/concept/g, '<span class="concept">\1</span>' );

//place text in target div
let wiki = document.getElementById('wiki');
wiki.innerHTML = text;

//remove loading panel
    document.getElementById('accessory').style.display = 'none';
//animate in whole sections
//animate in color and selected text
});
request.open('get', 'api.php');
request.send();

})()