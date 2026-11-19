<script setup lang="ts">
import {
  BUTTON_BASE,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  cn,
  type ButtonSize,
  type ButtonVariant,
} from "@vui/vui-core";
import { computed } from "vue";

// The class strings come from @vui/vui-core, the same ones the React button
// renders, so the two cannot drift apart.
const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant;
    size?: ButtonSize;
    type?: "button" | "submit" | "reset";
    class?: string;
  }>(),
  { variant: "default", size: "default", type: "button" },
);

const classes = computed(() =>
  cn(BUTTON_BASE, BUTTON_VARIANTS[props.variant], BUTTON_SIZES[props.size], props.class),
);
</script>

<template>
  <button :type="type" :class="classes">
    <slot />
  </button>
</template>
