let content = [
    //0
    ["Title", 
        `
            <p>
                content
            </p>
        `
    ],



    //1 - Seja digno
    ["Seja digno", 
        `
            <p class="text-white">
                . ... - . / . / --- / .--. .-. .. -- . .. .-. --- / -.. . ... .- ..-. .. --- .-.-.- 
                / . .-.. . / -. .- --- / ...- .- .. / ... . .-. / ..-. .- -.-. .. .-.. --..-- / -- 
                .- ... / - .- -- -... . -- / -. .- --- / ...- .- .. / ... . .-. / -.. .. ..-. .. -.-. 
                .. .-.. .-.-.- / -... --- .- / ... --- .-. - . -.-.--

                <br>

                O mundo nem sempre foi tão cinza assim, nos tempos de criança tudo era mais colorido. Com o tempo todos crescem e adquirem várias responsabilidades e preocupações, é assim, essa é a evolução da vida. <br>
                Claro que nem tudo é tão ruim quanto parece, ao crescermos também descobrimos coisas novas e novos pontos de vista. <br>
                Talvez então o segredo seja a junção de tudo e todos. Juntamos as pessoas, as cores... <br>
                
                
            </p>

            <div class="d-flex flex-row" style="">
                <div class="col-1 col-md-4"></div>
                <div class="col-10 col-md-4 d-flex flex-column">
                    <div class="d-flex flex-row">
                        <input id="red" class="input-group my-2 mx-2 border border-danger rounded-2" type="number" max-lenght="3">
                        <input id="green" class="input-group my-2 mx-2 border border-success rounded-2" type="number" max-lenght="3">
                        <input id="blue" class="input-group my-2 mx-2 border border-primary rounded-2" type="number" max-lenght="3">
                    </div>
                    <button class="col btn btn-secondary" onclick="quest1()">Responder</button>
                </div>
                <div class="col-1 col-md-4"></div>
            </div>
            <div id="result" class="container text-center p-3"></div>

        `
    ],
]