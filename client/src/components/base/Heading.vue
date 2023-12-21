<template>
  <div class="app-heading tw-flex tw-justify-between">
    <div class="heading-left tw-flex tw-gap-20 tw-items-center">
      <div class="title title-event tw-flex tw-gap-2" v-if="eventTitle">
        <div class="text">
          {{ eventTitle }}
        </div>
      </div>
      <div class="title tw-flex tw-flex-col tw-gap-4" v-else>
        <div class="title-top tw-flex tw-flex-row tw-gap-4 tw-items-center">
          <div class="rectangle tw-h-8 tw-w-4 tw-bg-red tw-rounded-sm"></div>
          <div class="text tw-font-bold tw-text-sm tw-text-red">
            {{ toptitle }}
          </div>
        </div>
        <div class="title-bot tw-text-xl tw-font-bold">{{ title }}</div>
      </div>
      <div class="heading-timer tw-flex tw-gap-3" v-if="timer">
        <div class="hour tw-flex tw-flex-col tw-gap-1 tw-items-center">
          <div class="number tw-bg-yellow">
            {{ formattedTime.hours }}
          </div>
          <div class="title tw-text-white">Hours</div>
        </div>
        <span class="tw-text-white"> : </span>
        <div class="minute tw-flex tw-flex-col tw-gap-1 tw-items-center">
          <div class="number tw-bg-yellow">
            {{ formattedTime.minutes }}
          </div>
          <div class="title tw-text-white">Minutes</div>
        </div>
        <span class="tw-text-white"> : </span>
        <div class="seconds tw-flex tw-flex-col tw-gap-1 tw-items-center">
          <div class="number tw-bg-yellow">
            {{ formattedTime.seconds }}
          </div>
          <div class="title tw-text-white">Seconds</div>
        </div>
      </div>
    </div>
    <div class="heading-right tw-flex tw-flex-col tw-justify-end">
      <div
        class="heading-arrow tw-flex tw-gap-1 tw-pr-2 tw-font-medium tw-cursor-pointer tw-text-red hover:tw-opacity-70 tw-transition-all"
        v-if="allowViewAll"
      >
        {{ console.log("AL", allowViewAll, ">>", title) }}
        <span> Xem tất cả </span>
        <img :src="arrowRight" class="tw-w-4" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import arrowLeft from "@assets/svg/arrow-left.svg";
import arrowRight from "@assets/svg/arrow-right.svg";
interface IProps {
  toptitle?: string;
  title?: string;
  allowViewAll?: boolean;
  timer?: boolean;
  eventTitle?: string;
}
const { toptitle, title, allowViewAll, timer, eventTitle } = withDefaults(
  defineProps<IProps>(),
  {
    toptitle: "",
    title: "",
    allowViewAll: true,
    timer: false,
  }
);

const timeRemaining = ref<number>(36000);

const formattedTime = computed(() => {
  const hours: number = Math.floor(timeRemaining.value / 3600);
  const minutes: number = Math.floor((timeRemaining.value % 3600) / 60);
  const seconds: number = timeRemaining.value % 60;

  return {
    hours: hours < 10 ? `0${hours}` : hours,
    minutes: minutes < 10 ? `0${minutes}` : minutes,
    seconds: seconds < 10 ? `0${seconds}` : seconds,
  };
});

const interval = setInterval(() => {
  timeRemaining.value -= 1;

  if (timeRemaining.value === 0) {
    timeRemaining.value = 36000;
  }
}, 1000);

onUnmounted(() => {
  clearInterval(interval);
});
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Heading",
});
</script>


<style scoped lang="scss">
.app-heading {
  .heading-left {
    .title.title-event {
      color: $yellow;
      font-size: 24px;
      font-weight: 700;
    }
    .heading-timer {
      .number {
        padding: 10px;
        aspect-ratio: 1/1;
        font-weight: 600;
        border-radius: 0.5rem;
      }
      .title {
        font-size: 14px;
      }
      span{
        padding-top: 10px;
        font-weight: bold;
      }
    }
  }
}
</style>