<template>
       <div class="Corpo">
           <form  @submit="createDados">
               <div class="input-container">
                   <input id="NameInput" type="text" name="name" v-model="nome" placeholder="Nome:">
                   <br>
                   <textarea id="TextoInput" name="Texto" v-model="Text" placeholder="Insira seu Texto:"/>
                   <br>
                   <input type="submit" class="submit-btn" value="Enviar"/>
               </div>
           </form>
       </div>
       <div class="CaixaTable">
        <br>
        <div class="Table" v-for="dadors in dadors" :key="dadors.id">
        <div id="ContainerTa">
            <dir><h1 id="DadoNome">{{dadors.nome}}</h1></dir>
            <dir><p id="DadoText">{{dadors.Text}}</p></dir>
            <div><button class="delete-btn" @click="deleteDados(dadors.id)">Remover</button>
            <br>
          </div>
            </div>
    </div>
       </div>
</template>
<script>
export default{
    name:"MyInterna",
    data(){
        return{
            nome:null,
            Text:null,
            dadors:null,
            dadors_id:null,
        }
    },
    methods:{
       async getPedidos(){
            const req = await fetch("http://localhost:3000/Dados")
            const data = await req.json();
            this.dadors = data;
            this.getStatus();
        },
        async deleteDados(id){
            const req = await fetch(`http://localhost:3000/Dados/${id}`,{method:"DELETE"});
            const res = await req.json();
            this.getPedidos();
        },
        async createDados(e){
            e.preventDefault();
            const data={
                nome: this.nome,
                Text: this.Text
            }
            const dataJson = JSON.stringify(data);
            const req = await fetch("http://localhost:3000/Dados",{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:dataJson
            });
            this.nome = "";
            this.Text = "";
        }
    },
    mounted(){
        this.getPedidos();
    },
}
</script>
