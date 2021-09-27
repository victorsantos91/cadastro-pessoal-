//Função para validar os campos do formulário
function validarValidar() 
{
    //valida o campo nome 
    if (document.cadastro.nome.value == "") {
        alert("Por favor, preencha o campo nome")
        // o alert é o comando que exibirá na tela do usuário uma mensagem se acontecer o que foi escrito na condicional, neste caso, se o campo não for preenchido, será exibida a mensagem descrita no alert, no momento que o usuário tentar enviar seu cadastro
    }
    //valida o campo sobrenome
    else if (document.cadastro.sobrenome.value == "") 
        {alert("Por favor preencha o campo sobrenome")
    }
    //verifica o campo CPF
    else if (document.cadastro.cpf.value == "") 
        {alert("Por favor, preencha o número do CPF")
    }
    //verificar o campo rg
    else if (document.cadastro.rg.value == "") 
        {alert("por favor preencha o campo do RG")
    }
    // verifica se o cep foi preenchido
    else if(document.cadastro.cep.value == "") 
    {alert("por favor preencha o campo do CEP")
}
    //verificar o campo endereço
    else if (document.cadastro.endereco.value == "")
    {    alert("Por favor prencha o campo endereço")
    }
    //verifica o campo numero
    else if (document.cadastro.numero.value == "") 
    {alert("Por favor preencha o campo Número")
    }

    //verifica o campo celular
    else if (document.cadastro.celular.value == "") 
    {alert("Por favor preencha com o número do seu celular")
    }

    else
    {
        alert("Formulário enviado com sucesso!");
        //nesta última condicão, se todas condiçõess acima forem falsas, ou seja, nenhum dos campos estiver vazio o cadastro será feito e exibida uma mensagem de confirmação 
    }
}

//para acrexcentar os pontos e o hífen no cpf enquanto o usuário digita
function formataCpf()
{
var cpf=document.cadastro.cpf.value;
//criada uma variável que armazenará o que o usuário digitar no campo cpf
if (cpf.length==3)
{document.cadastro.cpf.value=document.cadastro.cpf.value+".";}
//aqui foi estipulada uma condicional, que se forem digitados 3 números o java script fará uma concatenação e acrescentará o ponto após o terceiro número
else if (cpf.length==7)
{document.cadastro.cpf.value=document.cadastro.cpf.value+".";}
//aqui foi criada outra condicional que quando forem digitados 6 números e for colocado o ponto da condicional anterior, totalizando 7 caracteres será feita uma concatenação e o java script acrescentará mais um ponto
else if (cpf.length==11)
{document.cadastro.cpf.value=document.cadastro.cpf.value+"-";
//aqui após serem digitados 9 números e foremm colocados os 2 pontos das condicionais anteriores, o java script fará uma concatenação acrescentará o hífen 
}
//nesta função as concatenações aconteceram durante a digitação do usuário, possibilitando assim que não seja necessário que o usuário digite os pontos nem o hífen do cpf
}

//formata o campo do telefone fixo 
function formataTelefoneFixo()
{
var telefone=document.cadastro.telefone.value;
//foi criada a variável que armazenará o número que o usuário digitar no campo do telefone fixo
if (telefone.length==0)
{document.cadastro.telefone.value=document.cadastro.telefone.value+"(";
//aqui tivemos uma condicional que quando ainda não foi digitado nada pelo usuário o java script faz uma concatenação e acrescenta o abre parêntese no campo
}
else if (telefone.length==3)
{document.cadastro.telefone.value=document.cadastro.telefone.value+")";
//aqui tem uma condicional que quando o usuário digitar 2 números, e contando que já foi colocado o primeiro parêntese somando assim 3 caracteres, o java script deve fazer uma concatenação e acrescentar outro parêntese
}
else if (telefone.length==8) 
{document.cadastro.telefone.value=document.cadastro.telefone.value+"-";
// aqui tem uma condicional que quando o usuário já tiver digitado 6 números ejá tenham sido acrescentados os 2 parêntese somando assim 8 caracteres, o java script tem que fazer uma concatenação e acrescentar o hífen no campo
}
}

//formata o campo do celular
function formataCelular()
{
var celular=document.cadastro.celular.value;
if (celular.length==0)
{document.cadastro.celular.value=document.cadastro.celular.value+"(";
}
else if(celular.length==3) 
{document.cadastro.celular.value=document.cadastro.celular.value+")";
}
else if (celular.length==9)
{document.cadastro.celular.value=document.cadastro.celular.value+"-";
}
}


// Realiza busca de CEP digitado no campo CEP do formulário
function consultaCEP() 
{
    
    var cep = document.cadastro.cep.value;
    //pega o CEP digitado e salva na variável
    let xhr = new XMLHttpRequest();
    //prepara para abrir conexão com API
    xhr.open('GET', 'https://viacep.com.br/ws/' + cep + '/json', false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200)
                preencheCampos(JSON.parse(xhr.responseText));
        }
    }

    xhr.send();
}

function preencheCampos(json) 
{
    //preenche os campos da página com o que vem da API
    document.cadastro.endereco.value = json.logradouro;
    document.cadastro.bairro.value = json.bairro;
    document.cadastro.cidade.value = json.localidade;
    document.cadastro.estado.value = json.uf;
// nesta função então o java script busca o dado fornecido pela epi, e coloca dentro dos campos de dados de endereço para o usuário possibilitando assim uma interação melhor do usuário com página
}
//esta função é acionada pelo evento onblur, que na prática significa que quando o usuário simplesmente tirar o foco do cursor de dentro do input do cep, será acionada então a função, e consequentimente os campos, de dados de endereço ,  serão preenchidos automáticamente  
