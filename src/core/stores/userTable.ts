import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Ref } from 'vue'
import type { WDataTable, WTableFilter } from '~/core/components/Table/Wtable'
import { ETableSort } from '~/core/components/Table/Wtable'
import { MBase } from '~/core/models'
import type { MAuth } from '~/core/models'
import { UserListService } from '~/core/services/user'

export const useUserTableStore = defineStore('userTable', () => {
  const _table: Ref<WDataTable> = ref({
    properties: [
      {
        label: 'Full Name',
        data: 'full_name',
        sortable: false,
      },
      {
        label: 'username',
        data: 'username',
        sortable: false,
      },
      {
        label: 'email',
        data: 'email',
        sortable: false,
      },
      {
        label: 'Phone',
        data: 'phone_number',
        sortable: false,
      },
    ],
    items: [],
    filters: {
      keyword: '',
      page: 1,
      sort: ETableSort.asc,
      sortBy: '',
      totalData: 0,
      totalPerPage: 10,
    },
  })

  const service = new UserListService()
  const doGetUserList = async () => {
    const { data, error } = await service.create({
      filters: [],
      limit: `${_table.value.filters.totalPerPage}`,
      offset: `${_table.value.filters.page}`,
      order: '',
      sort: MBase.ESort.asc,
    })
    if (!error.value) {
      const response: MAuth.IResponse = data.value?.data
      _table.value.items = response as any
      _table.value.filters.totalData = data.value?.total_data as number
    }
  }

  const setFilters = (filter: WTableFilter) => {
    _table.value.filters = filter
    doGetUserList()
  }

  const table = computed(() => _table)
  return {
    table,
    doGetUserList,
    setFilters,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserTableStore, import.meta.hot))
