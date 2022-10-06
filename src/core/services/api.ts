import type { UseFetchOptions, UseFetchReturn } from '@vueuse/core'
import { useMyFetch } from '~/composables/useMyFetch'
import type { MBase } from '~/core/models'

/* eslint-disable no-restricted-syntax */
export const cleanQueryToString = (params: any) => {
  const obj = { ...params }
  for (const propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '' || obj[propName].length === 0)
      delete obj[propName]
  }

  return Object.keys(obj)
    .map(key => `${encodeURIComponent(key)}=${params[key]}`)
    .join('&')
}

export interface ICrudInterface {
  getList<A = any>(body?: A, options?: UseFetchOptions): Promise<UseFetchReturn<MBase.IBaseResponse<any>>>

  getListById<A=string, B = any>(id: A, body?: B, options?: UseFetchOptions): Promise<UseFetchReturn<MBase.IBaseResponse<any>>>

  create<A = any>(body?: A, options?: UseFetchOptions): Promise<UseFetchReturn<MBase.IBaseResponse<any>>>

  createById<A = string, B = any>(id: A, body?: B, options?: UseFetchOptions): Promise<UseFetchReturn<MBase.IBaseResponse<any>>>

  update<A = any>(body?: A, options?: UseFetchOptions): Promise<UseFetchReturn<MBase.IBaseResponse<any>>>

  updateById<A = string, B = any>(id: A, body?: B, options?: UseFetchOptions): Promise<UseFetchReturn<MBase.IBaseResponse<any>>>

  delete<A = any>(body?: A, options?: UseFetchOptions): Promise<UseFetchReturn<MBase.IBaseResponse<any>>>

  deleteById<A = string, B = any>(id: A, body?: B, options?: UseFetchOptions): Promise<UseFetchReturn<MBase.IBaseResponse<any>>>

  find<A = any>(body?: A, options?: UseFetchOptions): Promise<UseFetchReturn<MBase.IBaseResponse<any>>>

  findById<A = string, B = any>(id: A, body?: B, options?: UseFetchOptions): Promise<UseFetchReturn<MBase.IBaseResponse<any>>>
}

export abstract class BaseApiService implements ICrudInterface {
  protected PATH = ''

  async getList<A = any>(body?: A | undefined, options?: UseFetchOptions): Promise<UseFetchReturn<MBase.IBaseResponse<any>>> {
    return await useMyFetch(`${this.PATH}`, { ...options }).post(body).json()
  }

  async getListById<A = string, B = any>(id: A, body?: B | undefined, options?: UseFetchOptions): Promise<UseFetchReturn<MBase.IBaseResponse<any>>> {
    return await useMyFetch(`${this.PATH}/${id}`, { ...options }).post(body).json()
  }

  async create<A = any>(body?: A | undefined, options?: UseFetchOptions): Promise<UseFetchReturn<MBase.IBaseResponse<any>>> {
    return await useMyFetch(`${this.PATH}`, { ...options }).post(body).json()
  }

  async createById<A = string, B = any>(id: A, body?: B | undefined, options?: UseFetchOptions): Promise<UseFetchReturn<MBase.IBaseResponse<any>>> {
    return await useMyFetch(`${this.PATH}/${id}`, { ...options }).post(body).json()
  }

  async update<A = any>(body?: A | undefined, options?: UseFetchOptions): Promise<UseFetchReturn<MBase.IBaseResponse<any>>> {
    return await useMyFetch(`${this.PATH}`, { ...options }).put(body).json()
  }

  async updateById<A = string, B = any>(id: A, body?: B | undefined, options?: UseFetchOptions): Promise<UseFetchReturn<MBase.IBaseResponse<any>>> {
    return await useMyFetch(`${this.PATH}/${id}`, { ...options }).put(body).json()
  }

  async delete<A = any>(body?: A | undefined, options?: UseFetchOptions): Promise<UseFetchReturn<MBase.IBaseResponse<any>>> {
    return await useMyFetch(`${this.PATH}`, { ...options }).delete(body).json()
  }

  async deleteById<A = string, B = any>(id: A, body?: B | undefined, options?: UseFetchOptions): Promise<UseFetchReturn<MBase.IBaseResponse<any>>> {
    return await useMyFetch(`${this.PATH}/${id}`, { ...options }).delete(body).json()
  }

  async find<A = any>(body?: A | undefined, options?: UseFetchOptions): Promise<UseFetchReturn<MBase.IBaseResponse<any>>> {
    const query = cleanQueryToString(body)
    return await useMyFetch(`${this.PATH}?${query}`, { ...options }).get().json()
  }

  async findById<A = string, B = any>(id: A, body?: B | undefined, options?: UseFetchOptions): Promise<UseFetchReturn<MBase.IBaseResponse<any>>> {
    const query = cleanQueryToString(body)
    return await useMyFetch(`${this.PATH}/${id}?${query}`, { ...options }).get().json()
  }
}
