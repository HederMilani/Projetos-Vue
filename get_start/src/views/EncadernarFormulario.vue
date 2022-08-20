<template>
    <div>
        <label for="" class="form-label">Digite seu Texto:</label>
        <input type="text" class="form-input" :value="text" @input="onInput" placeholder="Digite Aqui">
    </div>
    <br>
    <div>
        <p class="h2 Heading">{{text}}</p>
    </div>
</template>

<script>
    export default{
        data() {
            return{
                text: ""
            }
        },
        methods: {
            onInput(e){
                this.text = e.target.value
            }
        }
    }
</script>