

const collectInfo = () => {
    axios
        .get("http://api.bryanuniversity.edu/rafaelfernandez/list/")
        .then((res) => {
            displayInfo(res.data);
        })

        .catch((error) => console.error(error));
};
collectInfo();

const displayInfo = (items) => {
    console.log(items);
    
    let container = document.getElementById("boxContainer");
    items.forEach((info) => {
        let indexCard = document.createElement("div");
        let nameElement = document.createElement("h2");
        nameElement.textContent = info.title;
        indexCard.appendChild(nameElement);

        let descriptionElement = document.createElement("p");
        descriptionElement.textContent = info.description;
        indexCard.appendChild(descriptionElement);

        let priceElement = document.createElement("p");
        priceElement.textContent = info.price;
        indexCard.appendChild(priceElement);


        indexCard.addEventListener('click', function () {
            indexCard.style.textDecoration = "line-through"
        })

        indexCard.addEventListener('dblclick', function () {
            indexCard.style.textDecoration = "none"
        })
       
        /* remove items */
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.value = info._id;

        deleteButton.addEventListener("click", deleteItem);
        indexCard.appendChild(deleteButton);

        /* Update Status */
        let updateButton = document.createElement("button");
        console.log(info.completed);
        let updateText = " ";
        if (info.completed === false) {
            updateText = " Update Complete";
        } else {
            updateText = " Update Incomplete";
        }
        updateButton.textContent = updateText;
        updateButton.id = info._id;
        updateButton.value = info.completed;
        updateButton.addEventListener("click", updateItem);
        indexCard.appendChild(updateButton);

        container.appendChild(indexCard);
    });
};

const addItem = (event) => {
    event.preventDefault();
    console.log("POST");

    let infoTitle = document.getElementById("infoTitle").value;
    let infoDescription = document.getElementById("infoDescription").value;
    let infoPrice = document.getElementById("infoPrice").value;
    let infoCompleted = document.getElementById("infoCompleted").checked;

    let data = {
        title: infoTitle,
        description: infoDescription,
        price: infoPrice,
        completed: infoCompleted,
    };

    axios
        .post("http://api.bryanuniversity.edu/rafaelfernandez/list/", data)
        .then((res) => {
            location.reload();
        })

        .catch((error) => console.error(error));
};

let form = document.getElementById("infoForm");
form.addEventListener("submit", addItem);

const deleteItem = (event) => {
    let itemId = event.target.value;

    axios
        .delete(`http://api.bryanuniversity.edu/rafaelfernandez/list/${itemId}`)
        .then((res) => {
            location.reload();
        })

        .catch((error) => console.error(error));
};

const updateItem = (event) => {
    console.log("ran Updates");
    let itemId = event.target.value;
    let itemCompleted = event.target.value;

    let completed = null;

    itemCompleted = "false" ? (completed = true) : (completed = false);

  
    axios
        .put(`http://api.bryanuniversity.edu/rafaelfernandez/list/${itemId}`)
        .then((res) => {
            location.reload();
        })

        .catch((error) => console.error(error));
};


let signature = document.querySelector("#signature");
signature.innerText = "FSW115 week5 Rafael Fernandez";
document.body.appendChild(signature);
