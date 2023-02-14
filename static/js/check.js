if(localStorage.getItem("inf_name") != null){
    
    let code = localStorage.getItem("inf_code")
    for(var i = 0; i < name_code.length; i++){

        if(name_code[i][1] == code){
            localStorage.setItem("name", name_code[i][0])
        }

    }

    if(localStorage.getItem("atualiza") == "true"){
        localStorage.setItem("atualiza", "false")
        localStorage.setItem("new_des", "true")
        localStorage.setItem("new_mes", "true")
    }

    render_main()

}else{

    if(localStorage.getItem("inf_code") != null){
        
        let code = localStorage.getItem("inf_code")
        for(var i = 0; i < name_code.length; i++){

            if(name_code[i][1] == code){
                localStorage.setItem("name", name_code[i][0])
            }

        }

        if(localStorage.getItem("atualiza") == "true"){
            localStorage.setItem("atualiza", "false")
            localStorage.setItem("new_des", "true")
            localStorage.setItem("new_mes", "true")
        }

        main_content.innerHTML = `
            <h4>Bem vindo!</h4>
            <p>
                Você foi selecionado, deve estar se perguntando o que é tudo isso. Tenha paciencia...
            </p>

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