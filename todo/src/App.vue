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
        <div v-for="t in toDos" :key="t.id">
          <div class="title flex-centered">
            <div class="title-icon">
              <i class="icon icon-time"></i>
            </div>
            <div class="title-content">
              {{  t.description  }}
            </div>
            <div class="title-action">
              <button class="btn btn-link">Concluido</button>
              <button class="btn btn-link">
                <span class="text-error">Remover</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'App',
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
