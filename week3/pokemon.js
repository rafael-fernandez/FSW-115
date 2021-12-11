//XMLHttpRequest

//xhr.onreadystatechange
//xhr.readyState
//xhr.status
//xhr.send
// xhr.responseText


const xhr = new XMLHttpRequest()
        //method        //URL                   //Async = true or (synchronis = false)
xhr.open("GET", "https://pokeapi.co/api/v2/berry/", true) //change the  numbers to show different characters
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){    
let data = JSON.parse(xhr.responseText)
showData(data)
    } 
}

function showData(data){
    let pokeApiList = data.results
 console.log(pokeApiList)

    for (let i = 0; i < pokeApiList.length; i++) {
        let pokemon = document.createElement('div');
        pokemon.textContent = "Pokemon Character Name: " +  pokeApiList[i].name;
        document.body.appendChild(pokemon);


        const locator = document.createElement('p')
        locator.textContent = pokeApiList[i].name + " " + "url for the direct link is: " + " " + " " + pokeApiList[i].url;  document.body.appendChild(locator)

        }
    }


     
    


