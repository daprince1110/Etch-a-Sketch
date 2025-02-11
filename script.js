let range = document.querySelector('input[type="range"]')
let canvas = document.querySelector("#canvas")


const border_size = 2
const canvas_size = [72-border_size,80-border_size]


range.addEventListener('change', function(){
    
    let children = document.querySelectorAll("#canvas > div")
    for (i = 0; i < children.length; i++){
        canvas.removeChild(children[i])
    }

    for (i = 0; i < range.value*2;i++){
        let element = document.createElement("div")
        element.style.width = `${canvas_size[0]/range.value}vw`
        element.style.height = `${canvas_size[1]/range.value}vh`
        element.style.border_size = "2px solid black";
        canvas.appendChild(element);
    }
    console.log("\n\n\n\n\n\n\n")
})