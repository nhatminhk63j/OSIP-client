<template>
  <div class="key-table">
    <div class="shop-header">
      <img :src="logo" />
      <div class="shop-name">
        <h2>{{shopname}}</h2>
        <p>{{address}}</p>
      </div>
    </div>
    <table class="table table-content text-center">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">HOT KEY</th>
          <th scope="col">SỐ LƯỢT TÌM KIẾM</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(key, index) in listKeys" :key="index">
          <th scope="row">{{index + 1}}</th>
          <td class="hot-key">{{key.name}}</td>
          <td>{{key.count}}</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <div class="table-control d-flex justify-content-end align-items-center">
      <div class="chosenNumberHotKey">
        <span>Số dòng hiển thị trên trang</span>
        <select id="inputGroupSelect">
          <option value="10" selected class="select-item">10</option>
          <option value="15" class="select-item">15</option>
          <option value="20" class="select-item">20</option>
        </select>
      </div>
      <div class="display-number m-3">1-10 của 20</div>
      <div class="icon-control m-3">
        <i class="fa fa-backward"></i>
        <i class="fa fa-chevron-left"></i>
        <i class="fa fa-chevron-right"></i>
        <i class="fa fa-forward"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KeyTable",
  props: {
    logo: String,
    background: String,
    shopname: String,
    address: String,
    keys: Array
  },
  data() {
    return {
      numberKey: 10
    };
  },
  computed: {
    listKeys: function() {
      return this.keys.filter((key, index) => {
        return index < this.numberKey;
      });
    }
  },
  mounted() {
    console.log(this.keys);
  }
};
</script>

<style lang="scss" scoped>
.key-table {
  width: 100%;
  margin: 20px 30px;
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: 1px 1px 5px gray;
  .shop-header {
    width: 100%;
    height: 120px;
    position: relative;
    overflow: hidden;
    display: flex;
    &:hover {
      .shop-name {
        opacity: 1;
        transform: translate(-10%, -50%);
      }
      img {
        transform: translate(-130%, -50%);
      }
    }
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-image: linear-gradient(
        to right,
        #872776,
        #4f257a 50%,
        #352883
      );
      background-repeat: no-repeat;
      opacity: 0.5;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    &:after {
      content: "";
      background: url("http://osip.ml/static/media/googleBG.d1c0ba0e.png");
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -10;
      top: 0;
      left: 0;
      transition: all 0.5s;
      background-repeat: no-repeat;
      background-size: cover;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    img {
      border-radius: 50%;
      border: 5px solid white;
      position: absolute;
      top: 50%;
      left: 50%;
      height: 80%;
      transform: translate(-50%, -50%);
      transition: all 0.5s;
    }
    .shop-name {
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.5s;
      opacity: 0;
      h2 {
        color: white;
        font-weight: 900;
        font-size: 3rem;
      }
      p {
        color: rgb(165, 164, 164);
      }
    }
  }
  table {
    thead {
      background-image: radial-gradient(
        circle,
        #34048b,
        #3f038e,
        #490291,
        #530194,
        #5c0097
      );
      color: white;
    }
    .hot-key {
      color: #673ab7;
    }
  }
}
</style>