import { useWallpapersStore } from '@/stores/wallpapers.store'

function installStores() {
  useWallpapersStore().fetch()
}

export {
  installStores,
  useWallpapersStore
}