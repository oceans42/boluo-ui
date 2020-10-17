<template>
  <div>
    <h2>示例1</h2>
    <Switch v-model:value="bool" />
    <h2>示例2</h2>
    <SwitchPro v-model:value="bool2" />
  </div>
</template>
<script lang="ts">
import Switch from "../lib/Switch.vue";
import SwitchPro from "../lib/SwitchPro.vue";
import { ref } from "vue";
export default {
  components: { Switch, SwitchPro },
  setup() {
    const bool = ref(true);
    const bool2 = ref(true);
    return { bool, bool2 };
  },
};
</script>