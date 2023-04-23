  //fará com que os botões clicados pelo usuário aparecerá na tag 'p' 
  function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
  }
  //fará com que o botão'C' limpe os números digitados.
  function clean(){
      document.getElementById('resultado').innerHTML = "";
  }
  // aqui o botão '<' excluirá um número ou operador escolhido da direita para esquerda
  function back(){
      var resultado = document.getElementById('resultado').innerHTML;
      document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
  }
  // essa funtion realizará os calculos e exibirá o resultado ao clicar no botão'='
  function calcular(){
      var resultado = document.getElementById('resultado').innerHTML;
      if (resultado){
          document.getElementById('resultado').innerHTML = eval(resultado)
      }
      else{
          document.getElementById('resultado').innerHTML = "ERRO"
      }
  }