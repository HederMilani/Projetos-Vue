<template>
    <h2>Child Component</h2>
</template>

<script>
    export default{
        emits: ['response'],
        created() {
            this.$emit('response', 'Hello from Child Component')
        }
    }
</script>