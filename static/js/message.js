let messages = [
    //["Remetente", "Content", "Horário", "Dia"]
    ["??????", `Seja bem-vindo ${localStorage.getItem('name')}! Espero que você não me decepcione, eu confio este segredo á você...`, "21:03h", "Terça-Feira - 14/02/2023"],
    ["??????", `Seu primeiro desafio já está disponível. Este será apenas um teste. Se o mundo está cinza, que tal colorir?`, "21:04h", ""],
]

let digno = [
    "??????", `Parabéns ${localStorage.getItem('name')}, então você é digno de continuar. Espere por mais atualizações...`, "??:??h", "??????? - ??/??/??"
]


function render_message(){

    localStorage.setItem("new_mes", false)

    body_main.innerHTML = `
        <header id="title" class="container p-4">
            <div class="d-flex flex-row justify-content-between">
                <button type="button" class="col-4 col-md-2 btn btn-outline-secondary" onclick="render_main()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
                    </svg>
                    Voltar
                </button>
                <h4 class="col-8 col-md-7 text-center text-light">Mensagens</h4>
                <div class="col-0 col-md-2"></div>
            </div>
        </header>

        <div id="geral_content" class="container">

            <div id="cards" class="row row-cols-1 row-cols-md-3 g-4">

            </div>

        </div>
    `

    geral_content.innerHTML = "";
    for(var i = 0; i < messages.length; i ++){

        let day = "";
        if(messages[i][3] != ""){
            day = `
                <div class="container d-flex flex-row">
                    <div class="col-1 col-sm-4"></div>
                    <div class="col-10 col-sm-4 rounded-1 text-center p-1 my-2 text-light" style="background-color: rgba(10, 90, 90, 0.294);">${messages[i][3]}</div>
                    <div class="col-1 col-sm-4"></div>
                </div>
            `
        }

        geral_content.innerHTML += `

            ${day}

            <div class="container my-2" style="min-width: min-content">
                <div class="toast-header">
                    <h6 class="me-auto">${messages[i][0]}</h6>
                    <small>${messages[i][2]}</small>
                </div>
                <div class="toast-body bg-secondary rounded-bottom text-light">
                    ${messages[i][1]}
                </div>
            </div>
        `

        if(i == 1 && localStorage.getItem("title") != "Não digno"){
            day = `
                <div class="container d-flex flex-row">
                    <div class="col-1 col-sm-4"></div>
                    <div class="col-10 col-sm-4 rounded-1 text-center p-1 my-2 text-light" style="background-color: rgba(10, 90, 90, 0.294);">${digno[3]}</div>
                    <div class="col-1 col-sm-4"></div>
                </div>
            `

            geral_content.innerHTML += `

                ${day}

                <div class="container my-2" style="min-width: min-content">
                    <div class="toast-header">
                        <h6 class="me-auto">${digno[0]}</h6>
                        <small>${digno[2]}</small>
                    </div>
                    <div class="toast-body bg-secondary rounded-bottom text-light">
                        ${digno[1]}
                    </div>
                </div>
            `
        }
    }

}