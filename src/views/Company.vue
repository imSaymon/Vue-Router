<template>
  <div>
    <h1>A empresa</h1>
    <p>Lorem ipsum uasdhsaudh sa duhsauidhsad asdhj asiodjsadpoijs</p>
    {{ sidebar }}
    <div :class="{'sidebar':sidebar}">
      <router-link :to="{name: 'company-history'}">História</router-link>
      |
      <router-link :to="{name: 'company-awards'}">Premios</router-link>
    </div>
      <br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'CompanyView',

    data() {
        return {

        };
    },
    created () {
      console.log(this.$route)
    },
    computed: {
       sidebar() {
        return this.$route.meta.sidebar; 
      }
    },
}
</script>

<style>
.sidebar {
  background-color: #CCC;
  padding:5px;
}
</style>
