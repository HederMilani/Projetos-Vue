<template>
    <form class="form-group" @submit.prevent="addTodo">
        <label for="" class="form-label" >Novo To Do</label>
        <input type="text" class="form-input" placeholder="Novo ToDo" v-model="newTodo">
        <button class="btn btn-primary input-group-btn">Gravar</button>
    </form>
    <br><br>
    <ul>
        <li v-for="todo in todos" :key="id">
            {{todo.text}}
            <button class="btn" @click="removeTodo(todo)">X</button>
        </li>
    </ul>
</template>

<script>
    let id = 0

    export default{
        data() {
            return {
                newTodo: '', 
                todos: [
                    {id: id++, text: 'Teste 1'},
                    {id: id++, text: 'Teste 2'}
                ]
            }
        },
        methods: {
            addTodo() {
                this.todos.push({id: id++, text: this.newTodo})
                this.newTodo = ''
            },
            removeTodo(todo) {
                this.todos = this.todos.filter((t) => t !== todo)
            }
        }
    }
</script>