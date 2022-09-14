import * as ConfirmDialog from 'vuejs-confirm-dialog'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.use(ConfirmDialog)
}
