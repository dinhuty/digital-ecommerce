<template>
  <div class="menu-tree tw-flex tw-flex-col tw-w-full tw-overflow-hidden">
    <div
      class="menu-item hover:tw-bg-gray-300 tw-overflow-hidden tw-transition-all tw-flex tw-px-3 tw-py-3 tw-cursor-pointer tw-justify-between"
      v-for="item in menuItems"
      :key="item.id"
    >
      <div class="item-left tw-flex tw-gap-3 tw-flex-1">
        <div class="icon tw-w-5 tw-h-5">
          <img :src="item.icon" alt="" class="tw-w-full">
        </div>
        <div class="label tw-flex-1">{{ item.label }}</div>
      </div>
      <div class="item-right tw-w-5 tw-h-5" v-if="item.navIcon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
              fill="#0F0F0F"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import cellPhoneSvg from "@/assets/svg/categories/Category-CellPhone.svg";
import watchSvg from "@/assets/svg/categories/Category-SmartWatch.svg";
import cameraSvg from "@/assets/svg/categories/Category-Camera.svg";
import gamePadSvg from "@/assets/svg/categories/Category-Gamepad.svg";
import headPhoneSvg from "@/assets/svg/categories/Category-Headphone.svg";
import computerSvg from "@/assets/svg/categories/Category-Computer.svg";
import iconDelivery from "@assets/svg/icon-delivery.svg"
import iconSecure from "@assets/svg/icon-secure.svg"
import iconStore from "@/assets/svg/icon-store.svg"
interface IMenuItem {
  id?: number;
  icon?: string;
  label?: string;
  navIcon?: boolean;
}

const menuItems = ref<IMenuItem[]>([
  {
    id: 1,
    icon: cellPhoneSvg,
    label: "Điện thoại",
    navIcon: true,
  },
  {
    id: 2,
    icon: watchSvg,
    label: "Đồng hồ thông minh",
    navIcon: true,
  },
  {
    id: 3,
    icon: cameraSvg,
    label: "Máy ảnh",
    navIcon: true,
  },
  {
    id: 4,
    icon: computerSvg,
    label: "Laptop",
    navIcon: true,
  },
  {
    id: 5,
    icon: gamePadSvg,
    label: "Pc-Computer",
    navIcon: true,
  },
  {
    id: 6,
    icon: headPhoneSvg,
    label: "Phụ kiện",
    navIcon: true,
  },
  {
    id: 7,
    icon: iconStore,
    label: "Hệ thống cửa hàng",
    navIcon: false,
  },
  {
    id: 8,
    icon: iconDelivery,
    label: "Vận chuyển",
    navIcon: false,
  },
  {
    id: 9,
    icon: iconSecure,
    label: "Chính sách",
    navIcon: false,
  },
]);
</script>

<script lang="ts">
export default {
  name: "Menu",
};
</script>

<style lang="scss" scoped>
.menu-tree{
  .menu-item{
    font-size: 13px;
    font-weight: 600;
  }
}
</style>
