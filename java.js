function Enviar() {
    
    
   
const nome = document.getElementById("nomeid").value;
    
   
const email = document.getElementById("emailid").value;
    
   
const dataNascimento = document.getElementById("Dataid").value;
    
   
const celular = document.getElementById("numeroid").value;
    
   
const telefone = document.getElementById("telefoneid").value;
    
   
const ingresso = document.getElementById("ingresso").value;
    
   
const curso = document.getElementById("curso").value;
    
   
const habilitacao = document.getElementById("habilitação").value;
    
   
const turno = document.getElementById("turnoid").value;
    
   
const provaData = document.getElementById("provaid").value;
    const provaHorario = document.getElementById("horarioid").value;
    
   
const provaLocal = document.getElementById("localid").value;
    
   
const cpf = document.getElementById("cpfid").value;
    const rg = document.getElementById("rgid").value;
    const nacionalidade = document.getElementById("nacionalidadeid").value;
    
   
const cep = document.getElementById("cepid").value;
    const endereco = document.getElementById("endereçoid").value;
    
   
const complemento = document.getElementById("complementoid").value;
    
   
const bairro = document.getElementById("bairroid").value;
    
   
const cidade = document.getElementById("cidadeid").value;

    

   



    const dados = `
        Nome: ${nome}
        Email: ${email}
        Data de Nascimento: ${dataNascimento}
        Celular: ${celular}
        Telefone Residencial: ${telefone}
        Forma de Ingresso: ${ingresso}
        Curso: ${curso}
        Habilitação: ${habilitacao}
        Turno: ${turno}
        Data da Prova: ${provaData}
        Horário da Prova: ${provaHorario}
        Local da Prova: ${provaLocal}
        CPF: ${cpf}
        RG: ${rg}
        Nacionalidade: ${nacionalidade}
        CEP: ${cep}
        Endereço: ${endereco}
        Complemento: ${complemento}
        Bairro: ${bairro}
        Cidade: ${cidade}
    `;

    console.log(dados);
    
   
    alert(dados);
}