let range = document.querySelector('input[type="range"]')
let canvas = document.querySelector("#canvas")


const border_size = 2
const canvas_size = [72-border_size,80-border_size]

generateGrid(2);

function generateRandomColor(node){
    let val = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    node.style.backgroundColor = val
    return val;
}

function generateGrid(size){
    let element;
    let node;

    for (i = 0; i < size; i++){
        element = document.createElement("div")
        element.style.backgroundColor = "white"
        canvas.appendChild(element)

        for (j = 0; j < size; j++){
            node = document.createElement("div")
            node.style.width = `${canvas_size[0]/size}vw`
            node.style.height = `${canvas_size[1]/size}vh`

            element.appendChild(node)
        }

    }

    let grids = document.querySelectorAll('#canvas div div');

    for (let i = 0; i < grids.length; i++){
        grids[i].addEventListener("mouseover", function(){
            generateRandomColor(grids[i])
        })
    }
}

function clearCanvas(size){
    let children = document.querySelectorAll("#canvas > div")
    for (i = 0; i < children.length; i++){
        canvas.removeChild(children[i])
    }

}

range.addEventListener('change', function(){
    
    clearCanvas()

    generateGrid(range.value)

    document.querySelector("#size_text").textContent = `${range.value} x ${range.value}`;

})

document.querySelector('#clear').addEventListener('click', function(){
    clearCanvas()
})