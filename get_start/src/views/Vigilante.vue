<template>
    <p>Todo id: {{todoId}}</p>
    <button @click="todoId--">Fetch Previus Data</button>
    <button @click="todoId++">Fetch Next Data</button>
    <p v-if="!todoData">Loading . . .</p>
    <pre v-else>{{todoData}}</pre>
</template>

<script>
    export default{
        data() {
            return {
                todoId: 1,
                todoData: null
            }
        },
        methods: {
            async fetchData() {
                this.todoData = null
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/todos/${this.todoId}`
                )
                this.todoData = await res.json()
            }
        },
        mounted() {
            this.fetchData()
        },
        watch: {
            todoId() {
                this.fetchData()
            }
        }
    }
</script>