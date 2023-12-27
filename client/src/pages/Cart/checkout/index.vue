<template>
    <div class="app-checkout tw-flex tw-flex-col tw-gap-7 tw-pb-4">
        <BreadScrumb />
        <Container class="checkout-section tw-flex tw-gap-5 tw-flex-col">
            <div class="title">
                Kiểm tra thông tin
            </div>
            <div class="checkout-main tw-flex tw-justify-between">
                <div class="info-shipment tw-flex-1 tw-flex tw-flex-col tw-gap-4">
                    <div class="title">
                        Thông tin cá nhân
                    </div>
                    <div class="box-info">
                        <div class="box-info--name">
                            <label for="name">
                                Họ tên
                            </label>
                            <MyInput id="name" name="name" />
                        </div>
                        <div class="box-info--phone">
                            <label for="phone">
                                Số điện thoại
                            </label>
                            <MyInput id="phone" name="phone" />
                        </div>
                        <div class="box-info--address">
                            <label for="address">
                                Địa chỉ
                            </label>
                            <MyInput id="address" name="address" />
                        </div>
                        <div class="box-info--name">
                            <label for="name">
                                Số nhà
                            </label>
                            <MyInput id="name" />
                        </div>
                    </div>
                    <div class="coupon tw-flex tw-flex-col tw-gap-2">
                        <div class="coupon-title">
                            Mã giảm giá
                        </div>
                        <div class="box-input tw-flex tw-gap-5">
                            <MyInput id="name" placeholder="Mã giảm giá" class="tw-flex-1" />
                            <button class="hover:tw-opacity-75 tw-transition-all">
                                Áp dụng
                            </button>
                        </div>
                    </div>
                </div>
                <div class="info-payment tw-flex tw-flex-col tw-gap-5">
                    <div class="tw-relative tw-overflow-x-auto">
                        <table class="tw-w-full tw-text-sm tw-text-left ">
                            <thead
                                class="tw-text-xs tw-text-gray-700 tw-uppercase tw-bg-gray-50 dark:tw-bg-gray-700 dark:tw-text-gray-400">
                                <tr>
                                    <th class="tw-px-6 tw-py-3">
                                        Sản phẩm
                                    </th>
                                    <th class="tw-px-6 tw-py-3">
                                        Cấu hình
                                    </th>
                                    <th class="tw-px-6 tw-py-3">
                                        Giá
                                    </th>
                                    <th class="tw-px-6 tw-py-3">
                                        Tổng
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="tw-border-b" v-for="n in 4" :key="n">
                                    <td scope="row"
                                        class="tw-px-6 tw-py-4 tw-font-medium tw-line-clamp-1 tw-overflow-ellipsis">
                                        Apple MacBook Pro 17"
                                    </td>
                                    <td class="tw-px-6 tw-py-4">
                                        8GB/256GB
                                    </td>
                                    <td class="tw-px-6 tw-py-4">
                                        $2000x2
                                    </td>
                                    <td class="tw-px-6 tw-py-4">
                                        $4000
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="info-price">
                        <div class="total-price">
                            <span>
                                Tổng tiền sản phẩm
                            </span>
                            <span>
                                $16.000
                            </span>
                        </div>
                        <div class="discount-price">
                            <span>
                                Giảm giá
                            </span>
                            <span>
                                $0
                            </span>
                        </div>
                        <div class="shipment-price">
                            <span>
                                Phí vận chuyển
                            </span>
                            <span>
                                $0
                            </span>
                        </div>
                        <div class="total-payment">
                            <span>
                                Tổng thanh toán
                            </span>
                            <span>
                                $16.0000
                            </span>
                        </div>
                    </div>
                    <div class="payment-option tw-flex tw-gap-2 tw-flex-col">
                        <div class="title">
                            Hình thức thanh toán
                        </div>
                        <div class="tw-flex tw-items-center">
                            <input id="tw-default-radio-1" type="radio" value="" name="tw-default-radio"
                                class="tw-w-4 tw-h-4 tw-text-blue-600 tw-bg-gray-100 tw-border-gray-300 tw-focus:tw-ring-blue-500 dark:tw-focus:tw-ring-blue-600 dark:tw-ring-offset-gray-800 tw-focus:tw-ring-2 dark:tw-bg-gray-700 dark:tw-border-gray-600">
                            <label for="tw-default-radio-1"
                                class="tw-ms-2 tw-text-sm tw-font-medium tw-text-gray-900">VNPAY</label>
                        </div>
                        <div class="tw-flex tw-items-center">
                            <input checked id="tw-default-radio-2" type="radio" value="" name="tw-default-radio"
                                class="tw-w-4 tw-h-4 tw-text-blue-600 tw-bg-gray-100 tw-border-gray-300 tw-focus:tw-ring-blue-500 dark:tw-focus:tw-ring-blue-600 dark:tw-ring-offset-gray-800 tw-focus:tw-ring-2 dark:tw-bg-gray-700 dark:tw-border-gray-600">
                            <label for="tw-default-radio-2" class="tw-ms-2 tw-text-sm tw-font-medium tw-text-gray-900">Thanh
                                toán
                                khi nhận hàng</label>
                        </div>

                    </div>
                    <div class="btn-order tw-justify-self-end tw-self-end">
                        <button>Đặt hàng</button>
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>
  
