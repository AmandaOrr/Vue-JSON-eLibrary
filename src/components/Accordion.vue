<template>
  <!--use v-for to output all the data from data.json. media = the array, use title as key-->
    <ul v-for="(item, i) in media" :key="item.title">
      <li :class="item.type" @click="toggle(i)">
        <strong>{{ item.title }} --</strong>&nbsp;
        <em>{{ item.firstName }} {{ item.lastName }}</em>
      </li>
      <div v-if="item.expand == true">
        <span class="details">
          <div>
            <img :src="item.image" />
          </div>
          <div>
            <p>
              <strong>{{ item.title }} by </strong>
            </p>
            <p>{{ item.firstName }} {{ item.lastName }}</p>
          </div>
        </span>
        <div class="description">
          <p>{{ item.description }}</p>
        </div>
      </div>
    </ul>
  </template>
  
  <script>
export default {
  props: ["media"],
  methods: {
    toggle(i) {
      this.media[i].expand = !this.media[i].expand;
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
.book {
  border: 2px solid #0f4f1f;
  color: #126929;
  background-color: #b0d1b8;
  transition: 0.2s linear;
}
.book:hover {
  background-color: #65826d;
}
.streaming {
  border: 2px solid #880f96;
  color: #942ea3;
  background-color: #d3bad6;
  transition: 0.15s linear;
}
.streaming:hover {
  background-color: #e75ef7;
}
.dvd {
  border: 2px solid #7a7601;
  color: #928e29;
  background-color: #f2f0b8;
  transition: 0.2s linear;
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
button {
  float: right;
}

.description {
  padding: 1rem;
}

.details, .description {
  background-color: rgb(173, 171, 171);
  border-radius: 2px;
}
label {
  margin-right: 1rem;
}
</style>