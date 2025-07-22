//Create 16x16 div table

function draw_table(nb_squares_per_side) {
    let container = document.getElementById("container")

    for (let index = 0; index < nb_squares_per_side; index++) {
        let container_div = document.createElement("div")

        for (let index = 0; index < nb_squares_per_side; index++) {
            let square = document.createElement("div")
            square.classList.add('square')

            square.addEventListener("mouseover", (event) => {square.classList.add("filled")})

            container_div.appendChild(square)
        }

        container.appendChild(container_div)
    }   
}

function getUserSquarePerSide() {
    let container = document.getElementById("container");
    if (container.children.length > 0) {
        container.innerHTML = "";
    }

    let square_per_side;
    while (true) {
        let input = prompt("Number of squares per side ? [min: 2 to max: 99]");
        square_per_side = parseInt(input, 10);
        if (!isNaN(square_per_side) && square_per_side >= 2 && square_per_side <= 99) {
            break;
        } else {
            alert("Please enter an integer between 2 and 99.");
        }
    }

    draw_table(square_per_side);
}


document.getElementById("btn-square-size").addEventListener('click',getUserSquarePerSide)