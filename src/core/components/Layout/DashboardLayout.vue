<script setup lang="ts">
import { useAppStore } from '~/core/stores/app'
const navigation = useAppStore()
</script>

<template>
  <div
    class="flex h-screen bg-gray-50 dark:bg-gray-900"
    :class="{ 'overflow-hidden': navigation.isSideMenuOpen}"
  >
    <SideBar />
    <div class="flex flex-col flex-1">
      <TopBar />
      <main class="h-full pb-16 overflow-y-auto">
        <div class="container px-6 mx-auto grid">
          <!-- content -->
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
