<template>
  <Container class="tw-py-4">
    <div class="app-home tw-flex tw-flex-col tw-gap-4">
      <div class="block-top-home tw-bg-white tw-flex tw-gap-5 tw-justify-between">
        <div class="menu-main">
          <Menu />
        </div>
        <div class="home-slider tw-rounded-lg tw-flex tw-justify-center tw-items-center">
          <swiper :modules="modules" :slides-per-view="1" :space-between="10" :pagination="{ clickable: true }"
            :navigation="true" id="swiper-slider">
            <swiper-slide class="swiper-item tw-overflow-hidden" v-for="n in 6" :key="n">
              <img :src="banner" alt="" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div
        class="home-category tw-bg-white tw-rounded-xl tw-overflow-hidden tw-flex tw-flex-col tw-gap-6 tw-px-4 tw-py-5">
        <Heading toptitle="Categories" :allowViewAll="false" title="Categories" />
        <div class="list-category">
          <Categories />
        </div>
      </div>

      <div class="home-sale tw-rounded-xl tw-overflow-hidden tw-flex tw-flex-col tw-gap-6 tw-px-4 tw-py-5" :style="{
        backgroundImage: `url(${bgChistmas})`,
        backgroundPosition: '0% 0%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }">
        <Heading event-title="HOT SALE GIÁ SỐC" :timer="true" />
        <div class="list-product">
          <swiper :modules="modules" :slides-per-view="3" :navigation="true" :space-between="24" id="swiper-slider"
            :breakpoints="breakpoints">
            <swiper-slide class="swiper-item" v-for="product in products" :key="product.id">
              <product-item :product="product" :path="product.slug" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <img src="" alt="" />
      <div class="best-seller tw-bg-white tw-rounded-xl tw-overflow-hidden tw-flex tw-flex-col tw-gap-6 tw-px-4 tw-py-5">
        <Heading toptitle="This Month" title="Best Selling Product" />
        <div class="list-product">
          <swiper :modules="modules" :slides-per-view="3" :navigation="true" :space-between="24" id="swiper-slider"
            :breakpoints="breakpoints">
            <swiper-slide class="swiper-item" v-for="product in products" :key="product.id">
              <product-item :product="product" :path="product.slug" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="home-brand tw-rounded-xl tw-bg-white tw-flex tw-flex-col tw-gap-6 tw-px-4 tw-py-5">
        <Heading toptitle="Brands" title="Brands" />
        <Brands />
      </div>
      <div class="best-seller tw-bg-white tw-rounded-xl tw-overflow-hidden tw-flex tw-flex-col tw-gap-6 tw-px-4 tw-py-5">
        <Heading toptitle="Sản phẩm khác" title="Có thể bạn sẽ thích" :allow-view-all="false" />
        <div class="list-product tw-grid tw-grid-cols-5 tw-gap-5">
          <div class="product-item" v-for="product in products" :key="product.id">
            <product-item :product="product" :path="product.slug" />
          </div>
        </div>
        <div
          class="btn-view tw-self-center tw-p-3 tw-bg-red tw-text-white hover:tw-opacity-70 tw-transition-all tw-rounded-sm">
          Xem thêm sản phẩm
        </div>
      </div>
    </div>
  </Container>
</template>
  
<script lang="ts" setup>
import Menu from "@/components/categories/Menu.vue";
import Container from "@components/base/Container.vue";
import banner from "@/assets/images/banner.jpg";
import Brands from "@/components/brands/Brands.vue";
import Heading from "@/components/base/Heading.vue";
import Categories from "@/components/categories/Categories.vue";
import ProductItem from "@/components/product/ProductItem.vue";
import { breakpoints } from "@utils/breackpoints"
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay, EffectCube } from "swiper/modules";
import bgChistmas from "@assets/images/christmas-gift-box.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import { SwiperModule } from "swiper/types";
import { IProduct } from "@/types/product.types";
import { useListProductsSale } from "@/api/product/query";

const modules: SwiperModule[] = [Navigation, Pagination, Autoplay, EffectCube];

// testing homepage
const product: IProduct = {
  id: "c7626d43-949b-4212-9084-86f747c6624f",
  name: "iPhone 15 Pro MAx",
  description: "iphone 15 pro max desc",
  thumbUrl: "https://cdn.tgdd.vn/Products/Images/42/305658/TimerThumb/iphone-15-pro-max-(4).jpg",
  slug: "iphone-15-pro-max",
  basePrice: 24900000,
  brandName: "apple",
  categoryName: "mobile"
}
const { data: products } = useListProductsSale(10)

</script>
<route lang="yaml">
  name: Trang chủ
  meta:
    layout: "default"
</route>
<style lang="scss" >
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
      .swiper {
        padding: 0 6px;
      }

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