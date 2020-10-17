<template>
  <div class="c"
       @click="toggle"
       :class="{'gulu-checked': value}">
    <div class="heart"></div>
    <div class="heart2"></div>
    <span></span>
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
    };

    return { toggle };
  },
};
</script>

<style lang="scss">
.c {
  > span {
    position: absolute;
    z-index: 9;
    top: -14px;
    left: 6px;
    height: 42px;
    width: 42px;
    background: white;
    border-radius: 50%;
    transition: all 250ms;
    box-shadow: 0 0 5px #999
  }
  position: relative;
  &.gulu-checked {
    > span {
      left: 41px; // 当前父元素的100% - 白色球的宽度 - 2px空隙
    }
  }
  .heart {
    width: 50px;
    height: 50px;
    transform: rotate(45deg);
    background-color: #cfcee9;
    margin-top: 40px;
    margin-left: 20px;
    border-bottom-right-radius: 40px;
  }
  .heart::before {
    position: absolute;
    content: "";
    background-color: #cfcee9;
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    left: -25px;
  }
  .heart::after {
    position: absolute;
    content: "";
    background-color: #cfcee9;
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    top: -25px;
  }
  .heart2 {
    width: 42px;
    height: 42px;
    transform: rotate(45deg);
    background-color: #fff;
    position: absolute;
    left: 24px;
    top: 4px;
    border-bottom-right-radius: 35px;
  }
  .heart2::before {
    position: absolute;
    content: "";
    background-color: #fff;
    display: block;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    left: -25px;
  }
  .heart2::after {
    position: absolute;
    content: "";
    background-color: #fff;
    display: block;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    top: -25px;
  }
}
.gulu-checked .heart2,
.gulu-checked .heart2::after,
.gulu-checked .heart2::before {
  background: #ea5884;
}
.gulu-checked .heart,
.gulu-checked .heart::after,
.gulu-checked .heart::before {
  background: #de386a;
}
</style>
