<template>
    <ChildComp2 @response="(msg) => childMsg = msg"/>
    <p>{{childMsg}}</p>
</template>

<script>
    import ChildComp2Vue from "./ChildComp2.vue";

    export default{
        components: {
            ChildComp2Vue
        },
        data() {
            return{
                childMsg: 'No child message yet'
            }
        }
    }
</script>