/*

*/

let container = document.getElementById("container")

for (let index = 0; index < 16; index++) {
    let container_div = document.createElement("div")

    for (let index = 0; index < 16; index++) {
        let square = document.createElement("div")
        square.classList.add('square')
        container_div.appendChild(square)
    }

    container.appendChild(container_div)

    
}
