<template>
  <Container>
    <div class="app-home tw-flex tw-flex-col tw-gap-4">
      <div
        class="block-top-home tw-bg-white tw-flex tw-gap-5 tw-justify-between"
      >
        <div class="menu-main">
          <Menu />
        </div>
        <div class="home-slider tw-rounded-lg tw-flex tw-justify-center tw-items-center">
          <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="10"
            :pagination="{ clickable: true }"
            :navigation="true"
            id="swiper-slider"
          >
            <swiper-slide
              class="swiper-item tw-overflow-hidden"
              v-for="n in 6"
              :key="n"
            >
              <img :src="banner" alt="" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div
        class="home-category tw-bg-white tw-rounded-xl tw-overflow-hidden tw-flex tw-flex-col tw-gap-6 tw-px-4 tw-py-5"
      >
        <Heading
          toptitle="Categories"
          :allowViewAll="false"
          title="Categories"
        />
        <div class="list-category">
          <Categories />
        </div>
      </div>

      <div
        class="home-sale tw-rounded-xl tw-overflow-hidden tw-flex tw-flex-col tw-gap-6 tw-px-4 tw-py-5"
        :style="{
          backgroundImage: `url(${bgChistmas})`,
          backgroundPosition: '0% 0%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }"
      >
        <Heading event-title="HOT SALE GIÁ SỐC" :timer="true" />
        <div class="list-product">
          <swiper
            :modules="modules"
            :slides-per-view="3"
            :navigation="true"
            :space-between="24"
            id="swiper-slider"
            :breakpoints="breakpoints"
          >
            <swiper-slide class="swiper-item" v-for="n in 8" :key="n">
              <product-item />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <img src="" alt="" />
      <div
        class="best-seller tw-bg-white tw-rounded-xl tw-overflow-hidden tw-flex tw-flex-col tw-gap-6 tw-px-4 tw-py-5"
      >
        <Heading toptitle="This Month" title="Best Selling Product" />
        <div class="list-product">
          <swiper
            :modules="modules"
            :slides-per-view="3"
            :navigation="true"
            :space-between="24"
            id="swiper-slider"
            :breakpoints="breakpoints"
          >
            <swiper-slide class="swiper-item" v-for="n in 8" :key="n">
              <product-item />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div
        class="home-brand tw-rounded-xl tw-bg-white tw-flex tw-flex-col tw-gap-6 tw-px-4 tw-py-5"
      >
        <Heading toptitle="Brands" title="Brands" />
        <Brands />
      </div>
      <div
        class="best-seller tw-bg-white tw-rounded-xl tw-overflow-hidden tw-flex tw-flex-col tw-gap-6 tw-px-4 tw-py-5"
      >
        <Heading
          toptitle="Sản phẩm khác"
          title="Có thể bạn sẽ thích"
          :allow-view-all="false"
        />
        <div class="list-product tw-grid tw-grid-cols-5 tw-gap-5">
          <div class="product-item" v-for="n in 10" :key="n">
            <product-item />
          </div>
        </div>
        <div
          class="btn-view tw-self-center tw-p-3 tw-bg-red tw-text-white hover:tw-opacity-70 tw-transition-all tw-rounded-sm"
        >
          Xem thêm sản phẩm
        </div>
      </div>
      <!-- <div
        class="home-featured tw-bg-white tw-rounded-xl tw-overflow-hidden tw-flex tw-flex-col tw-gap-6 tw-px-4 tw-py-5"
      >
        <Heading toptitle="Featured" title="New Arrival" />
        <div class="list-featured tw-flex tw-gap-5">
          <div class="featured-left tw-flex-1">
            <ArrivalItem
              title="PlayStation 5"
              sub-title="Black and White version of the PS5 coming out on sale."
              :img="ps5SlimPng"
            />
          </div>
          <div class="featured-right tw-flex tw-flex-col tw-gap-5 tw-flex-1">
            <div class="top-right">
              <ArrivalItem
                title="Women’s Collections"
                sub-title="Featured woman collections that give you another vibe."
                :img="womanAPng"
              />
            </div>
            <div class="bottom-ri tw-flex-1 tw-grid tw-grid-cols-2 tw-gap-5">
              <ArrivalItem
                title="Women’s Collections"
                sub-title="Amazon wireless speakers"
                :img="amazonEchoPng"
              />
              <ArrivalItem
                title="Women’s Collections"
                sub-title="Amazon wireless speakers"
                :img="amazonEchoPng"
              />
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </Container>
</template>
  
<script lang="ts" setup>
import Menu from "@/components/categories/Menu.vue";
import amazonEchoPng from "@assets/images/arrival/amazon-echo.png";
import ps5SlimPng from "@assets/images/arrival/ps5-slim.png";
import womanAPng from "@assets/images/arrival/woman-banner.png";
import Container from "@components/base/Container.vue";
import banner from "@/assets/images/banner.jpg";
import Brands from "@/components/brands/Brands.vue";
import Heading from "@/components/base/Heading.vue";
import Categories from "@/components/categories/Categories.vue";
import ProductItem from "@/components/product/ProductItem.vue";
import ArrivalItem from "@/components/home/ArrivalItem.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay, EffectCube } from "swiper/modules";
import bgChistmas from "@assets/images/christmas-gift-box.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import ArrivalItemVue from "@/components/home/ArrivalItem.vue";
const breakpoints = {
  320: { slidesPerView: 2, spaceBetween: 10 },
  768: { slidesPerView: 2, spaceBetween: 16 },
  1024: { slidesPerView: 4, spaceBetween: 18 },
  1224: { slidesPerView: 5, spaceBetween: 20 },
};
const modules = [Navigation, Pagination, Autoplay, EffectCube];
</script>
<route lang="yaml">
  name: Home Page
  meta:
    layout: "default"
  </route>
<style lang="scss">
.app-home {
  .block-top-home {
    .menu-main {
      width: 230px;
      border-radius: 8px;
      box-shadow: $box-shadow-section;
    }
    .home-slider {
      flex: 1;
      box-shadow: $box-shadow-section;
    }
  }
  .home-slider {
    width: 100%;
    overflow: hidden;
    border-radius: 8px;
    #swiper-slider {
      .swiper-slider {
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      }

      .swiper-button-prev,
      .swiper-button-next {
        transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        display: none;

        &::after {
          color: $navigation-btn-color;
          font-size: 2rem;
          font-weight: 800;
        }

        &:hover {
          transform: scale(1.1);
        }

        @include min-lg {
          display: block;
        }
      }

      .swiper-pagination-bullet {
        &.swiper-pagination-bullet-active {
          width: 22px;
          border-radius: 4px;
          background-color: $azure;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
      }
    }

    img {
      width: 100%;
      object-fit: contain;
    }
  }
  .home-sale {
    background-color: $black;
  }
  .home-brand {
    box-shadow: $box-shadow-section;
  }
  .home-sale,
  .best-seller {
    box-shadow: $box-shadow-section;

    .list-product {
      #swiper-slider {
        .swiper-button-prev,
        .swiper-button-next {
          z-index: 1;

          &::after {
            font-size: 16px;
            font-weight: 600;
            padding: 10px 15px;
            box-shadow: $nav-slide-box-shadow;
            border-radius: 50%;
            color: $gray;
          }

          &.swiper-button-disabled {
            display: none;
          }
        }
      }
    }
  }
}
</style>