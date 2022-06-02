<template>
  <div class="service_hero">
    <h1 class="service__heading">Services</h1>
    <button
      class="service__btn"
      :class="{ active_btn: service.isAdded }"
      :key="service.id"
      v-for="(service, index) in products"
      @click="addToCount(index)"
    >
      <span class="service__description">{{ service.name }}</span>
      <span class="service__description">${{ service.price.toFixed(2) }}</span>
    </button>
    <hr class="service__line" />
    <div class="service__result">
      <h3 class="service__description">Total:</h3>
      <h3 class="service__description">${{ count.toFixed(2) }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@/views/servicesView.scss";

export default defineComponent({
  name: "ServicesView",
  data: () => ({
    products: [
      { id: 1, name: "Web Development", price: 300.0, isAdded: false },
      { id: 2, name: "Design", price: 400.0, isAdded: false },
      { id: 3, name: "Integration", price: 250.0, isAdded: false },
      { id: 4, name: "Training", price: 220.0, isAdded: false },
    ],
    count: 0,
    adding: true,
  }),
  methods: {
    addToCount(index: number) {
      const currentService = this.products.filter((service, i) => i === index);
      if (!currentService[0].isAdded) {
        this.count = this.count + currentService[0].price;
      } else {
        this.count = this.count - currentService[0].price;
      }
      currentService[0].isAdded = !currentService[0].isAdded;
    },
  },
});
</script>
