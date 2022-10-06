import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Ref } from 'vue'
import type { MAuth } from '~/core/models'
import { AuthService } from '~/core/services'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const service = new AuthService()
  const profile: Ref<MAuth.IResponse | undefined> = ref()
  const doLogin = async (body: MAuth.IBody) => {
    const { data, error } = await service.create(body)
    if (!error.value) {
      const response: MAuth.IResponse = data.value?.data
      profile.value = response
      router.push('/dashboard')
    }
  }

  const getProfile = computed(() => profile.value)

  return {
    doLogin,
    getProfile,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
