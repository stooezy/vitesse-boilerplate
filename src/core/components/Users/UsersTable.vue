<script setup lang="ts">
import { useUserTableStore } from '~/core/stores/userTable'

const userList = useUserTableStore()
const dataTable = computed(() => toReactive(userList.table))

onMounted(() => {
  userList.doGetUserList()
})
</script>

<template>
  <WTable
    :data-table="dataTable"
    @on-filter="(filters) => userList.setFilters(filters)"
  />
</template>

<route lang="yaml">
meta:
  layout: dashboard
</route>
