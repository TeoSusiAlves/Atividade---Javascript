function Acender() {
    let imagem = document.getElementById('lampada');
    let caminho = imagem.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/') + 1);

    if (arquivo == 'apagada.jpg')
        imagem.src = 'img/acesa.jpg';
    if (arquivo == 'acesa.jpg')
        imagem.src = 'img/apagada.jpg';

    let botao = document.getElementById('btnEnviar');
    if (botao.textContent == 'Acender') {
        botao.textContent = 'Apagar';
    }
    else
        botao.textContent = 'Acender';

}
function gerarImagens() {
   
    let dados = document.getElementById('canvas');
    dados.innerHTML = '';
    let elemento = '';
    let qtd = inQtdImg.value;
    for (let i = 0; i < qtd; i++) {
        elemento = ' <img src="img/pexels-pixabay-207129.jpg">';
        dados.innerHTML += elemento;
    }

}
    function atualizarDados() {

        let data = frmRegistro.inData.value;
        let conteudo = document.getElementById('mensagem-erro');
        let nome = frmRegistro.inCli.value;
        let email = frmRegistro.inMail.value;
        let valor = frmRegistro.inVal.value;
        let quantidade = frmRegistro.inQtd.value;
        let produto = frmRegistro.inProd.value;
        let telefone = frmRegistro.inFone.value;
        let erro = document.getElementById('mensagem-erro');
        let contem = email.includes('@');
        erro.innerHTML = ' ';
        erro.style.display = 'none';
        if (nome.trim()=='' || nome.length < 5 || contem == false || email == '' || email.length < 5 || valor == '' ||  valor < 0 || quantidade == '' || quantidade < 0 || produto == '' || produto.length < 5 || telefone == '' || telefone < 0 ) {
            erro.style.display = 'block';
            conteudo.innerHTML = 'Mensagem de erro: preencha corretamente os dados.'
        }
        else{
        conteudo.innerHTML = 'Inscrição confirmada!'
        erro.style.backgroundColor = 'green';
        erro.style.opacity = '0.8';
        erro.style.display = 'block';
        conteudo.style.color = 'black';
        
    }
        
        
        
    }
    function calcular() {
        var valor = document.getElementById('inValorPedido').value;
        var desc = document.getElementById('inValDesc').value;
        var valorl = document.getElementById ('inValFinal').value;
        
        if (valor < 0 )
        alert ('Insira valores positivos');
        if (valor <= 500 ){
        document.getElementById('inPercDesc').value = 0.5;
        document.getElementById('inValDesc').value = (0.5 * valor) / 100;
        let valordesc = document.getElementById('inValDesc').value;
        let valor2 = valor - valordesc;
        document.getElementById('inValFinal').value = valor2;
        }
       
        if (valor >500 && valor<= 1000 ){
        document.getElementById('inPercDesc').value = 0.8;
        document.getElementById('inValDesc').value = (0.8 * valor) / 100;
        let valordesc2 = document.getElementById('inValDesc').value;
        let valor3 = valor - valordesc2;
        document.getElementById('inValFinal').value = valor3;
        }
       
        if (valor > 1000 && valor<= 1500){
        document.getElementById('inPercDesc').value = 1;
        document.getElementById('inValDesc').value = (1 * valor) / 100;
        let valordesc3 = document.getElementById('inValDesc').value;
        let valor4 = valor - valordesc3;
        document.getElementById('inValFinal').value = valor4;
        }
        if (valor > 1500 && valor<= 2000){
        document.getElementById('inPercDesc').value = 1.5;
        document.getElementById('inValDesc').value = (1.5 * valor) / 100;
        let valordesc4 = document.getElementById('inValDesc').value;
        let valor5= valor - valordesc4;
        document.getElementById('inValFinal').value = valor5;
        }
        if (valor > 2000){
        document.getElementById('inPercDesc').value = 0;
        document.getElementById('inValDesc').value = (0 * valor) / 100;
        let valordesc5 = document.getElementById('inValDesc').value;
        let valor6= valor - valordesc5;
        document.getElementById('inValFinal').value = valor6;
        }
        



    }
 