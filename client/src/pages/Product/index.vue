<template>
    <div class="app-mobile-list tw-flex tw-flex-col tw-gap-5 tw-pb-4">
        <BreadScrumb />
        <Container class="main tw-flex tw-gap-8 tw-flex-col">
            <div class="ads tw-flex tw-justify-center">
                <img :src="noen_1" alt="">
            </div>
            <div class="mobile-selling tw-rounded-xl tw-p-4 tw-flex tw-flex-col tw-gap-4">
                <Heading event-title="FLASH SALE" :timer="true" />
                <div class="list-product">
                    <swiper :modules="modules" :slides-per-view="3" :navigation="true" :space-between="24"
                        id="swiper-slider" :breakpoints="breakpoints">
                        <swiper-slide class="swiper-item" v-for="n in 8" :key="n">
                            <!-- <product-item /> -->
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div class="main-product-list tw-flex tw-gap-4 tw-flex-col">
                <div class="filter-box tw-flex tw-flex-col tw-gap-2">
                    <div class="title">
                        Lọc sản phẩm
                    </div>
                    <div class="filter-main tw-flex tw-flex-wrap tw-gap-3">
                        <SelectBox v-model="selectedItem.brand" title="Thương hiệu" :items="phoneBrands" />
                        <SelectBox v-model="selectedItem.option" title="Cấu hình" :items="phoneOptions" />
                        <SelectBox v-model="selectedItem.price" title="Giá bán" :items="phonePrices" />
                    </div>
                </div>
                <div class="sort-box tw-flex tw-flex-col tw-gap-2">
                    <div class="title">
                        Sắp xếp theo
                    </div>
                    <div class="sort-main tw-flex tw-flex-wrap tw-gap-3">
                        <div class="sort-item tw-rounded-lg tw-py-2 tw-pl-3 tw-pr-3 hover:tw-opacity-80 tw-transition-all">
                            Giá tăng dần
                        </div>
                        <div class="sort-item tw-rounded-lg tw-py-2 tw-pl-3 tw-pr-3 hover:tw-opacity-80 tw-transition-all">
                            Giá giảm dần
                        </div>
                        <div class="sort-item tw-rounded-lg tw-py-2 tw-pl-3 tw-pr-3 hover:tw-opacity-80 tw-transition-all">
                            Mới nhất
                        </div>
                    </div>
                </div>
                <div class="product-box tw-grid tw-grid-cols-5 tw-gap-5">
                    <div v-for="product in data?.products" :key="product.id">
                        <product-item :product="product" />
                    </div>
                </div>
                <button
                    class="btn-view tw-mt-5 tw-cursor-pointer tw-self-center tw-p-3 tw-bg-red tw-text-white hover:tw-opacity-70 tw-transition-all tw-rounded-sm tw-text-13px">
                    Xem thêm sản phẩm trang
                </button>

            </div>
        </Container>
    </div>
</template>
     
<script lang="ts" setup>
import MyInput from "@/components/common/MyInput/index.vue"
import SelectBox from "@components/common/SelectBox.vue"
import ProductItem from "@/components/product/ProductItem.vue";
import Container from "@/components/base/Container.vue";
import BreadScrumb from "@/components/base/BreadScrumb.vue";
import noen_1 from "@/assets/images/gif/noen-1.gif"
import Heading from "@/components/base/Heading.vue";
import { phoneBrands, phoneOptions, phonePrices } from "@utils/filter-sort/filter"
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay, EffectCube } from "swiper/modules";
import { breakpoints } from "@utils/breackpoints"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import { useListProducts } from "@/api/product/query";
import { IParams } from "@/types/product.types"

const modules = [Navigation, Pagination, Autoplay, EffectCube];

interface IFilter {
    displayName?: string,
    value?: string,
    type?: string
}
interface ISelectItem {
    brand?: string | IFilter;
    option?: string | IFilter;
    price?: string | IFilter;
}
const selectedSort = ref<string>("0")
const selectedItem = ref<ISelectItem>({
    brand: '',
    option: '',
    price: '',
})

const route = useRoute()
const router = useRouter()

const {
    query: { page }
} = useRoute()
const params: IParams = {
    page: page ? parseInt(page as string) : 1
}
const { isLoading, isError, data, error, isPreviousData } = useListProducts(params)

</script>
<route lang="yaml">
    name: Tất cả sản phẩm
    meta:
      layout: "default"
  </route>
<style lang="scss">
.app-mobile-list {

    .mobile-selling {
        background-color: #013c34;

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

    .main-product-list {
        .title {
            font-size: 16px;
            font-weight: 600;
            line-height: 125%;

        }

        .sort-box {
            .sort-main {
                font-size: 13px;

                .sort-item {
                    border: 1px solid #e5e7eb;
                    background-color: #f3f4f6;
                    cursor: pointer;

                    &.box-active {
                        border: 2px solid #4b4b4b5d;
                        color: #000;
                        font-weight: 600;
                    }
                }
            }
        }
    }

}
</style>