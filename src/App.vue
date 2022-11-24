<script setup lang="ts">
import AppSidebar from '@/components/Sidebar/AppSidebar.vue'
</script>

<template>
  <div class="with-sidebar">
    <div>
      <AppSidebar class="sticky top-0 w-full"></AppSidebar>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>


<style>
.with-sidebar {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.with-sidebar> :first-child {
  flex-basis: 256px;
  flex-grow: 1;
}

.with-sidebar> :last-child {
  flex-basis: 0;
  flex-grow: 999;
  min-inline-size: 50%;
}
</style>
