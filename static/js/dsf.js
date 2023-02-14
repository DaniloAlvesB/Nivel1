let desafios = [
    //["nome", "descrição", "src", content_index, "limite", liberado]

    ["Seja digno", "Esse é o primeiro desafio, não se engane, ele não será o mais fácil. Passe e prove que é digno de continuar.", "static/image/sejadigno.jpg", 1, "Até 20/02/2023", false],
]

function render_main(){

    //Desafio
    let new_des = "";
    if(localStorage.getItem("new_des") == "true"){
        new_des = `
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                Novo
                <span class="visually-hidden">Desafios</span>
            </span>
        `
    }

    //Mensagem
    let new_mes = "";
    if(localStorage.getItem("new_mes") == "true"){
        new_mes = `
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                Novo
                <span class="visually-hidden">Mensagens</span>
            </span>
        `
    }

    body_main.innerHTML = `
        <header class="container p-4">
            <h4 id="title" class="text-white">${localStorage.getItem("name")} - ${localStorage.getItem("title")}</h4>
        </header>

        <div id="geral_content" class="container">

            <div id="cards" class="row row-cols-1 row-cols-md-3 g-4">
                
            </div>

            <div class="p-4 col-12">

                <button type="button" class="btn btn-outline-light position-relative mx-3" onclick="render_desafios()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journals" viewBox="0 0 16 16">
                        <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"></path>
                        <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z"></path>
                    </svg>
                    Desafios
                    ${new_des}
                </button>

                <button type="button" class="btn btn-outline-primary position-relative mx-3" onclick="render_message()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    </svg>
                    Mensagens
                    ${new_mes}
                </button>

            </div>

        </div>
    `



}

function render_desafios(){

    localStorage.setItem("new_des", false)

    body_main.innerHTML = `
        <header id="title" class="container p-4">
            <div class="d-flex flex-row justify-content-between">
                <button type="button" class="col-4 col-md-2 btn btn-outline-secondary" onclick="render_main()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
                    </svg>
                    Voltar
                </button>
                <h4 class="col-8 col-md-7 text-center text-light">Desafios</h4>
                <div class="col-0 col-md-2"></div>
            </div>
        </header>

        <div id="geral_content" class="container">

            <div id="cards" class="row row-cols-1 row-cols-md-3 g-4">

            </div>

        </div>
    `

    if(localStorage.getItem("title") == "Não digno"){
        cards.innerHTML = `
            <button class="col pointer p-0" onclick="render_content(${desafios[0][3]})">
                <div class="card h-100">
                <img src="${desafios[0][2]}" class="card-img-top" alt="${desafios[0][0]}">
                <div class="card-body">
                    <h5 class="card-title">${desafios[0][0]}</h5>
                    <p class="card-text">${desafios[0][1]}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${desafios[0][4]}</small>
                </div>
                </div>
            </button>
        `
    }else{
        var exists = false;
        for(var i = 0; i < desafios.length; i++){

            if(desafios[i][4] == true){
                exists = true;
                cards.innerHTML = `
                    <div class="col pointer">
                        <div class="card h-100">
                        <img src="${desafios[i][2]}" class="card-img-top" alt="${desafios[i][0]}">
                        <div class="card-body">
                            <h5 class="card-title">${desafios[i][0]}</h5>
                            <p class="card-text">${desafios[i][1]}</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">${desafios[i][4]}</small>
                        </div>
                        </div>
                    </div>
                `
            }
        }
    }

    if(exists == false){
        cards.innerHTML = `
        <div class="container-fluid text-center" style="margin-top: 30vh;">
            <p class="text-secondary">Nenhum desafio disponível</p>
        </div>
        `
    }

}

function render_content(id){
    title.innerHTML = `
        <div class="d-flex flex-row justify-content-between">
            <button type="button" class="col-4 col-md-2 btn btn-outline-secondary" onclick="render_desafios()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
                </svg>
                Voltar
            </button>
            <h4 class="col-8 col-md-7 text-center text-light">${content[id][0]}</h4>
            <div class="col-0 col-md-2"></div>
        </div>
    `

    geral_content.innerHTML = `
        ${content[id][1]}
    `
}
