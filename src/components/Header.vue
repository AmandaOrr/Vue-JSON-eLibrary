<template>
    <header>
        <ul>
            <li>
                <RouterLink to="/">Homepage</RouterLink>
            </li>
            <li>
                <RouterLink to="/library">Library</RouterLink>
            </li>
            <li>
                <RouterLink to="/about">About</RouterLink>
            </li>
            <li>
                <RouterLink to="/faq">FAQ</RouterLink>
            </li>
            
        </ul>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
    components: {
        RouterLink,
    }
}
</script>

<style scoped>
header {
  background-color: #c7e4c1;
  padding: 20px;
}
ul {
  list-style: none;
  padding-left: 0;
  display: flex;
  justify-content: center;
}
li {
  margin-left: 10px;
  margin-right: 10px;
}
li a {
  color: #a7a2a2;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
}

li a:hover {
    color: #fff;
}
</style>