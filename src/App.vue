<script>
import Users from "@/components/Users";
import Products from "@/components/Products";

export default {
  components: {
    Users,
    Products
  }
};
</script>

<template>
  <div style="display: flex; flex-direction: row;">
    <div style="flex: 1">
      <Users />
    </div>
    <div style="flex: 1">
      <Products />
    </div>
  </div>
</template>
