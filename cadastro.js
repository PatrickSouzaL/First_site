
// LOGIN

var c_id = localStorage.key(0);  

function check() {    
      
    var c_email = document.getElementById("email").value;
    var c_senha = document.getElementById("senha").value;

    for (let i = 0; i < localStorage.length; i++) {
        let id = localStorage.key(i);
        let dados = localStorage.getItem(id);
        var user = JSON.parse(dados);

        if (user.email_ == c_email) {
            c_id = id;
        }
        
    }

    dados = localStorage.getItem(c_id);
    user = JSON.parse(dados);
    
    if (user.senha_ == c_senha && user.email_ == c_email) {
        window.location.assign("home.html");
    } else {
        alert("Usuário ou senha incorretos! Tente novamente ou crie uma nova conta");
        location.reload();        
    }

}

function logout() {
    var ok = confirm("Deseja fazer o logout?");
    if (ok) {
        window.location.assign("index.html");
    } else {
        return false;
    }
}

function add() {

    var chave = Math.floor(Math.random() * 100);
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var cep = document.getElementById("cep").value;
    var num = document.getElementById("num").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    var usuario = {
                nome_: nome,
                cpf_: cpf,
                cep_: cep,
                num_: num,
                tel_: telefone,
                email_: email,
                senha_: senha,
                aula_: 1,
                chance_: 0,
                nota_: 0,
                avv_: 0
                }

    localStorage.setItem(chave, JSON.stringify(usuario));

}

// FIM LOGIN

// MÁSCARAS FORMULÁRIO CADASTRO

function mask_tel() {

    const tel = document.querySelector("#telefone");

    tel.addEventListener("keyup", () => {

        let value = tel.value.replace(/^(\d\d)(\d)/g,"($1) $2"); 
        value = value.replace(/(\d{5})(\d)/,"$1-$2");
    
        tel.value = value;
    });

}

function mask_cep() {

    const cep = document.querySelector("#cep");

    cep.addEventListener("keyup", () => {

        let value = cep.value.replace(/^(\d\d)(\d)/g,"$1.$2"); 
        value = value.replace(/(\d{3})(\d)/,"$1-$2");
    
        cep.value = value;
    });

}

function mask_cpf() {

    const cpf = document.querySelector("#cpf");

    cpf.addEventListener("keydown", function(e) { // Remove qualquer caractere que não seja número
        if (e.key >= "a" && e.key <= "z") {
          e.preventDefault();
        }
    });

    cpf.addEventListener("blur", function(e) {
        //Remove tudo o que não é dígito
        let validar_cpf = this.value.replace( /\D/g , "");
   })

    cpf.addEventListener("keyup", () => { // Máscara CPF
    let value = cpf.value.replace( /(\d{3})(\d{3})(\d{3})(\d{1,2})/ , "$1.$2.$3-$4");    

    cpf.value = value;
    });

}

// FIM MÁSCARAS

// PÁGINA PRINCIPAL

function meuscursos() {
    
    window.location.assign("meuscursos.html");
    
}
function contato() {
    
    window.location.assign("contato.html");
    
}
function sobre() {
    
    window.location.assign("sobre.html");
    
}
// FIM PÁGINA PRINCIPAL

// AULAS

let dados = localStorage.getItem(c_id);
var user = JSON.parse(dados);

var Aula = 1;

function show1() {

    Aula = 1;

    var video = document.getElementById("video");
    var aula1 = document.getElementById("aula1");

    document.getElementById("aula2").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
    document.getElementById("aula3").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
    document.getElementById("aula4").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
    document.getElementById("aula5").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
    document.getElementById("aula6").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";

    aula1.style.background = "linear-gradient(to right, #f4bdff 0%, #c684ff  51%,  #ec8dff  100%)";
    video.innerHTML = "";
    video.innerHTML += '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/eoE_O_nVWcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

    descricao();

}

