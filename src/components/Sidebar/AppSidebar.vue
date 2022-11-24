<script lang="ts" setup>
import Avatar from "../Base/Avatar.vue";
import { Settings, Gauge, Archive, TrendingUp, Library } from "lucide-vue-next";
import SidebarItem from "./SidebarItem.vue";
import SidebarGroup from "./SidebarGroup.vue";

const orgName = "DeepSource"

</script>

<template>
  <div class="flex flex-col h-screen p-3 pt-5 bg-white border-r border-gray-100 drop-shadow-sm">
    <div class="flex items-center justify-between p-2">
      <button class="flex items-center p-1 rounded-lg gap-x-2 hover:bg-gray-100">
        <div class="w-6 h-6 rounded-lg bg-gradient-to-t bg-black-999 p-1">
          <img src="/deepsource.svg" alt="DeepSource logo" />
        </div>
        <span class="text-sm font-normal leading-none">{{ orgName }}</span>
      </button>
      <Avatar image="https://panoptic.in/files/sepia.jpeg" name="Shivam Mishra" has-badge class="m-1"></Avatar>
    </div>
    <div class="flex flex-col justify-between flex-grow py-5 space-y-8 overflow-y-auto">
      <div class="space-y-8">
        <SidebarGroup title="Insights">
          <SidebarItem title="Overview">
            <Gauge class="w-4 h-4" />
          </SidebarItem>
          <SidebarItem title="Metrics" badge-text="3" tone="negative">
            <TrendingUp class="w-4 h-4" />
          </SidebarItem>
          <SidebarItem title="Archive">
            <Archive class="w-4 h-4" />
          </SidebarItem>
        </SidebarGroup>
      </div>
      <SidebarGroup>
        <!-- <SidebarItem title="Search" hint="⌘ + K">
          <Search class="w-4 h-4" />
        </SidebarItem> -->
        <SidebarItem title="Settings" link="/settings">
          <Settings class="w-4 h-4" />
        </SidebarItem>
        <SidebarItem title="Learn" badge-text="Coming Soon">
          <Library class="w-4 h-4" />
        </SidebarItem>
      </SidebarGroup>
    </div>
  </div>
</template>
