<demo>
心型 Switch
</demo>
<template>
  <SwitchPro v-model:value="bool" />
</template>

<script lang="ts">
import SwitchPro from "../lib/SwitchPro.vue";
import { ref } from "vue";
export default {
  components: {
    SwitchPro,
  },
  setup() {
    const bool = ref(true);
    return {
      bool,
    };
  },
};
</script>