function show2() {

    var video = document.getElementById("video");
    var aula2 = document.getElementById("aula2");
    
    dados = localStorage.getItem(c_id);
    user = JSON.parse(dados);

    if (user.aula_ >= 1) {

        Aula = 2;

        document.getElementById("aula1").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
        document.getElementById("aula3").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
        document.getElementById("aula4").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
        document.getElementById("aula5").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
        document.getElementById("aula6").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";

        aula2.style.background = "linear-gradient(to right, #f4bdff 0%, #c684ff  51%,  #ec8dff  100%)";
        video.innerHTML = "";
        video.innerHTML += '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/xBaEmnHphRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        
        if (user.aula_ == 1) {
            localStorage.setItem(c_id, JSON.stringify({nome_: user.nome_,
                                        cpf_: user.cpf_,
                                        cep_: user.cep_,
                                        num_: user.num_,
                                        tel_: user.tel_,
                                        email_: user.email_,
                                        senha_: user.senha_,
                                        aula_: 2,
                                        chance_: user.chance_,
                                        nota_: user.nota_,
                                        avv_: user.avv_}));
        }

    } else {
        alert("Você ainda não desbloqueou esta aula");
    }

    descricao();
    
}

function show3() {

    var video = document.getElementById("video");
    var aula3 = document.getElementById("aula3");

    dados = localStorage.getItem(c_id);
    user = JSON.parse(dados);

    if (user.aula_ >= 2) {

        Aula = 3;

        document.getElementById("aula1").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
        document.getElementById("aula2").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
        document.getElementById("aula4").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
        document.getElementById("aula5").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
        document.getElementById("aula6").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
        
        aula3.style.background = "linear-gradient(to right, #f4bdff 0%, #c684ff  51%,  #ec8dff  100%)";
        video.innerHTML = "";
        video.innerHTML += '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/o72fpJyaH4U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

        if (user.aula_ == 2) {
            localStorage.setItem(c_id, JSON.stringify({nome_: user.nome_,
                                        cpf_: user.cpf_,
                                        cep_: user.cep_,
                                        num_: user.num_,
                                        tel_: user.tel_,
                                        email_: user.email_,
                                        senha_: user.senha_,
                                        aula_: 3,
                                        chance_: user.chance_,
                                        nota_: user.nota_,
                                        avv_: user.avv_}));
        }

    } else {
        alert("Você ainda não desbloqueou esta aula");
    }
    
    descricao();
    
}

function show4() {

    var video = document.getElementById("video");
    var aula4 = document.getElementById("aula4");

    dados = localStorage.getItem(c_id);
    user = JSON.parse(dados);

    if (user.aula_ >= 3) {

        Aula = 4;

        document.getElementById("aula1").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
        document.getElementById("aula2").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
        document.getElementById("aula3").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
        document.getElementById("aula5").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
        document.getElementById("aula6").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";

        aula4.style.background = "linear-gradient(to right, #f4bdff 0%, #c684ff  51%,  #ec8dff  100%)";
        video.innerHTML = "";
        video.innerHTML += '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/nuSdufvMUpw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        
        if (user.aula_ == 3) {
            localStorage.setItem(c_id, JSON.stringify({nome_: user.nome_,
                                        cpf_: user.cpf_,
                                        cep_: user.cep_,
                                        num_: user.num_,
                                        tel_: user.tel_,
                                        email_: user.email_,
                                        senha_: user.senha_,
                                        aula_: 4,
                                        chance_: user.chance_,
                                        nota_: user.nota_,
                                        avv_: user.avv_}));
        }

    } else {
        alert("Você ainda não desbloqueou esta aula");
    }
    
    descricao();
    
}

function show5() {

    var video = document.getElementById("video");
    var aula5 = document.getElementById("aula5");

    dados = localStorage.getItem(c_id);
    user = JSON.parse(dados);

    if (user.aula_ >= 4) {

        Aula = 5;

        document.getElementById("aula1").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
        document.getElementById("aula2").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
        document.getElementById("aula3").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
        document.getElementById("aula4").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
        document.getElementById("aula6").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";

        aula5.style.background = "linear-gradient(to right, #f4bdff 0%, #c684ff  51%,  #ec8dff  100%)";
        video.innerHTML = "";
        video.innerHTML += '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/P1y-cLjSBo8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        
        if (user.aula_ == 4) {
            localStorage.setItem(c_id, JSON.stringify({nome_: user.nome_,
                                        cpf_: user.cpf_,
                                        cep_: user.cep_,
                                        num_: user.num_,
                                        tel_: user.tel_,
                                        email_: user.email_,
                                        senha_: user.senha_,
                                        aula_: 5,
                                        chance_: user.chance_,
                                        nota_: user.nota_,
                                        avv_: user.avv_}));
        }

    } else {
        alert("Você ainda não desbloqueou esta aula");
    }
    
    descricao();
    
}

