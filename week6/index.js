const week6Project = async () => {

    const character = await axios.get('https://rickandmortyapi.com/api/character')
    const episodes = await axios.get('https://rickandmortyapi.com/api/episode')
    const episodes2 = await axios.get(episodes.data.info.next)
    const episodes3 = await axios.get(episodes2.data.info.next)
    const results = character.data.results

    var episodesInfo = episodes.data.results.concat(episodes2.data.results, episodes3.data.results)

    characterInformation(results, episodesInfo)
}




const characterInformation = (personality, episode) => {
    for (let i = 0; i < personality.length; i++) {
        const characterName = document.createElement('h1')
        characterName.textContent = 'Character: ' + personality[i].name
        document.body.appendChild(characterName)


        var orderedList = document.createElement('ol')
        document.body.appendChild(orderedList)

        const listInfo = document.createElement('li')
        listInfo.textContent = 'Appeared in these episodes: '
        listInfo.style.fontSize = '18px'
        listInfo.style.listStyleType = 'none';
        orderedList.appendChild(listInfo)

        for (let x = 0; x < personality[i].episode.length; x++) {

            for (let y = 0; y < episode.length; y++) {

                if (personality[i].episode[x]) {
                    var showsIn = Number(personality[i].episode[x].split('/')[5])

                    if (showsIn === episode[y].id) {
                        const li = document.createElement('li')
                        li.textContent = episode[y].name
                        orderedList.appendChild(li)
                    }
                }
            }
        }
    }
}

week6Project()

let signature = document.querySelector("#signature");
signature.innerText = "FSW115 Week 6 Project 3: Create a Single Page Web Application  Rafael Fernandez";
document.body.appendChild(signature);