<script lang="ts" setup>
import { useRoute } from "vue-router";

import Avatar from "../Base/Avatar.vue";
import {
  Settings,
  Gauge,
  LampFloor,
  TrendingUp,
  Library,
  FileText,
} from "lucide-vue-next";
import SidebarItem from "./SidebarItem.vue";
import SidebarGroup from "./SidebarGroup.vue";

const route = useRoute();

const orgName = "DeepSource";
</script>

<template>
  <div
    class="flex flex-col h-screen p-3 pt-5 bg-white border-r border-gray-100 drop-shadow-sm"
  >
    <div class="flex items-center justify-between p-2">
      <button
        class="flex items-center p-1 rounded-lg gap-x-2 hover:bg-gray-100"
      >
        <div class="w-6 h-6 rounded-lg bg-gradient-to-t bg-black-999 p-1">
          <img src="/deepsource.svg" alt="DeepSource logo" />
        </div>
        <span class="text-sm font-normal leading-none">{{ orgName }}</span>
      </button>
      <Avatar
        image="https://panoptic.in/files/sepia.jpeg"
        name="Shivam Mishra"
        has-badge
        class="m-1"
      ></Avatar>
    </div>
    <div
      class="flex flex-col justify-between flex-grow py-5 space-y-8 overflow-y-auto"
    >
      <div class="space-y-8">
        <SidebarGroup title="Insights">
          <SidebarItem
            title="Overview"
            link="/"
            :active="route.name === 'home'"
          >
            <Gauge class="w-4 h-4" />
          </SidebarItem>
          <SidebarItem
            title="Metrics"
            link="/metrics"
            :active="route.name === 'metrics'"
          >
            <TrendingUp class="w-4 h-4" />
          </SidebarItem>
          <SidebarItem title="Routes" link="/routes">
            <FileText class="w-4 h-4" />
          </SidebarItem>
          <SidebarItem title="Lighthouse" disabled badge-text="Soon">
            <LampFloor class="w-4 h-4" />
          </SidebarItem>
        </SidebarGroup>
      </div>
      <SidebarGroup>
        <SidebarItem title="Settings" link="/settings">
          <Settings class="w-4 h-4" />
        </SidebarItem>
        <SidebarItem title="Learn" link="learn">
          <Library class="w-4 h-4" />
        </SidebarItem>
      </SidebarGroup>
    </div>
  </div>
</template>
