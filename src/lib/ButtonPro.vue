<template>
  <button class="sparks-button"
          :class="classes"
          :disabled="disabled">
    <span v-if="loading"
          class="sparks-loadingIndicator"></span>
    <slot />
  </button>
</template>
<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`sparks-theme-${theme}`]: theme,
        [`sparks-size-${size}`]: size,
        [`sparks-level-${level}`]: level,
      };
    });
    return { classes };
  },
};
</script>
<style lang="scss">
$h: 33px;
$border-color: #d9d9d9;
$color: #fff;
$blue: #40a9ff;
$radius: 20px;
$red: red;
$grey: grey;
.sparks-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 20px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  letter-spacing: 0.5px;
  background: rgb(67, 59, 155);
  background: linear-gradient(
    90deg,
    rgba(67, 59, 155, 1) 0%,
    rgba(86, 80, 200, 1) 26%,
    rgba(105, 100, 244, 1) 51%,
    rgba(80, 68, 202, 1) 77%,
    rgba(67, 59, 155, 1) 100%
  );
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  // &:hover,
  // &:focus {
    // color: $blue;
    // border-color: $blue;
  // }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.sparks-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.sparks-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.sparks-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.sparks-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.sparks-theme-button {
    &.sparks-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.sparks-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.sparks-theme-link {
    &.sparks-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.sparks-theme-text {
    &.sparks-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.sparks-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.sparks-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.sparks-theme-link,
  &.sparks-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .sparks-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: sparks-spin 1s infinite linear;
  }
}
@keyframes sparks-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>