function show6() {

    var video = document.getElementById("video");
    var aula6 = document.getElementById("aula6");

    dados = localStorage.getItem(c_id);
    user = JSON.parse(dados);

    if (user.aula_ >= 5) {

        Aula = 6;

        document.getElementById("aula1").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
        document.getElementById("aula2").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
        document.getElementById("aula3").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
        document.getElementById("aula4").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";
        document.getElementById("aula5").style.background = "linear-gradient(to right, #c800f0 0%, #6412ac  51%, #9101ad  100%)";

        aula6.style.background = "linear-gradient(to right, #f4bdff 0%, #c684ff  51%,  #ec8dff  100%)";
        video.innerHTML = "";
        video.innerHTML += '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/BVcA4z9dil4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        
        if (user.aula_ == 5) {
            localStorage.setItem(c_id, JSON.stringify({nome_: user.nome_,
                                        cpf_: user.cpf_,
                                        cep_: user.cep_,
                                        num_: user.num_,
                                        tel_: user.tel_,
                                        email_: user.email_,
                                        senha_: user.senha_,
                                        aula_: 6,
                                        chance_: user.chance_,
                                        nota_: user.nota_,
                                        avv_: user.avv_}));
        }

    } else {
        alert("Você ainda não desbloqueou esta aula");
    }
    
    descricao();
    
}

// FIM AULAS

// DETALHES AULAS

function descricao() {

    var mostrar = document.getElementById("mostrar");

    document.getElementById("descricao").style.boxShadow = "0 0 7px #4d4d4d";
    document.getElementById("comentario").style.boxShadow = "none";

    if (Aula == 1) {

        mostrar.innerHTML = "";
        mostrar.innerHTML += 'AULA 1 - CONCEITOS BÁSICOS <br/>'+
                            'Nesta aula foi ensinado os fundamentos básicos do porwer point para <br/>' +
                            'aprofundarmos no conteudo futuramente.<br/>';
   
    }

    if (Aula == 2) {

        mostrar.innerHTML = "";
        mostrar.innerHTML += 'AULA 2 - BARRA DE FERRAMENTAS <br/>'+
                            'Explicando os conceitos da barra de ferramentas e todas as abas <br/>';
   
    }

    if (Aula == 3) {

        mostrar.innerHTML = "";
        mostrar.innerHTML += 'AULA 3 - TIPOS DE ARQUIVO <br/>'+
                            'Nesta aula vemos um pouco mais sobre os tipos de maneiras diferentes para <br/>' +
                            'salvar o seu conteudo produzido. <br/>';
   
    }

    if (Aula == 4) {

        mostrar.innerHTML = "";
        mostrar.innerHTML += 'AULA 4 - Arquivos e Teclas de Atalho <br/>'+
                            'Arquivos PPT ou PPTX <br/>' +
                            'Simbolo no Explorer <br/>' +
                            'CTRL + V <br/>' +
                            'CTRL + C <br/>' +
                            'CTRL + X <br/>';
   
    }

    if (Aula == 5) {

        mostrar.innerHTML = "";
        mostrar.innerHTML += 'AULA 5 - Teclas de atalho Especiais <br/>'+
                            'Mostrando as demais teclas de atalho disponiveis no Power Point e suas Funcionalidades <br/>';
   
    }

    if (Aula == 6) {

        mostrar.innerHTML = "";
        mostrar.innerHTML += 'AULA 6 - Formatações <br/>'+
                            'Mostrando os tipos de foratação disponives para as diferentes situaçoes <br/>' +
                            'formatação de cabeçalho, corpo e rodapé do slide.<br/>';
   
    }

}

