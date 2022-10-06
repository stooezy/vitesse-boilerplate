import { acceptHMRUpdate, defineStore } from 'pinia'
import type { MToken } from '~/core/models'
import { EApp } from '~/core/models'
import { TokenService } from '~/core/services'

export const useTokenStore = defineStore('token', () => {
  const service = new TokenService()
  const token = useLocalStorage(`${import.meta.env.VITE_APP_NAME}`, '')

  const setToken = (payload: string | undefined | null) => {
    token.value = payload
  }

  const doGetToken = async (body: MToken.IBody) => {
    const response = await service.create(body)
    const data: MToken.IResponse = response.data.value?.data
    setToken(data.token)
  }

  const getToken = computed(() => token.value)

  return {
    setToken,
    doGetToken,
    getToken,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTokenStore, import.meta.hot))
