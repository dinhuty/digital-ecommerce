<template>
  <div class="app-header tw-bg-black">
    <Container class="tw-h-20">
      <header
        class="tw-w-100 tw-flex tw-justify-between tw-h-full tw-items-center tw-gap-8"
      >
        <div
          class="header-left tw-h-full tw-flex tw-justify-center tw-items-center"
        >
          <router-link to="/" class="header-logo tw-h-12 tw-w-auto">
            <img :src="Logo" alt="" class="tw-w-auto tw-h-full" />
          </router-link>
        </div>
        <div class="header-search tw-flex-1">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm"
            class="tw-h-11 tw-rounded tw-w-full tw-px-3 focus:tw-border-none"
          />
        </div>
        <div class="header-right">
          <div class="header-item tw-h-full tw-flex tw-gap-4">
            <router-link
              to="/cart"
              class="header-right-box tw-flex tw-gap-2 tw-items-center tw-flex-row tw-text-white"
              v-for="item in menuItems"
              :key="item.value"
            >
              <div class="box-icon">
                <font-awesome-icon :icon="item.icon" />
              </div>
              <div class="box-text tw-flex tw-flex-col tw-font-medium">
                <span>
                  {{ item.fText }}
                </span>
                <span>
                  {{ item.lText }}
                </span>
              </div>
            </router-link>
            <router-link
              to="/login"
              class="header-right-box tw-flex tw-gap-2 tw-items-center tw-flex-row tw-text-white"
            >
              <div class="box-icon">
                <font-awesome-icon icon="fa-regular fa-user" />
              </div>
              <div class="box-text tw-flex tw-flex-col tw-font-medium">
                <span> Đăng </span>
                <span> nhập </span>
              </div>
            </router-link>
          </div>
        </div>
      </header>
    </Container>
  </div>
</template>
  
<script lang="ts" setup>
import Container from "@components/base/Container.vue";
import Logo from "@assets/svg/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ICategory, IHeaderItem } from "@/types/category.types";
const menuItems= ref<IHeaderItem[]>([
  {
    value: "help",
    icon: "headset",
    fText: "Hotline",
    lText: "1900.9999",
    path: "/",
  },
  {
    value: "order",
    icon: "calendar",
    fText: "Tra cứu",
    lText: "đơn hàng",
    path: "/",
  },
  {
    value: "cart",
    icon: "cart-plus",
    fText: "Giỏ",
    lText: "hàng",
    path: "/",
  },
]);

</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

  
  <style scoped lang="scss">
.app-header {
  header {
    .header-search {
      input {
        outline: none;
        &::placeholder {
          font-size: 0.85rem;
        }
      }
    }
    .header-right {
      .header-item {
        .header-right-box {
          font-size: 13px;
          line-height: 125%;
        }
      }
    }
  }
}
</style>