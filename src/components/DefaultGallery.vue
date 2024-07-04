<script>
import {
  TransitionRoot,
  TransitionChild,

  Dialog as HeadlessDialog,
  DialogPanel,
  DialogDescription,

  Menu as HeadlessMenu,
  MenuButton,
  MenuItems,
  MenuItem
} from '@headlessui/vue'

import { mapState } from 'pinia'
import { useWallpapersStore } from '@/stores'

export default {
  data: () => ({
    isOpen: false,
    wallpapers: [],
    wallpaper: {}
  }),

  computed: {
    ...mapState(useWallpapersStore, ['getByCategory']),

    getCategory() {
      return this.$route.params.category ?? ''
    },

    resolution() {
      return wpp => {
        let img = new Image()
        img.src = wpp.url

        img.decode().then(() => {
          wpp.image = {
            width: img.width,
            height: img.height
          }
        })

        return wpp.image ? `${wpp.image.width}x${wpp.image.height}` : 'loading...'
      }
    }
  },

  methods: {
    openModal(wpp) {
      this.wallpaper = wpp
      this.isOpen = true
    },

    closeModal() {
      this.isOpen = false
    },

    changeCategory(category) {
      this.closeModal()
      this.$router.push(`/${category}`)
    }
  },

  components: {
    TransitionRoot,
    TransitionChild,

    HeadlessDialog,
    DialogPanel,
    DialogDescription,

    HeadlessMenu,
    MenuButton,
    MenuItems,
    MenuItem
  }
}
</script>

<template>
  <div class="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
    <div v-for="wpp, i in getByCategory(getCategory)" :key="i"
         class="group cursor-pointer relative ring-inset" @click="openModal(wpp)">
      <img :src="wpp.url" class="object-cover w-full aspect-video rounded" />
      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900/30">
        <button class="bg-zinc-900 text-xs px-2 py-1">
          View
        </button>
      </div>

      <div class="absolute flex justify-between bottom-0 w-full p-1 bg-zinc-900 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
        <div>
          {{ resolution(wpp) }}
        </div>
      </div>
    </div>
  </div>

  <transition-root appear :show="isOpen" as="template">
    <headless-dialog @close="closeModal" as="div" class="relative z-10">
      <transition-child as="template" enter="duration-100 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                        leave="duration-100 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/25 backdrop-blur-lg " />
      </transition-child>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center">
          <transition-child as="template" enter="duration-100 ease-out" enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100" leave="duration-100 ease-in" leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95">
            <dialog-panel
              class="max-w-3xl max-h-full transform overflow-hidden rounded-md bg-zinc-900 p-1 text-xs shadow-xl transition-all">
              <dialog-description>
                <div class="mb-1 flex justify-between">
                  <div>
                    {{ wallpaper.title }}
                  </div>
                  <div>
                    {{ resolution(wallpaper) }}
                  </div>
                </div>
              </dialog-description>

              <a :href="wallpaper.url" target="_blank" class="outline-none">
                <img class="rounded-md sm:max-h-[70vh] h-full w-full object-cover"
                     :src="wallpaper.url">
              </a>

              <dialog-description>
                <div class="mt-1 flex justify-between">
                  <div>
                    by {{ wallpaper.author }}
                  </div>
                  <headless-menu v-if="wallpaper.categories.length > 0" as="div" class="relative">
                    <menu-button class="underline">categories</menu-button>
                    <menu-items
                      class="absolute flex flex-col right-0 p-2 bottom-0 mb-7 mr-2 bg-zinc-900">
                      <menu-item v-for="category, i in wallpaper.categories" :key="i"
                                 v-slot="{ active }" as="div">
                        <span :class="[{ 'bg-zinc-700 cursor-pointer': active }]"
                              @click="changeCategory(category)">
                          {{ category }}
                        </span>
                      </menu-item>
                    </menu-items>
                  </headless-menu>
                </div>
              </dialog-description>
              <div class="noise"></div>
            </dialog-panel>
          </transition-child>
        </div>
      </div>
    </headless-dialog>
  </transition-root>
</template>