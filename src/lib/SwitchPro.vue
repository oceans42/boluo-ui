<template>
  <div class="container"
       @click="toggle"
       :class="{'gulu-checked': value}">
    <div class="heart-outer"></div>
    <div class="heart-inner"></div>
    <span class="circle"
          :style="[
      {'animation': !isClick ? 'none' : isOpen ? 'move-to-right linear 500ms': 'move-to-left linear 500ms'},
      {'left':isOpen ? '38px':'9px'}
    ]">
    </span>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
      isOpen.value = !isOpen.value;
      isClick.value = true;
    };
    const isOpen = ref(true);
    const isClick = ref(false);

    return { toggle, isOpen, isClick };
  },
};
</script>

<style lang="scss">
.container {
  position: relative;
  width: 75px;
  > .heart-outer {
    width: 40px;
    height: 40px;
    transform: rotate(45deg);
    background-color: #cfcee9;
    margin-top: 40px;
    margin-left: 20px;
    border-bottom-right-radius: 33px;
    transition: all 500ms;
    &::before {
      position: absolute;
      content: "";
      background-color: #cfcee9;
      display: block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      left: -20px;
      transition: all 500ms;
    }
    &::after {
      position: absolute;
      content: "";
      background-color: #cfcee9;
      display: block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      top: -20px;
      transition: all 500ms;
    }
  }
  > .heart-inner {
    width: 33px;
    height: 33px;
    transform: rotate(45deg);
    background-color: #fff;
    position: absolute;
    left: 23px;
    top: 3px;
    border-bottom-right-radius: 28px;
    transition: all 500ms;
    &::before {
      position: absolute;
      content: "";
      background-color: #fff;
      display: block;
      width: 33px;
      height: 33px;
      border-radius: 50%;
      left: -19px;
      transition: all 500ms;
    }
    &::after {
      position: absolute;
      content: "";
      background-color: #fff;
      display: block;
      width: 33px;
      height: 33px;
      border-radius: 50%;
      top: -20px;
      transition: all 500ms;
    }
  }
  > .circle {
    position: absolute;
    z-index: 9;
    top: -11px;
    height: 33px;
    width: 33px;
    background: white;
    border-radius: 50%;
    transition: all 250ms;
    box-shadow: 0 0 5px #999;
  }
  &.gulu-checked {
    > .heart-outer,
    > .heart-outer::after,
    > .heart-outer::before {
      background: #de386a;
    }
    > .heart-inner,
    > .heart-inner::after,
    > .heart-inner::before {
      background: #ea5884;
    }
  }
  @keyframes move-to-left {
    0% {
      top: -11px;
      left: 38px;
    }
    50% {
      top: -2px;
      left: 24px;
    }
    100% {
      top: -11px;
      left: 9px;
    }
  }
  @keyframes move-to-right {
    0% {
      top: -11px;
      left: 9px;
    }
    50% {
      top: 0px;
      left: 24px;
    }
    100% {
      top: -11px;
      left: 38px;
    }
  }
}
</style>
