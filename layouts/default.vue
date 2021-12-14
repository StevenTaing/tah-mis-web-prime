<template>
  <div :class="containerClass">
    <div class="layout-topbar">
      <button
        class="p-link layout-topbar-button"
        @click="Toggle = !Toggle"
        v-if="subMenu"
      >
        <i class="pi pi-bars"></i>
      </button>
      <div class="layout-topbar-logo">
        <img alt="Logo" src="/images/logo-long.svg" />
      </div>

      <button
        class="p-link layout-topbar-button p-ml-auto"
        @click="visibleRight = true"
      >
        <i class="pi pi-th-large"></i>
      </button>
      <button
        class="p-link layout-topbar-button"
        @click="toggleNote"
        aria-haspopup="true"
        aria-controls="overlay_menu_not"
      >
        <i class="pi pi-bell"></i>
      </button>
      <Menu
        id="overlay_menu_not"
        ref="menu_not"
        :model="notification"
        :popup="true"
      />

      <button
        class="p-link layout-topbar-button"
        @click="toggleProfile"
        aria-haspopup="true"
        aria-controls="overlay_menu"
        v-if="isAuthenticated"
      >
        <i class="pi pi-cog"></i>
      </button>
      <Menu id="overlay_menu" ref="menu" :model="profile" :popup="true" />
    </div>

    <Sidebar :visible.sync="visibleRight" :baseZIndex="1000" position="right">
      <h5>System Module</h5>
      <ul v-if="count > 1" class="layout-menu">
        <template v-for="(item, i) of rightMenu">
          <li class="'layout-menuitem-category'">
            <router-link :to="item.to">
              <i :class="[item.icon, 'p-ripple']"></i>
              <span class="layout-menuitem-root-text">{{ item.name }}</span>
            </router-link>
          </li>
        </template>
      </ul>
    </Sidebar>

    <div class="layout-sidebar" v-if="subMenu">
      <AppMenu :model="subMenu" />
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
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  data() {
    return {
      Toggle: false,
      visibleRight: false,
      count: 0,
      rightMenu: [],
      notification: [
        {
          label: 'Router',
          icon: 'pi pi-circle-fill',
          to: '/fileupload',
        },
      ],
      profile: [
        {
          label: this.$auth.user.surname + ' ' + this.$auth.user.given_name,
          items: [
            {
              label: 'Profile',
              icon: 'pi pi-user',
              url: '/profile',
            },
            {
              label: 'Change Password',
              icon: 'pi pi-unlock',
              to: '/profile/change_password',
            },
            {
              label: 'Logout',
              icon: 'pi pi-sign-out',
              command: () => {
                this.logout();
              },
            },
          ],
        },
      ],
    };
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    },
    toggleProfile(event) {
      this.$refs.menu.toggle(event);
    },
    toggleNote(event) {
      this.$refs.menu_not.toggle(event);
    },
    loadMenu() {
      const divisions = this.$division;
      const accesslist = this.$auth.user.access_list.split(',');
      this.count = accesslist.length;
      this.rightMenu = divisions.filter((division) =>
        accesslist.includes(division.id)
      );
    },
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    containerClass() {
      return [
        'layout-wrapper layout-static',
        {
          'layout-static-sidebar-inactive': this.Toggle === false,
        },
      ];
    },
    subMenu: function () {
      const route_name = this.$route.path;
      const division = route_name.split('/')[1].toUpperCase();
      switch (division) {
        case 'ADM':
          return [
            {
              items: [
                {
                  label: 'Dashboard',
                  icon: 'pi pi-desktop',
                  to: '/adm',
                },
              ],
            },
            {
              label: 'Accounts',
              icon: 'pi pi-fw pi-clone',
              items: [
                { label: 'Users', icon: 'pi pi-fw pi-users', to: '/adm/users' },
                {
                  label: 'New User',
                  icon: 'pi pi-fw pi-user-plus',
                  to: '/adm/users/new',
                },
              ],
            },
          ];
          break;
        default:
          return null;
      }
    },
  },
  mounted() {
    this.loadMenu();
  },
};
</script>
