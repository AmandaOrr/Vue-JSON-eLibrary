<template>
  <Header />
  <RouterView :media="media"/>
</template>

<script>
//import axios
import axios from 'axios';
//importing routerview
import { RouterView } from 'vue-router';
//import components
import Header from './components/Header.vue';
export default {
  components: {
      Header: Header,
      RouterView: RouterView,
    },
  data: function (){
    return {
      //setting an empty array for the data object from axios
      media: [],
    };
  },//end of data
  computed: {
    
  },//end of computed
  methods: {

  },//end of methods
  created: function () {
    //adding the lifecycle method to fetch the data when its rendered
    axios.get("public/data.json").then((response) => {
      //telling it where to get the data, axios needs a promise thats a function
      this.media = response.data.media;
    });
  },
}
</script>

<style>

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}

* {
  box-sizing: border-box;
}
html {
  font-size: 10px;
}
body {
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  background-image: url('https://cdnb.artstation.com/p/assets/images/images/046/499/745/large/l-y-hyun-fantasy-forest-secret-village.jpg?1645264603');
  font-family: "Montserrat", sans-serif;
  width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
  color: #ebf7ee;
}


h1,
h2,
h3,
h4 {
  margin: 0;
}
main{
  padding: 2rem;
}
</style>