let Ai_toggle = document.getElementById('Ai_toggle');
Ai_toggle.addEventListener("click", ()=> {
    window.scrollTo(0,document.body.scrollHeight);
})




 // google search----------------------------------
 let srchicon = document.getElementById('srchicon');
 srchicon.onclick = Search
 document.getElementById('srch').onsubmit = Search;
function Search() {
    window.location = 'https://www.google.com/search?q=' + document.getElementById('Search_value').value;
    return false;
}





