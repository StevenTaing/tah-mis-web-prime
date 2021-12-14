<template>
  <div :class="containerClass">
    <div class="layout-topbar">
      <button class="p-link layout-topbar-button" @click="Toggle = !Toggle">
        <i class="pi pi-bars"></i>
      </button>
      <router-link to="/" class="layout-topbar-logo">
        <img alt="Logo" src="/images/logo-long.svg" />
      </router-link>
    </div>
    <div class="layout-sidebar">
      <AppMenu />
    </div>

    <div class="layout-main-container">
      <div class="layout-main">
        <nuxt />
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      Toggle: false,
    };
  },
  computed: {
    containerClass() {
      return [
        'layout-wrapper layout-static',
        {
          'layout-static-sidebar-inactive': this.Toggle === false,
        },
      ];
    },
    // Menu: function() {
    //   const route_name = this.$route.path;
    //   const division = route_name.split('/')[1];
    //   return 'Menu' + division.toUpperCase();
    // }
  },
};
</script>
