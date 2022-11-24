<script lang="ts" setup>
import Avatar from "./Avatar.vue";
import { Settings, Gauge, Archive, TrendingUp, Library } from "lucide-vue-next";
import SidebarItem from "./SidebarItem.vue";
import SidebarGroup from "./SidebarGroup.vue";

const orgName = "DeepSource"

</script>

<template>
  <div class="bg-white h-screen p-3 pt-5 flex flex-col drop-shadow-sm border-r border-gray-100">
    <div class="flex justify-between items-center p-2">
      <button class="flex gap-x-2 items-center hover:bg-gray-100 p-1 rounded-lg">
        <div class="rounded-lg bg-gradient-to-t from-indigo-400 to-indigo-200 w-6 h-6"></div>
        <span class="font-normal text-sm leading-none">{{ orgName }}</span>
      </button>
      <Avatar image="https://panoptic.in/files/sepia.jpeg" name="Shivam Mishra" has-badge class="m-1"></Avatar>
    </div>
    <div class="space-y-8 flex-grow overflow-y-auto py-5 flex flex-col justify-between">
      <div class="space-y-8">
        <SidebarGroup title="Insights">
          <SidebarItem title="Overview">
            <Gauge class="h-4 w-4" />
          </SidebarItem>
          <SidebarItem title="Metrics" badge-text="3" tone="danger">
            <TrendingUp class="h-4 w-4" />
          </SidebarItem>
          <SidebarItem title="Archive">
            <Archive class="h-4 w-4" />
          </SidebarItem>
        </SidebarGroup>
      </div>
      <SidebarGroup>
        <!-- <SidebarItem title="Search" hint="⌘ + K">
          <Search class="h-4 w-4" />
        </SidebarItem> -->
        <SidebarItem title="Settings" link="/settings">
          <Settings class="h-4 w-4" />
        </SidebarItem>
        <SidebarItem title="Learn" badge-text="Coming Soon">
          <Library class="h-4 w-4" />
        </SidebarItem>
      </SidebarGroup>
    </div>
  </div>
</template>
