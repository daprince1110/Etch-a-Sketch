let range = document.querySelector('input[type="range"]')
let canvas = document.querySelector("#canvas")

const canvas_size = [canvas.offsetWidth, canvas.offsetHeight]
const border_size = 2
const final_size = [canvas_size[0]-border_size, canvas_size[1]-border_size]

range.addEventListener('change', function(){
    let children = document.querySelectorAll("#canvas > div")
    for (i = 0; i < children.length; i++){
        canvas.removeChild(children[i])
    }
    for (i = 0; i < range.value; i++){
        for (x = 0; x < range.value; x++){
            console.log("Generating an element")
            let element = document.createElement("div")
            console.log((final_size[0])/(range.value*2)+"px")
            element.style.width = `${(final_size[0]) / range.value}px`;
            element.style.height = `${(final_size[1]) / range.value}px`;
            canvas.appendChild(element)
        }
    }
    console.log("\n\n\n\n\n\n\n")
})