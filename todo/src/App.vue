<template>
  <div id="App">
    <div class="container grid-xs">
      <img class="image-responsive image-logo" src="@/assets/GeekInvestLogo.png" alt="Logo Geek Invest">
      <form @submit.prevent="addToDo(toDo)">
        <div class="input-group">
          <input type="text" v-model="toDo.description" class="form-input" placeholder="Novo ToDo">
          <button class="btn btn-primary input-group-btn">Adicionar </button>
        </div>
      </form>
      <div class="toDo-list">
        <toDo v-for="t in toDos" :key="t.id" @toggle="toggleToDo" :toDo="t"/>
        {{ToDo}}
      </div>
    </div>
</div>
</template>

<script>
import ToDo from "./components/ToDoView.vue"

export default {
  name: 'App',
  components: {ToDo},
  data(){
    return{
      toDos: [], 
      toDo: { check: false},
    }
  },
    methods: {
      addToDo(toDo) {
        toDo.id = Date.now();
        this.toDos.push(toDo);
        this.toDo = {check: false}
      },
      toggleToDo(toDo) {
        const index = this.toDos.findIndex(item => item.id === toDo.id)
        if (index > -1) {
          const check = this.toDos[index].check
          this.$set(this.toDos, index, check)
        }
      }
    }
}
</script>

<style escoped>

.image-logo{
  max-width: 500px;
  margin: 0px auto;
}

.toDo-list{
  padding-top: 2rem;

}
</style>
