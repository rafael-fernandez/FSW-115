axios.get("http://api.bryanuniversity.edu/rafaelfernandez/list")
    .then(result => {
        result.data.forEach(function (e, i) {
            let paragraph = document.createElement("ol")
            let description = document.createElement("li")
            paragraph.textContent = result.data[i].name
            description.textContent = result.data[i].description


            paragraph.addEventListener('click', function () {
                paragraph.style.textDecoration = "line-through"
            })

            description.addEventListener('click', function () {
                description.style.textDecoration = "line-through"
            })


            document.body.appendChild(paragraph)
            document.body.appendChild(description)
        })
    })
    .catch(err => console.log(err))



let signature = document.querySelector("#signature");
signature.innerText = "FSW115 week4 Rafael Fernandez";
document.body.appendChild(signature);