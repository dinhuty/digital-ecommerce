<template>
  <div class="product-item tw-relative tw-flex tw-flex-col tw-gap-4 tw-w-full tw-h-auto tw-bg-white tw-rounded-sm">
    <div class="product-top tw-overflow-hidden">
      <div class="product-img tw-overflow-hidden">
        <img
          src="http://res.cloudinary.com/dkgd2q69d/image/upload/c_fill,f_auto,h_600,w_600/v1/digital_products/ucd2m58yuds2ubjlkrtz"
          alt="" class="hover:tw-scale-90 tw-transition-all" />
      </div>
    </div>
    <div class="product-disc-persentage tw-absolute tw-flex tw-items-center tw-justify-center tw-text-white" :style="{
      backgroundImage: 'url(' + bgPercent + ')'
    }">
      <p>
        Giảm 20%
      </p>
    </div>
    <div class="product-bottom tw-flex tw-flex-col tw-gap-1.5">
      <div class="product-name tw-font-bold">The nort coat</div>
      <div class="product-price tw-flex tw-gap-3">
        <div class="base-price tw-text-red tw-font-medium">$260</div>
        <div class="disc-price tw-text-gray-500 tw-line-through">$320</div>
      </div>
      <div class="product-rating tw-flex tw-flex-row tw-gap-1 tw-items-center">
        <img :src="goldStar" alt="" class="tw-h-3" />
        <img :src="goldStar" alt="" class="tw-h-3" />
        <img :src="goldStar" alt="" class="tw-h-3" />
        <img :src="goldStar" alt="" class="tw-h-3" />
        <img :src="goldStar" alt="" class="tw-h-3" />
        <span class="tw-block tw-text-xs tw-text-gray-400"> (20) </span>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import heartSmall from "@assets/svg/heart-small.svg";
import goldStar from "@assets/svg/gold-star.svg";
import eyeIcon from "@assets/svg/group.svg";
import bgPercent from "@assets/svg/bg-percent.svg"
</script>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductItem",
});
</script>
<style scoped lang="scss">
.product-item {
  padding: 50px 16px 20px 16px;
  border: 1px solid $border-prd;

  .product-disc-persentage {
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    width: 79px;
    height: 31px;
    left: -6px;
    top: 12px;
    font-size: 12px;
    font-weight: 600;
    // padding: 4px 6px;
    // align-items: center;
    // gap: 10px;
    // font-size: 13px;
    // border-radius: 0px 8px 8px 0px;
    // background: var(--primary-secondary-secondary-100, #fdc9c94e);
    // color: #e30019;
  }
}
</style>