import type { PluginOptions } from 'vue-toastification'
import Toast from 'vue-toastification'
import { type UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  const options: PluginOptions = {
    // You can set your default options here
  }
  app.use(Toast, options)
}
