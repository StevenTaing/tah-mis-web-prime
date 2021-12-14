<template>
  <div class="layout-menu-container">
    <AppSubmenu
      :items="model"
      class="layout-menu"
      :root="true"
      @menuitem-click="onMenuItemClick"
    />
  </div>
</template>

<script>
export default {
  props: {
    model: Array,
  },
  methods: {
    onMenuItemClick(event) {
      this.$emit('menuitem-click', event);
    },
  },
};
</script>

<style scoped></style>
