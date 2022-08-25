<template>
  <div class="q-pa-md">
    <q-form @submit="save">
      <div class="row">
        <div class="col-8 itens-left">
          <q-input  outlined label="Nome"
                    v-model="name"
                    :roles="[ val => val && val.length > 0 || 'Campo Obrigatório']"/>
        </div>

        <div class="col-8 itens-left">
          <q-input  outlined label="Endereco"
                    v-model="address"
                    :roles="[ val => val && val.length > 0 || 'Campo Obrigatório' ]"/>
        </div>

        <div class="col-8 text-center">
          <br>
          <q-btn color="primary" type="submit" label="Salvar" no-caps />

        </div>
      </div>
    </q-form>
  </div>
  <br>
  <div class="q-pa-md bg-grey-10 text-white">
    <q-list dark bordered separator style="max-width: 318px">
      <q-item class="clickable v-riple" v-for="person in persons " :key="person.id">
        <q-item-section>{{person.name}}</q-item-section>
        <q-item-section>{{person.address}}</q-item-section>
        </q-item>
    </q-list>
  </div>
</template>

<style>
</style>

<script>
let id = 0

export default {
  name: 'HelloWorld',
  data() {
    return{
      name: '',
      address: '',
      persons: [{id: id ++, name: 'Teste1', address: 'Teste1'
      }]
    }
  },
  methods: {
    save() {
      this.persons.push({
        id: id++,
        name: this.name,
        address: this.address
      }),
      this.name= '',
      this.address= ''
    }
  }
}
</script>
