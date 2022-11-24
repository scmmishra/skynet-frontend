<script lang="ts" setup>
import Card from '../Base/Card.vue';
</script>

<template>
  <Card class="card py-20 my-8">
    <div class="max-w-[450px] mx-auto flex items-center gap-8">
      <img src="/error-robot.png" class="h-40 flex-shrink-0" />
      <div class="space-y-2">
        <h1 class="text-2xl font-bold">Server unavailable :(</h1>
        <p class="text-black-600">
          We're unable to reach the server, our engineerings are working to fix this.
          Please check back in some time
        </p>
      </div>
    </div>
  </Card>
</template>
