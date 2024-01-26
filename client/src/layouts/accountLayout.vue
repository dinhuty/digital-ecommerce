<template>
    <div class="default-layout">
        <Header></Header>
        <div class="app-main">
            <Container>
                <div class="app-account">
                    <div class="sidebar">
                        <router-link class="sidebar-item tw-flex tw-gap-1" :to="item.path" v-for="item in sidebarItems"
                            :key="item.value">
                            <img class="tw-h-6 tw-w-6" :src="item.icon" :alt="item.value">
                            <span>{{ item.title }}</span>
                        </router-link>
                        <div class="sidebar-item tw-flex tw-gap-1">
                            <div class="sidebar__left tw-h-6 tw-w-6">
                                <img class="tw-h-full tw-w-full" :src="logoutSvg" alt="logout-icon">
                            </div>
                            <div class="sidebar__right">
                                Đăng xuất
                            </div>
                        </div>
                    </div>
                    <div class="main">
                        <router-view />
                    </div>
                </div>
            </Container>
        </div>
        <Footer></Footer>
    </div>
</template>
  
<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Container from "@components/base/Container.vue";
import Header from "@/components/base/Header.vue"
import Footer from "@/components/base/Footer.vue";
import bagSvg from "@assets/svg/account/bag.svg"
import clockSvg from "@assets/svg/account/clock.svg"
import heartSvg from "@assets/svg/account/heart.svg"
import logoutSvg from "@assets/svg/account/logout.svg"
import profileSvg from "@assets/svg/account/profile.svg"
import notificationSvg from "@assets/svg/account/notification.svg"

interface ISideBarItem {
    value: string,
    icon: string,
    title: string,
    path: string
}
const sidebarItems = ref<ISideBarItem[]>([
    {
        value: "user-info",
        icon: profileSvg,
        title: "Thông tin cá nhân",
        path: "/account",
    },
    {
        value: "clock-icon",
        icon: clockSvg,
        title: "Lịch sử mua hàng",
        path: "/account/order",
    },
    {
        value: "heart-icon",
        icon: heartSvg,
        title: "Sản phẩm yêu thích",
        path: "/account/wish-list",
    },
    {
        value: "notification-icon",
        icon: notificationSvg,
        title: "Thông báo",
        path: "/account/notification",
    }
]);

</script>

<style lang="scss" scoped>
.default-layout {
    .app-main {
        padding-top: 80px;
        min-height: calc(100vh - 354.8px);
    }
}

.app-account {
    display: flex;
    padding: 40px 0;
    gap: 20px;

    .sidebar {
        width: 250px;
        background-color: $gray-light;
        padding: 15px 10px;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        position: sticky;
        box-sizing: border-box;
        gap: 10px;
        padding-bottom: 60px;

        .sidebar-item {
            padding: 8px 15px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-weight: 500;
            font-size: 15px;
            border-radius: 4px;
            transition: all 0.22s ease-in-out;
            cursor: pointer;
            border: 0.5px solid transparent;

            &.is-active,
            &:hover {
                background-color: #fee;
                border: 0.5px solid $red;
                color: $red;

                img {
                    filter: invert(37%) sepia(93%) saturate(7471%) hue-rotate(355deg) brightness(76%) contrast(135%);
                }
            }

        }
    }

    .main {
        flex: 1;
    }
}
</style>