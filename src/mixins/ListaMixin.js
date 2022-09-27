export default {
    data:() => ({
        itens: [],
        item: '',
        titulo:'ListaFilme'
    }),
    methods: {
        adicionarItem(){
            this.itens.push(this.item)
            this.item = '' 
        }
    },
    created(){
        console.log('listaMixin criado')
    }
}