function comentario(msg) {

    var mostrar = document.getElementById("mostrar");

    document.getElementById("descricao").style.boxShadow = "none";
    document.getElementById("comentario").style.boxShadow = "0 0 7px #4d4d4d";

    mostrar.innerHTML = "";
    mostrar.innerHTML += '<label> Deixe aqui o seu comentário: </label><br/><br/>' +
                         '<textarea name="assunto" id="assunto" cols="40"' +
                         'rows="10" maxlength="240" minlenght="30" placeholder="Assunto (Máximo 240 caracteres)"' +
                         'required></textarea> <br/>' +
                         '<button onclick="comentario(1)"> ENVIAR </button>';

    if (msg == 1) {
        alert("Obrigado pelo seu comentário ;)")
    }

}

// FIM DETALHES

// AVALIAÇÃO DA MATÉRIA

function Avaliar(estrela) {

    dados = localStorage.getItem(c_id);
    user = JSON.parse(dados);

    var avaliacao = 0;
   
    //ESTRELA 5
    if (estrela == 5){ 
        document.getElementById("s1").src = "img/star1.png";
        document.getElementById("s2").src = "img/star1.png";
        document.getElementById("s3").src = "img/star1.png";
        document.getElementById("s4").src = "img/star1.png";
        document.getElementById("s5").src = "img/star1.png";
        avaliacao = 5;
    }
    
    //ESTRELA 4
    if (estrela == 4){ 
        document.getElementById("s1").src = "img/star1.png";
        document.getElementById("s2").src = "img/star1.png";
        document.getElementById("s3").src = "img/star1.png";
        document.getElementById("s4").src = "img/star1.png";
        document.getElementById("s5").src = "img/star0.png";
        avaliacao = 4;
    }

    //ESTRELA 3
    if (estrela == 3){ 
        document.getElementById("s1").src = "img/star1.png";
        document.getElementById("s2").src = "img/star1.png";
        document.getElementById("s3").src = "img/star1.png";
        document.getElementById("s4").src = "img/star0.png";
        document.getElementById("s5").src = "img/star0.png";
        avaliacao = 3;
    }
    
    //ESTRELA 2
    if (estrela == 2){ 
        document.getElementById("s1").src = "img/star1.png";
        document.getElementById("s2").src = "img/star1.png";
        document.getElementById("s3").src = "img/star0.png";
        document.getElementById("s4").src = "img/star0.png";
        document.getElementById("s5").src = "img/star0.png";
        avaliacao = 2;
    }
    
    //ESTRELA 1
    if (estrela == 1){ 
        document.getElementById("s1").src = "img/star1.png";
        document.getElementById("s2").src = "img/star0.png";
        document.getElementById("s3").src = "img/star0.png";
        document.getElementById("s4").src = "img/star0.png";
        document.getElementById("s5").src = "img/star0.png";
        avaliacao = 1;
    }
    
    document.getElementById('rating').innerHTML = avaliacao;

    localStorage.setItem(c_id, JSON.stringify( {nome_: user.nome_,
                                                cpf_: user.cpf_,
                                                cep_: user.cep_,
                                                num_: user.num_,
                                                tel_: user.tel_,
                                                email_: user.email_,
                                                senha_: user.senha_,
                                                aula_: user.aula_,
                                                chance_: user.chance_,
                                                nota_: user.nota_,
                                                avv_: avaliacao}));
    
    
}

// FIM AVALIAÇÃO

// PROVA

function prova() {

    dados = localStorage.getItem(c_id);
    user = JSON.parse(dados);

    var avaliacao = 0;

    if (user.chance_ == 3) {
        alert("Você já realizou as 3 tentativas :(");
        window.location.assign("conteudo.html");        
    } else {

        if (user.aula_ == 6) {
            if (user.nota_ == 1){
                alert("*** Certificado ***")
            } else {
                window.location.assign("prova.html");
            }
        } else {
            alert("Você ainda não desbloqueou a prova. Veja todas as aulas!");
        }

        if (user.avv_ == 5){ 
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star1.png";
            document.getElementById("s3").src = "img/star1.png";
            document.getElementById("s4").src = "img/star1.png";
            document.getElementById("s5").src = "img/star1.png";
            avaliacao = 5;
        }
            
        if (user.avv_ == 4){ 
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star1.png";
            document.getElementById("s3").src = "img/star1.png";
            document.getElementById("s4").src = "img/star1.png";
            document.getElementById("s5").src = "img/star0.png";
            avaliacao = 4;
        }

        if (user.avv_ == 3){ 
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star1.png";
            document.getElementById("s3").src = "img/star1.png";
            document.getElementById("s4").src = "img/star0.png";
            document.getElementById("s5").src = "img/star0.png";
            avaliacao = 3;
        }

        if (user.avv_ == 2){ 
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star1.png";
            document.getElementById("s3").src = "img/star0.png";
            document.getElementById("s4").src = "img/star0.png";
            document.getElementById("s5").src = "img/star0.png";
            avaliacao = 2;
        }

        if (user.avv_ == 1){ 
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star0.png";
            document.getElementById("s3").src = "img/star0.png";
            document.getElementById("s4").src = "img/star0.png";
            document.getElementById("s5").src = "img/star0.png";
            avaliacao = 1;
        }

        document.getElementById('rating').innerHTML = avaliacao;
    }

}

