<template>
    <form class="form-group" @submit.prevent="addTodo">
        <label for="" class="form-label" >Novo To Do</label>
        <input type="text" class="form-input" placeholder="Novo ToDo" v-model="newTodo">
        <button class="btn btn-primary">Gravar</button>
    </form>
    <br><br>
    <ul>
        <li v-for="todo in filteredTodos" :key="id">
            <input type="checkbox" v-model="todo.done">
            <i class="form-icon"></i>
            <span :class="{ done: todo.done}"> {{ todo.text }} </span>
            <button class="btn" @click="removeTodo(todo)">X</button>
        </li>
    </ul>
    <button class="btn btn-primary" @click="hideCompleted = !hideCompleted">
        {{hideCompleted ? 'Mostrar Todas' : 'Mostrar Não Completas'}}
    </button>
</template>

<script>
    let id = 0

    export default{
        data() {
            return {
                newTodo: '', 
                hideCompleted: false,
                todos: [
                    {id: id++, text: 'Teste 1', done: false},
                    {id: id++, text: 'Teste 2', done: true}
                ]
            }
        },
        methods: {
            addTodo() {
                this.todos.push({id: id++, text: this.newTodo}, done= false)
                this.newTodo = ''
            },
            removeTodo(todo) {
                this.todos = this.todos.filter((t) => t !== todo)
            }
        },
        computed: {
            filteredTodos() {
                return this.hideCompleted
                    ? this.todos.filter((t) => !t.done)
                    : this.todos
            }
        }
    }
</script>