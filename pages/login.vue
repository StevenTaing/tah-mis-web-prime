<template>
  <div class="p-d-flex p-jc-center">
    <div class="card">
      <div class="p-grid">
        <div class="p-col">
          <img
            src="@/static/images/logo.svg"
            height="220px"
            class="p-d-block p-mx-auto"
          />
        </div>
        <div class="p-col">
          <h5 class="p-text-center">User Login</h5>
          <form @submit.prevent="Login" class="p-fluid">
            <div class="p-field">
              <span class="p-float-label">
                <InputText
                  id="username"
                  v-model="user.username"
                  class="p-d-block"
                />
                <label for="username">Username</label>
              </span>
            </div>

            <div class="p-field">
              <span class="p-float-label">
                <Password
                  id="password"
                  v-model="user.password"
                  toggleMask
                ></Password>
                <label for="password">Password</label>
              </span>
            </div>

            <Button
              type="submit"
              label="Login"
              class="p-button-raised p-button-rounded"
            />
          </form>
        </div>
      </div>
    </div>

    <Toast />
  </div>
</template>

<script>
export default {
  layout: 'empty',
  name: 'Login',
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async Login() {
      try {
        await this.$auth.loginWith('local', {
          data: this.user,
        });
      } catch (error) {
        console.log(error);
        this.$toast.add({
          severity: 'error',
          summary: 'Error Message',
          detail: 'Incorrect username or password!',
          life: 3000,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 650px;
  margin-top: 30vh;

  form {
    margin-top: 2rem;
  }

  .p-field {
    margin-bottom: 1.5rem;
  }
}
</style>
