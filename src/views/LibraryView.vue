<template>
    <main>
      <section>
      <h2>View our Collection of Books, DVDs and Streaming Content</h2>
      <label for="filtermenu">Filter by type:</label>
      <select id="filtermenu" v-model="activeFilter">
        <option v-for="filter in filters" :key="filter">{{ filter }}</option>
      </select>
      <Accordion :media="filterMedia" />
      </section>
      
    </main>
  </template>
  
<script>
//importing accordion component
 import Accordion from "../components/Accordion.vue";
  export default {
    data: function () {
      return {
        //setting up filters array
        filters: ["all", "book", "streaming", "dvd"],
        activeFilter: "all",
      };
    },
    //passing in the media props it should expect
    props: ["media"],
    //register components
    components: {
      Accordion: Accordion,
    },
    //computed properties start here
    computed: {
      filterMedia() {
        //if filter is all - display all, else, display by type else return false
        if (this.activeFilter === "all") {
          return this.media;
        }
        return this.media.filter((item) => {
          console.log(item.type === this.activeFilter);
          if (item.type === this.activeFilter) {
            return true;
          }
          return false;
        });
      },
    },
  };

</script>

<style scoped>
main {
  padding: 2rem;
}
ul {
  list-style: none;
  width: 50vw;
}
li {
  padding: 1rem;
  cursor: pointer;
  border-radius: 5px;
}

section {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}

section h2{
    margin-bottom: 2rem;
}

label, select {
    margin-left: 7rem;
    margin-bottom: 5rem;
}
.book {
  border: 1px solid #0f4f1f;
  color: #126929;
  background-color: #b0d1b8;
}
.book:hover {
  background-color: #65826d;
}
.streaming {
  border: 1px solid #880f96;
  color: #942ea3;
  background-color: #d3bad6;
}
.streaming:hover {
  background-color: #e75ef7;
}
.dvd {
  border: 1px solid #7a7601;
  color: #928e29;
  background-color: #f2f0b8;
  
}
.dvd:hover {
  background-color: #d1cb0a;
}

.details {
  display: flex;
  padding: 1rem;
  align-items: center;
}
.details img {
  height: 100px;
  margin-right: 2rem;
}

.details {
  padding: 1rem;
}

</style>