<template>
  <div>
    <!-- <component :is="Menu"></component>
    <component :is="Navbar"></component> -->
    <div>
      <div>
        <nuxt />
      </div>
    </div>
    <!-- <component :is="Footer"></component>
    <component :is="Snackbar"></component> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  },
  computed: {
    // Menu: function() {
    //   const route_name = this.$route.path;
    //   const division = route_name.split('/')[1];
    //   return 'Menu' + division.toUpperCase();
    // }
  },
};
</script>

<style>
#app {
  background-color: #fafafa;
}
</style>
