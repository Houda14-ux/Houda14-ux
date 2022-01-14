function loadDoc() {
    let nom = document.getElementById('nom').value;
    //nom = mozart
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        afficher( this.responseText );
      }
    xhttp.open("GET", "https://www.theaudiodb.com/api/v1/json/2/search.php?s=" + nom, true);
    xhttp.send();
    
}

function afficher(text){
    let jsontxt = JSON.parse(text);
    let json = jsontxt.artists;
    
    let table = document.getElementById('table');
    table.innerHTML = '';
    let str = "";
    for( let i = 0; i < json.length ; i++ ){
        str +="<tr>";
        str += "<td>"+ json[i].strArtist +"</td>";
        str += "<td>"+ json[i].intBornYear +"</td>";
        str += "<td>"+ json[i].intDiedYear +"</td>";
        str += "<td>"+ json[i].strGenre +"</td>";
        str += "<td>"+ json[i].strFacebook +"</td>";
        str += "<td>"+ json[i].strWebsite +"</td>";
        // str += "<td>"+ json[i].strFacebook +"</td>";
        // str += "<td>"+ json[i].strFacebook +"</td>";

        
        str += "</tr>";
    }
    table.innerHTML = str;
}
