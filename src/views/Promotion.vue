<template>
  <div class="promotion">
    <TopNav />
    <SideNav />
    <HeadingPage title="Khuyến Mại" link="Promotion" />
    <div class="content-page">
      <div class="row">
        <!-- start form control -->
        <div class="col-lg-4">
          <div class="search-promotion" id="control-promotion">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Tìm tên hoặc cửa hàng khuyến mãi"
                  class="form-control"
                />
              </div>
              <button type="submit">
                <i class="fa fa-search"></i>
              </button>
            </form>
          </div>

          <div class="option-promotion">
            <form action>
              <div class="form-group">
                <label for>Danh mục</label>
                <select v-model="params.screen_type" class="browser-default custom-select">
                  <option selected value="an">Đồ ăn</option>
                  <option value="uong">Đồ uống</option>
                  <option value="giai-tri">Giải trí</option>
                  <option value="lam-dep">Làm đẹp</option>
                </select>
              </div>
              <div class="form-group">
                <label for>Sắp xếp</label>
                <select v-model="params.sort_type" class="browser-default custom-select">
                  <option value="most_view">
                    <span>Xem nhiều nhất</span>
                  </option>
                  <option selected value="newest">
                    <span>Mới nhất</span>
                  </option>
                  <option value="discount_highest">Giảm giá sâu</option>
                  <option value="expires">Sắp hết hạn</option>
                </select>
              </div>
              <div class="form-group">
                <label for>Thành phố</label>
                <select v-model="params.province" class="browser-default custom-select">
                  <option selected value="ha-noi">Hà Nội</option>
                  <option value="tp-hcm">Thành phố Hồ Chí Minh</option>
                  <option value="da-nang">Đà Nẵng</option>
                  <option value="hai-phong">Hải Phòng</option>
                </select>
              </div>
              <div class="form-group">
                <button class="btn btn-primary">
                  <i class="fa fa-search"></i>
                  LỌC KHUYẾN MÃI
                </button>
              </div>
            </form>
          </div>
        </div>
        <!-- end form control -->
        <div class="col-lg-8 promotion">
          <div class="row">
            <div class="col-lg-12 text-center" v-if="isLoading">
              <img
                src="https://i.pinimg.com/originals/a2/de/bf/a2debfb85547f48c3a699423ba75f321.gif"
                alt
                height="400px"
              />
            </div>
            <div class="col-lg-4" v-for="(promotion, index) in promotions" :key="index">
              <PromotionItem :promotion="promotion" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav.vue";
import SideNav from "../components/SideNav.vue";
import HeadingPage from "../components/HeadingPage.vue";
import PromotionItem from "../components/PromotionItem.vue";
import UserService from "../services/UserService";

export default {
  name: "Promotion",
  components: {
    TopNav,
    SideNav,
    HeadingPage,
    PromotionItem
  },
  data() {
    return {
      promotions: [],
      params: {
        sort_type: "newest",
        screen_type: "an",
        offset: 0,
        province: "ha-noi"
      },
      isLoading: true
    };
  },
  created() {
    this.getPromotion();
    console.log(this.params);
  },
  methods: {
    async getPromotion() {
      const config = {
        params: this.params,
        headers: { Authorization: localStorage.getItem("access_token") }
      };
      await UserService.getPromotions(config).then(res => {
        this.promotions = res.data.promotions;
        this.isLoading = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.content-page {
  padding-left: 300px;
  padding-right: 50px;
  .search-promotion {
    box-shadow: 1px 1px 5px gray;
    border-radius: 10px;
    form {
      button {
        background-color: white;
        border: none;
        color: gray;
        position: absolute;
        top: 6px;
        right: 30px;
      }
    }
  }
  .option-promotion {
    border: 1px solid rgb(202, 197, 197);
    padding: 20px 10px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px gray;
    label {
      color: gray;
      font-size: 0.9rem;
    }
    button {
      width: 100%;
      background: rgb(101, 41, 156);
    }
  }

  .promotion {
    border: 1px solid rgb(202, 197, 197);
    border-radius: 10px;
    box-shadow: 1px 1px 5px gray;
    padding-bottom: 20px;
  }
}
</style>
