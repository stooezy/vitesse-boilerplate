import type { WDataTable } from '~/core/components/Table/Wtable'

export const useMyTable = (table: WDataTable) => {
  const data = reactive(table)
  return {
    data,
  }
}
