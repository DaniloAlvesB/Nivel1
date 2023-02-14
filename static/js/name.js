let name_code = [
    //["name", "code"]
    ["Danilo", "eBMM1PtHDayxlTV"],
    ["Murilo", "tSLsv8Qx3FDiA2o"],
    ["Daniel", "Z0fEyGc7ATYwkbW"],
    ["Andrew", "EjmIGn5DwKrVPns"],
]

function check_code(){
    let code = document.getElementById("namein").value;
    let exists = false;
    var pos = 0;

    for(var i = 0; i < name_code.length; i++){

        if(name_code[i][1] == code){
            pos = i;
            localStorage.setItem("inf_code", name_code[i][1])
            localStorage.setItem("title", "Não digno")

            //novos
            localStorage.setItem("new_des", "true")
            localStorage.setItem("new_mes", "true")
            localStorage.setItem("atualiza", "true")

            exists = true;
        }

    }

    if(exists == true){

       localStorage.setItem("name", name_code[pos][0])
        location.reload();

    }else{

        main_content.innerHTML = `
        
            <h4 style="margin-top: 35vh;"><b class="text-danger">Não</b> tente entrar se você <b class="text-danger">não</b> foi chamado. Esse código <b class="text-danger">não</b> existe.</h4>

        `

    }
}

function check_name(){
    let main_name = localStorage.getItem("name");
    let name = document.getElementById("namein").value;

    if(name == main_name){

        localStorage.setItem("inf_name", main_name);
        render_main();
        
    }else{
        main_content.innerHTML = `
            <h5>
                Ora! Sejamos francos <b class="fs-4 text-warning">${main_name}</b>, não precisa mentir pra mim...
            </h5>
            <div class="d-flex flex-row" style="margin-top: 30vh;">
                <div class="col-1 col-md-4"></div>
                <div class="col-10 col-md-4 d-flex flex-column">
                    <h4>Digite seu nome</h4>
                    <input id="namein" class="input-group my-2" type="text">
                    <button class="col btn btn-secondary" onclick="check_name()">Continuar</button>
                </div>
                <div class="col-1 col-md-4"></div>
            </div>
        `
    }
}