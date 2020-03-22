<script>
import { useHttpGet } from "@/use/useHttpGet";

export default {
  setup() {
    const { loading, error, data } = useHttpGet("/api/products");

    return { loading, error, data };
  }
};
</script>

<template>
  <div>
    <h4 v-if="loading">Carregando...</h4>
    <div v-if="error" style="color: #c00000;">
      <strong>{{ error }}</strong>
    </div>
    <ul v-else>
      <li v-for="product in data.products" :key="product.id">
        {{ product.name }}
        <div>
          <em>{{ product.description }}</em>
        </div>
      </li>
    </ul>
  </div>
</template>
