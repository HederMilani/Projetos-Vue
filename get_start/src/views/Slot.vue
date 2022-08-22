<template>
    <ChildSlot></ChildSlot>
</template>

<script>
    import ChildSlotVue from "./ChildSlot.vue";

    export default{
        components: {
            ChildSlotVue
        },
        data() {
            return {
                msg: 'From parent Slot'
            }
        }
    }
</script>