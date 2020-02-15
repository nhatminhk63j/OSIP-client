<template>
  <div class="promotion-item text-center">
    <div class="logo pt-1">
      <img :src="promotion.brand.image" alt height="30px" />
    </div>
    <div class="image-item">
      <img :src="promotion.image_url" alt width="100%" />
      <div class="percent-discount">
        <h2>{{promotion.number_of_percent_deal}}%</h2>
      </div>
    </div>
    <div class="description-item">
      <h3 :title="promotion.title" data-toggle="tooltip" data-placement="bottom">{{promotion.title}}</h3>
      <p>{{promotion.store}}</p>
    </div>
    <div class="text-right">
      <a class="btn" @click="isDisplayNone">
        <i class="fa fa-angle-right"></i> Chi tiết
      </a>
    </div>
    <div class="popup-item" :class="{displaynone: isnotDisplay}">
      <div class="info-creator">
        <button @click="isDisplayNone" class="btn btn-default">X</button>
        <span>
          Supported by
          <a href>JAMJA</a>
        </span>
      </div>
      <iframe :src="hasLink ? promotion.deal_url : ''"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "PromotionItem",
  props: {
    promotion: Object
  },
  data() {
    return {
      isnotDisplay: true,
      hasLink: false
    };
  },
  methods: {
    isDisplayNone() {
      this.isnotDisplay = !this.isnotDisplay;
      this.hasLink = !this.hasLink;
    }
  }
};
</script>

<style lang="scss" scoped>
.promotion-item {
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: 1px 1px 1px rgb(185, 185, 185);
  margin-top: 15px;
  padding: 10px;
  .image-item {
    margin: 10px 0;
    position: relative;
    .percent-discount {
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(158, 118, 235, 0.8);
      width: 80px;
      height: 40px;
      border-bottom-right-radius: 40px;
      h2 {
        color: white;
        font-size: 1.5rem;
        padding-top: 5px;
      }
    }
  }
  .description-item {
    padding: 20px;
    h3,
    p {
      font-size: 0.9rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  a {
    color: #673ab7;
    &:hover {
      color: #673ab7;
      background-color: rgb(240, 240, 240);
    }
  }
  .popup-item {
    position: fixed;
    top: 0;
    left: 0;
    iframe {
      width: 100vw;
      height: 100vh;
    }
    z-index: 999;
    .info-creator {
      background-color: #673ab7;
      padding: 10px;
      width: 100%;
      text-align: left;
      button {
        background-color: white;
        border-radius: 50%;
        font-size: 1.2rem;
        font-weight: bold;
      }
      span {
        color: white;
      }
      a {
        color: red;
        font-weight: bold;
        font-size: 1.2rem;
      }
    }
  }
}

.displaynone {
  display: none;
}
</style>