<template>
  <div class="sidebar">
    <div class="nav-toogle text-center">
      <i class="fa fa-arrow-right"></i>
    </div>
    <div class="sidenav">
      <div class="user-profile">
        <div class="user-avatar">
          <img src="http://osip.ml/static/media/avatar_example_2.b4e2977c.png" alt width="50px" />
        </div>
        <div class="user-detail">
          <h4
            class="dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            id="user-control"
          >{{name}}</h4>
          <div class="dropdown-menu" aria-labelledby="user-control">
            <a class="dropdown-item">
              <i class="fa fa-user"></i>Thông tin cá nhân
            </a>
            <a class="dropdown-item" @click="logout">
              <i class="fa fa-sign-out"></i>Đăng xuất
            </a>
          </div>
        </div>
      </div>
      <ul class="nav-menu">
        <li class="nav-header">Thống kê</li>
        <li class="menu">
          <router-link to="/trending">
            <i class="fa fa-line-chart"></i>
            <span>Xu hướng tìm kiếm</span>
          </router-link>
        </li>
        <li class="nav-header">Thông tin</li>
        <li class="menu">
          <a href>
            <i class="fa fa-search"></i>
            <span>Gợi ý từ khóa</span>
          </a>
        </li>
        <li class="menu">
          <router-link to="/promotion">
            <i class="fa fa-shopping-cart"></i>
            <span>Khuyến mại</span>
          </router-link>
        </li>
        <li class="menu">
          <a href>
            <i class="fa fa-flash"></i>
            <span>Flash Sale</span>
          </a>
        </li>
        <li class="nav-header">Hệ thống</li>
        <li class="menu">
          <a href>
            <i class="fa fa-tasks"></i>
            <span>Quản lý chức năng</span>
          </a>
        </li>
        <li class="menu">
          <a href>
            <i class="fa fa-user"></i>
            <span>Quản lý người dùng</span>
          </a>
        </li>
        <li class="nav-header">Giới thiệu</li>
        <li class="menu">
          <a href>
            <i class="fa fa-info-circle"></i>
            <span>Về chúng tôi</span>
          </a>
        </li>
        <li class="menu">
          <a href>
            <i class="fa fa-question-circle"></i>
            <span>Mẹo mua sắm</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import UserService from "../services/UserService";
export default {
  name: "SideNav",
  data() {
    return {
      name: ""
    };
  },
  beforeMount() {
    this.name = localStorage.getItem("username");
  },
  methods: {
    logout() {
      UserService.logout();
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-toogle {
  position: fixed;
  top: 90px;
  left: 0;
  color: white;
  font-size: 1.5rem;
  background-color: #673ab7;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: none;
  cursor: pointer;
  i {
    padding: 10px 20px;
  }
  @media screen and (max-width: 1080px) {
    display: initial;
  }
}

.sidenav {
  position: fixed;
  top: 82px;
  left: 0px;
  background-color: white;
  box-shadow: 2px 5px 10px gray;
  min-width: 250px;
  height: 100vh;
  padding: 20px;
  .user-profile {
    display: flex;
    align-items: center;
    h4 {
      font-size: 1.1rem;
      color: gray;
      margin-left: 20px;
      cursor: pointer;
    }
    i {
      margin-right: 5px;
    }
  }
  ul.nav-menu {
    list-style: none;
    padding: 0;
    .nav-header {
      padding: 10px 0px;
      border-top: 1px solid gray;
      margin-top: 20px;
      color: gray;
    }
    .menu {
      padding: 5px 0px;
      i {
        margin-right: 10px;
      }
      a {
        &:hover {
          color: #673ab7;
          text-decoration: none;
        }
        &.router-link-exact-active.router-link-active {
          color: #673ab7;
        }
      }
    }
  }
}
</style>