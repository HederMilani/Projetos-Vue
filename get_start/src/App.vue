<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/hello" >Hello</router-link> | 
    <router-link to="/contador">Contador</router-link> | 
    <router-link to="/encadernar">Encadernar</router-link> | 
    <router-link to="/condicional">Condicional</router-link> | 
    <router-link to="/lista">Lista</router-link> | 
    <router-link to="/vigilante">Vigilante</router-link> | 
    <router-link to="/componente">Componente</router-link> | 
    <router-link to="/componente2">Componente 2</router-link> | 
    <router-link to="/slot">Slot</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
