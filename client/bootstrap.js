import { store } from '@things-factory/shell'
import apptool from './reducers/apptool'

export default function bootstrap() {
  store.addReducers({
    apptool
  })
}
