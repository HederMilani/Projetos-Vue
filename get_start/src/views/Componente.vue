<template>
    <ChildCompVue :msg="greeting" />
</template>

<script>
    import ChildCompVue from "./ChildComp.vue";

    export default{
        components: {
            ChildCompVue
        },
        data() {
            return {
                greeting: 'Hello From Father'
            }
        }
    }
</script>