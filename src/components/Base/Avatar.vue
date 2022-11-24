<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Avatar",
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    hasBadge: {
      type: Boolean,
      default: false,
    }
  }
})
</script>

<template>
  <button class="relative">
    <img :src="image" :alt="name" :aria-label="name" :title="name" class="h-6 w-6 rounded-full">
    <span v-if="hasBadge"
      class="absolute h-2.5 w-2.5 -bottom-px -right-px bg-emerald-400 border-2 border-white rounded-full"></span>
  </button>
</template>
