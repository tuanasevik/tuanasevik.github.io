// DictionaryAPI
// Tuana Sevik 2BHITM

function searchWord(word) {
        
    document.getElementById("result").innerHTML = "";

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange=function() {

        if (this.readyState == 4 && this.status == 200) {
            let dataString = this.responseText;
            let data = JSON.parse(dataString);
            console.log(data);

            document.getElementById("result").innerHTML +=
            // word itself
            `<h2>${data[0].word}</h2>` + 
            // audio file
            `<div class="flex" style="width: 28%;"><h1 id="audio">Pronunciation</h1><audio controls><source src="https:${data[0].phonetics[0].audio}" type="audio/mpeg"></audio></div><hr>`;

            //definition(s)
            if (data[0].meanings[0].definitions[0].definition) {
                let html_code = '';
                for (let i = 0; i < data[0].meanings[0].definitions.length; i++) {
                    if (i == 0) {
                        html_code += `<div><h3>Definition</h3><ol><li>${data[0].meanings[0].definitions[i].definition}</li>`;
                    } else if (i == data[0].meanings[0].definitions.length - 1) {
                        html_code += `<li>${data[0].meanings[0].definitions[i].definition}</li></ol></div>`;
                    } else {
                        html_code += `<li>${data[0].meanings[0].definitions[i].definition}</li>`;
                    }
                    
                }
                document.getElementById("result").innerHTML += html_code;
            }

            // example(s)
            if (data[0].meanings[0].definitions[0].example) {
                let html_code = '';
                for (let i = 0; i < data[0].meanings[0].definitions.length; i++) {
                    if (i == 0) {
                        html_code += `<hr><div><h3>Examples</h3><ol><li>${data[0].meanings[0].definitions[i].example}</li>`;
                    } else if (i == data[0].meanings[0].definitions.length - 1) {
                        html_code += `<li>${data[0].meanings[0].definitions[i].example}</li></ol></div>`;
                    } else {
                        html_code += `<li>${data[0].meanings[0].definitions[i].example}</li>`;
                    }
                    
                }
                document.getElementById("result").innerHTML += html_code;
            }
            
            // synonym(s)
            if (data[0].meanings[0].definitions[0].synonyms) {
                let html_code = '';
                for (let i = 0; i < data[0].meanings[0].definitions[0].synonyms.length; i++) {
                    if (i == 0) {
                        html_code += `<hr><h3>Synonym</h3><ul><li onclick="searchWord('${data[0].meanings[0].definitions[0].synonyms[i]}')">${data[0].meanings[0].definitions[0].synonyms[i]}</li>`;
                    } else if (i == data[0].meanings[0].definitions[0].synonyms.length - 1) {
                        html_code += `<li onclick="searchWord('${data[0].meanings[0].definitions[0].synonyms[i]}')">${data[0].meanings[0].definitions[0].synonyms[i]}</li></ul>`;
                    } else {
                        html_code += `<li onclick="searchWord('${data[0].meanings[0].definitions[0].synonyms[i]}')">${data[0].meanings[0].definitions[0].synonyms[i]}</li>`;
                    }   
                }
                document.getElementById("result").innerHTML += html_code;
            }
        }
    };

    // checks if word is in API and shows error if it isn't
    xhttp.onloadend = function() {
        if(xhttp.status == 404) {   
            console.log(xhttp.responseText);
            document.getElementById('result').innerHTML = `<h2>Invalid input!<br>Please try again.</h2>`;
        }
    }

    xhttp.open("GET", `https://api.dictionaryapi.dev/api/v2/entries/${document.getElementById('language').value}/${word}/`, true);
    xhttp.send();

}
