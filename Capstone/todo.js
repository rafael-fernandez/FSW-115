var myNameIs = []


axios.get("http://api.bryanuniversity.edu/rafaelfernandez/list/")
    .then(result => {
        result.data.forEach(function (event) {
            let tasks = event.name.split(" ")
            let itemsToDo = tasks.length - 1
         
            axios.get(`http://api.bryanuniversity.edu/new students/list/${tasks[itemsToDo]}`)
                .then( () => {
       
                })
                .catch(err => console.log(err))

            let toDoItems = document.createElement("h2")
            let toDoDescription = document.createElement("h3")
            let toDoCheckBx = document.createElement("input")
            let toDoSection = document.createElement("div")
            let toDoDeleteBtn = document.createElement("button")

            toDoItems.textContent = `title: ${event.name}`
            toDoDescription.textContent = `description: ${event.description}`
            toDoDeleteBtn.textContent = "delete"
            defineIt.setAttribute("class", "define")
            toDoCheckBx.setAttribute("type", "checkbox")
            toDoSection.setAttribute("class", "newTask")
            toDoDeleteBtn.setAttribute("class", "delete")
            
            
            

            document.body.appendChild(toDoSection)
            toDoSection.appendChild(toDoItems)
            toDoSection.appendChild(toDoDescription)
            toDoSection.appendChild(defineIt)
            toDoSection.appendChild(toDoCheckBx)
            toDoSection.appendChild(toDoDeleteBtn)

            myNameIs.push(event._id)
        })
    })
    .catch(err => console.log(err))

//new task button
document.querySelector("#container").addEventListener("submit", function (e) {
    e.preventDefault();
    axios.post("http://api.bryanuniversity.edu/rafaelfernandez/list/", {
        name: document.querySelector("#title").value,
        description: document.querySelector("#description").value,
        isComplete: false
    })
        .then(result => {
            let labor = result.data.name.split(" ")
            var itemsToDo = labor.length - 1
            var defineIt = document.createElement("p")
            axios.get(`http://api.bryanuniversity.edu/new students/list/${labor[itemsToDo]}`)
                .then(() => {

                })
                .catch(err => console.log(err))

            let toDos = document.createElement("h2")
            let toDoDescription = document.createElement("h3")
            let toDoCheckBx = document.createElement("input")
            let toDoSection = document.createElement("div")
            let toDoDeleteBtn = document.createElement("button")
            toDos.textContent = `title: ${result.data.name}`
            toDoDescription.textContent = `description: ${result.data.description}`
            toDoDeleteBtn.textContent = "delete"
            toDoCheckBx.setAttribute("type", "checkbox")
            toDoSection.setAttribute("class", "newTask")
            toDoDeleteBtn.setAttribute("class", "delete")

            document.body.appendChild(toDoSection)
            toDoSection.appendChild(toDos)
            toDoSection.appendChild(toDoDescription)
            toDoSection.appendChild(defineIt)
            toDoSection.appendChild(toDoCheckBx)
            toDoSection.appendChild(toDoDeleteBtn)

            myNameIs.push(result.data._id)
        })
        .catch(err => console.log(err))
    document.querySelector("#title").value = ""
    document.querySelector("#description").value = ""
})

//checkoff completed tasks
document.addEventListener("mouseover", function () {
    var checkBox = document.querySelectorAll("input[type=checkbox]")
    checkBox.forEach(function (e, i) {
        e.addEventListener("change", function () {
            if (e.checked === true) {
                e.parentElement.setAttribute("style", "text-decoration: line-through")
                axios.put(`http://api.bryanuniversity.edu/rafaelfernandez/list/${myNameIs[i]}`, {
                    isComplete: true
                })
                    .catch(err => console.log(err))
            }
            else {
                e.parentElement.setAttribute("style", "text-decoration: none")
                axios.put(`http://api.bryanuniversity.edu/rafaelfernandez/list/${myNameIs[i]}`, {
                    isComplete: false
                })
                    .catch(err => console.log(err))
            }
        })
    })
})

//remove task
document.addEventListener("mouseover", function () {
    var myDelete = document.querySelectorAll(".delete")
    myDelete.forEach(function (e, i) {
        e.addEventListener("click", function () {
            axios.delete(`http://api.bryanuniversity.edu/rafaelfernandez/list/${myNameIs[i]}`)
                .catch(err => console.log(err))
            e.parentElement.remove()
        })
    })
})

let signature = document.querySelector("#signature");
signature.innerText = "FSW115 Capstone Project: Build a Todo List by Rafael Fernandez";
document.body.appendChild(signature);