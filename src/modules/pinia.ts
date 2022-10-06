import { createPinia } from 'pinia'
import DeviceDetector from 'device-detector-js'
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import { useTokenStore } from '~/core/stores/token'
import { type UserModule } from '~/types'

// Setup Pinia
// https://pinia.esm.dev/
export const install: UserModule = ({ isClient, initialState, app, router }) => {
  const pinia = createPinia()
  app.use(pinia)
  // Refer to
  // https://github.com/antfu/vite-ssg/blob/main/README.md#state-serialization
  // for other serialization strategies.
  if (isClient)
    pinia.state.value = (initialState.pinia) || {}

  else
    initialState.pinia = pinia.state.value

  // handle Middleware
  const tokenStore = useTokenStore()

  router.beforeEach(async (to, from) => {
    if (!tokenStore.getToken) {
      const fpPromise = await FingerprintJS.load()
      const visitorId = (await fpPromise.get()).visitorId
      const deviceDetector = new DeviceDetector()
      const device = deviceDetector.parse(navigator.userAgent)

      await tokenStore.doGetToken({
        app_name: import.meta.env.VITE_SERVICE_NAME,
        app_key: import.meta.env.VITE_SECRET_KEY,
        device_id: `${device.client?.name}-${visitorId}`,
        device_type: `${device.client?.name}`,
      })
    }
  })
}
