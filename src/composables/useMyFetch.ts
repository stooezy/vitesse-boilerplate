import { createFetch } from '@vueuse/core'
import { useToast } from 'vue-toastification'
import type { MBase } from '~/core/models'

export const useMyFetch = createFetch({
  baseUrl: import.meta.env.VITE_API_URL, // base URL API from env
  options: {
    /**
     * Setup header authorization (header name based on API needs)
     */
    async beforeFetch({ options }) {
      const myToken = localStorage.getItem(import.meta.env.VITE_APP_NAME) || ''
      const requestHeaders: HeadersInit = new Headers()

      if (myToken) {
        requestHeaders.set(import.meta.env.VITE_HEADER_TOKEN, `${myToken}`)
        options.headers = requestHeaders
      }

      return { options }
    },
    afterFetch(ctx) {
      return ctx
    },
    /**
     * Showing toast notification message data from API
     * when error response from API http response 4xx
     *
     * can be OVERRIDED if needed handle error different
     * @param ctx
     * @returns
     */
    onFetchError(ctx) {
      const response: MBase.IBaseResponse<any> = ctx.data
      const toast = useToast()
      toast.error(response.message)
      return ctx
    },
  },
})
