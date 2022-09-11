<template>
<div id="Senha">
  <input type="number" id="Number" placeholder="Coloque o tamanho da senha" >
  <br>
  <button id="Gerar" v-on:click="Tam()">Gerar uma senha</button>
  <p id="Palavras"></p>
</div>
</template>
<script>
  export default{
    name:'MySenha',
    methods:{
      Name(tamanho){
    var stringAleatoria = '';
     var caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
     for (var i = 0; i < tamanho; i++) {
      stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
      navigator.clipboard.writeText(stringAleatoria)
     }
     return stringAleatoria;
      },
      Tam(){
      const Number = document.getElementById('Number').value
      const palavra = document.getElementById("Palavras")
      const cor = (this.Name(Number))
      palavra.innerText= cor
      },
    }
  }
</script>
