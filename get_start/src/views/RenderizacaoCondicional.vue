<template>
    <button class="btn" @click="trocar">Trocar</button>
    <div class="panel">
        <p class="h1 Heading" v-if="teste">Valor Verdadeiro</p>
        <p class="h1 Heading" v-else>Valor Falso</p>
    </div>
</template>

<script>
    export default{
        dat() {
            return{
                teste: false
            }
        },
        methods: {
            trocar() {
                this.teste = !this.teste
            }
        }
    }
</script>