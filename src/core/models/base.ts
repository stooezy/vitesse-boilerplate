export namespace MBase {
  export interface IBaseResponse<T> {
    message: string
    data: T
    current_page?: number
    limit?: number
    total_page?: number
    total_data?: number
  }

  export interface IBaseBody {
    limit: string
    offset: string
    filters: Object
    order: string
    sort: ESort
  }

  export enum ESort {
    desc = 'desc',
    asc = 'asc',
  }
}
