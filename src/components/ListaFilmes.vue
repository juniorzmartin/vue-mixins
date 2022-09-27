<template>
    <div>
        <h3>Lista Filmes</h3>
        <input type="text" placeholder="Nome do filme" v-model="filme">
        <button type="button" @click="adicionarFilme">Adicionar</button>
        <br>
        <ul>
            <li v-for="(filme, index) in filmes" :key="index">
                {{filme}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ListaFilmes',
    data:() => ({
        filmes: [],
        filme: ''
    }),
    methods: {
        adicionarFilme(){
            this.filmes.push(this.filme)
            this.filme = '' 
        }
    }

}
</script>