<script lang="ts" setup>
import Container from "@/components/base/Container.vue";
import BreadScrumb from "@/components/base/BreadScrumb.vue";
import MyInput from "@components/common/MyInput/index.vue"
</script>
<route lang="yaml">
    name: Checkout
    meta:
      layout: "cartLayout"
  </route>
<style lang="scss">
.app-checkout {
    min-height: calc(100vh - 80px);

    .checkout-section {
        padding-bottom: 40px;

        .title {
            font-size: 18px;
            font-weight: 600;
        }

        .checkout-main {
            gap: 20px;

            .info-shipment {
                .title {
                    font-size: 16px;
                    font-weight: 600;
                }

                .box-info {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;

                    &>div {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;

                        label {
                            font-weight: 500;
                            font-size: 13px;
                        }
                    }
                }

                .coupon {
                    margin-top: 15px;
                    padding-top: 10px;
                    border-top: 1.5px solid $border-section;

                    .coupon-title {
                        font-weight: 500;
                    }

                    .box-input {
                        button {
                            padding: 8px 12px;
                            border-radius: 5px;
                            color: $white;
                            background-color: $red;
                            font-weight: 500;
                        }
                    }
                }
            }

            .info-payment {
                background-color: $white;
                padding: 10px;
                border-radius: 5px;

                table {
                    thead {
                        font-size: 13px;
                    }

                    tbody {
                        font-size: 13px;
                    }
                }

                .total-price,
                .discount-price,
                .shipment-price,
                .total-payment {
                    display: flex;
                    justify-content: space-between;
                }

                .total-price,
                .discount-price,
                .shipment-price {
                    font-size: 13px;
                    font-weight: 500;
                    padding: 4px 15px;
                }

                .total-payment {
                    font-size: 15px;
                    font-weight: 500;
                    line-height: 125%;
                    border-top: 1px solid $border-section;
                    padding: 10px 15px;

                    span:last-child {
                        font-weight: 600;
                        color: $red;
                    }
                }

                .payment-option {
                    padding: 10px 15px;

                    .title {
                        font-size: 14px;
                        font-weight: 500;
                    }
                }

                .btn-order {
                    button {
                        padding: 10px 15px;
                        color: $white;
                        background-color: $azure;
                        border-radius: 5px;
                        transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
                        font-weight: 500;

                        &:hover {
                            opacity: .75;
                        }
                    }
                }
            }
        }
    }
}
</style>