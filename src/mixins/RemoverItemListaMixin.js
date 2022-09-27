export default {
    methods:{
        removerItem(){
            this.itens.pop()
        }
    },
    created(){
        console.log('listaRemoverItem criado')
    }
}