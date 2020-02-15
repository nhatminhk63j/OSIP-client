<template>
  <div class="login-wrapper">
    <div class="form-login d-flex">
      <form>
        <h2>Đăng nhập</h2>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            v-model="user.email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Nhập email của bạn..."
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Mật khẩu:</label>
          <input
            type="password"
            v-model="user.password"
            class="form-control"
            id="password"
            placeholder="Nhập mật khẩu của bạn..."
            required
          />
        </div>
        <div class="alert alert-danger" v-if="message" role="alert">{{message}}</div>
        <div class="bottom-form-login d-flex justify-content-between align-items-center">
          <router-link to="/register">Tạo tài khoản</router-link>
          <button type="submit" class="btn btn-primary" @click="handleSubmit">Đăng nhập</button>
        </div>
      </form>
      <div class="logo-wrapper">
        <img src="http://osip.ml/static/media/logo-color.3271c830.png" alt="logo" width="200px" />
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "../services/UserService";

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      message: ""
    };
  },
  beforeMount() {
    if (localStorage.getItem("access_token")) {
      this.$router.push({ name: "Home" });
    }
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      this.message = "";
      if (this.user.email && this.user.password) {
        await UserService.login(this.user).then(res => {
          if (res.data.code === 400) this.message = res.data.message;
          else {
            localStorage.setItem("username", res.data.user.name);
            localStorage.setItem(
              "access_token",
              "OSIP " + res.data.access_token
            );
            this.$router.push({ name: "Trending" });
          }
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$break-width: 1080px;
.login-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &::before {
    z-index: -1;
    opacity: 0.6;
    background-image: linear-gradient(
      to bottom,
      #200142,
      #2c0745,
      #371049,
      #42184c,
      #4b2150,
      #4b214f,
      #4a214e,
      #4a214d,
      #401947,
      #371041,
      #2d083c,
      #230036
    );
  }
  &::after {
    z-index: -10;
    background-image: url("http://osip.ml/static/media/sign-bg.e77e849c.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .form-login {
    width: 50%;
    background: white;
    border-radius: 10px;
    box-shadow: 1px 0px 10px #2c0745;
    @media screen and (max-width: $break-width) {
      flex-direction: column-reverse;
      width: 90%;
    }
    form {
      width: 50%;
      margin: 10px;
      padding: 20px;
      @media screen and (max-width: $break-width) {
        width: 100%;
      }
    }
    .logo-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      position: relative;
      @media screen and (max-width: $break-width) {
        width: 100%;
        height: 80px;
      }
      img {
        z-index: 3;
      }
      &::before,
      &::after {
        content: "";
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        @media screen and (max-width: $break-width) {
          border-radius: 0;
          border-top-right-radius: 10px;
          border-top-left-radius: 10px;
        }
      }
      &::before {
        z-index: 2;
        background-color: #673ab7;
        opacity: 0.8;
      }
      &::after {
        z-index: 1;
        background-image: url("http://osip.ml/static/media/sign-bg.e77e849c.jpg");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }
}
</style>
