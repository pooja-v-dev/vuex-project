<template>
  <div class="products" v-for="item in products" :key="item.name">
    <h3>{{ item.name }} - {{ item.price }}</h3>
    <div class="buttons">
      <button @click="$store.commit('remove')">Remove Item</button>
      <button @click="$store.commit('add')">Add Item</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "Chips",
          price: 100,
        },
        { name: "Chocolate", price: 170 },
      ],
    };
  },
};
</script>

<style>
.buttons,button {
  margin: 10px;
  font-size: 18px;
}
</style>