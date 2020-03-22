<script>
import { useHttpGet } from "@/use/useHttpGet";

export default {
  setup() {
    const { loading, error, data } = useHttpGet("/api/users/fail");

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
      <li v-for="user in data.users" :key="user.id">
        {{ user.name }} ({{ user.mobile }})
      </li>
    </ul>
  </div>
</template>