function correcao() {

    var certas = 0;
    
    if (document.getElementById("correta1").checked == true) {
        certas++;
    }
    
    if (document.getElementById("correta2").checked == true) {
        certas++;
    }
    
    if (document.getElementById("correta3").checked == true) {
        certas++;
    }
    
    if (document.getElementById("correta4").checked == true) {
        certas++;
    }
    
    if (document.getElementById("correta5").checked == true) {
        certas++;
    }
    
    if (document.getElementById("correta6").checked == true) {
        certas++;
    }
    
    if (document.getElementById("correta7").checked == true) {
        certas++;
    }
    
    if (document.getElementById("correta8").checked == true) {
        certas++;
    }
    
    if (document.getElementById("correta9").checked == true) {
        certas++;
    }
    
    if (document.getElementById("correta10").checked == true) {
        certas++;
    }
    
    if (document.getElementById("correta11").checked == true) {
        certas++;
    }
    
    if (document.getElementById("correta12").checked == true) {
        certas++;
    }

    dados = localStorage.getItem(c_id);
    user = JSON.parse(dados);

    localStorage.setItem(c_id, JSON.stringify( {nome_: user.nome_,
                                                cpf_: user.cpf_,
                                                cep_: user.cep_,
                                                num_: user.num_,
                                                tel_: user.tel_,
                                                email_: user.email_,
                                                senha_: user.senha_,
                                                aula_: user.aula_,
                                                chance_: user.chance_ + 1,
                                                nota_: user.nota_,
                                                avv_: user.avv_                                                
                                            }));

    alert(certas);

    if (certas >= 8) {
        alert("Parabéns! Você foi aprovado com " + certas + " acertos!");

        window.location.assign("certificado.html");
        localStorage.setItem(c_id, JSON.stringify( {nome_: user.nome_,
                                                    cpf_: user.cpf_,
                                                    cep_: user.cep_,
                                                    num_: user.num_,
                                                    tel_: user.tel_,
                                                    email_: user.email_,
                                                    senha_: user.senha_,
                                                    aula_: user.aula_,
                                                    chance_: user.chance_,
                                                    nota_: 1,
                                                    avv_: user.avv_                                                
                                                }));
    } else {

        dados = localStorage.getItem(c_id);
        user = JSON.parse(dados);

        if (user.chance_ == 3) {
            alert("Você já realizou as 3 tentativas :(");
            window.location.assign("conteudo.html");
        } else {
            alert("Você ainda tem chance de ganhar o certificado. Tente novamente!");
            window.location.assign("prova.html");
        }

    }

}

// FIM PROVA

function certificado() {    
    
    var texto = document.getElementById("texto");

    dados = localStorage.getItem(c_id);
    user = JSON.parse(dados);

    texto.innerHTML = "";
    
    texto.innerHTML +=  'Certifico que <b>' + user.nome_ + '</b> participou do curso de <br/>' + 
                        '<b>POWERPOINT BÁSICO</b> realizado pela <b>IANES Tech EAD</b> e ministrado pela <br/>' +
                        '<b>MARIA CLÁUDIA GUIMARÃES</b> em agosto de 2022, com carga horária <br/> de 0.33 horas.' +
                        '<div id="assinaturas">' +
                        '    Assinatura Coordenadora:' +
                        '</div>' +
                        '<div id="assinatura"> Maria Cláudia Guimarães </div>';

}
