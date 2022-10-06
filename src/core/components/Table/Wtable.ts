export interface WTableItems {
  label: string
  data: string
  sortable: boolean
}

export enum ETableSort {
  desc = 'desc',
  asc = 'asc',
}

export interface WTableFilter {
  keyword: string
  page: number
  totalData: number
  totalPerPage: number
  sortBy: string
  sort: ETableSort
}

export interface WDataTable {
  properties: WTableItems[]
  filters: WTableFilter
  items: Array<any>
}
