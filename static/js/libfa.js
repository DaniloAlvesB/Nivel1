function quest1(){
    let red_1 = document.getElementById("red").value;
    let green_1 = document.getElementById("green").value;
    let blue_1 = document.getElementById("blue").value;

    if(red_1 == 255 && green_1 == 255 && blue_1 == 255){
        geral_content.innerHTML = `
            <b class="text-success">
                Parabéns, você conseguiu!
            </b>
        `

        localStorage.setItem("title", "Digno")
    }else{
        result.innerHTML = `
            <b class="text-danger">
                Isso foi patético...
            </b>
        `
    }
}