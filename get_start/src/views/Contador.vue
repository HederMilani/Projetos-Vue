<template>
    <button class="btn" v-on:click="increment">Somar</button>
    <span class="h2 Heading"> | {{cont}} | </span>
    <button class="btn" @click="decrement">Diminuir</button>
</template>

<script>
    export default{
        data() {
            return{
                cont: 0
            }
        },
        methods:{
            increment() {
                this.cont++ 
            },
            decrement() {
                this.cont--
            }
        }
    }
</script>