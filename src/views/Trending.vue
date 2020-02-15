<template>
  <div class="menu-control">
    <TopNav />
    <SideNav />
    <HeadingPage title="Xu hướng tìm kiếm" link="Trending" />
    <div class="content-page">
      <div class="row">
        <div class="col-md-6">
          <KeyTable
            :keys="google"
            logo="http://osip.ml/static/media/google.1ea89059.jpg"
            shopname="Google"
            address="www.google.com"
          />
        </div>
        <div class="col-md-6">
          <KeyTable
            :keys="shoppe"
            logo="http://osip.ml/static/media/shopee.52fb7992.png"
            shopname="Shoppe"
            address="www.shopper.vn"
          />
        </div>
        <div class="col-md-6">
          <KeyTable
            :keys="sendo"
            logo="data:image/png;base64,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"
            shopname="Sendo"
            address="www.Sendo.vn"
          />
        </div>
        <div class="col-md-6">
          <KeyTable
            :keys="tiki"
            logo="http://osip.ml/static/media/tiki.48e52844.png"
            shopname="Tiki"
            address="www.tiki.vn"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav.vue";
import SideNav from "../components/SideNav.vue";
import HeadingPage from "../components/HeadingPage.vue";
import KeyTable from "../components/KeyTable.vue";
import UserService from "../services/UserService";
export default {
  name: "Trending",
  components: {
    TopNav,
    SideNav,
    HeadingPage,
    KeyTable
  },
  data() {
    return {
      google: [],
      sendo: [],
      tiki: [],
      shoppe: []
    };
  },
  created() {
    this.getHotWords();
  },
  methods: {
    async getHotWords() {
      const config = {
        headers: {
          Authorization: localStorage.getItem("access_token")
        }
      };
      await UserService.getHotWords(config).then(res => {
        this.google = res.data.hot_words.google;
        this.tiki = res.data.hot_words.tiki;
        this.shoppe = res.data.hot_words.shoppe;
        this.sendo = res.data.hot_words.sendo;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content-page {
  margin-left: 300px;
  margin-right: 50px;
}
</style>
