<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { IconBrandGithub, IconX, IconMenu2 } from '@tabler/icons-vue'

export default {
  name: 'DefaultHeader',

  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    IconMenu2,
    IconX,
    IconBrandGithub
  },

  data: () => ({
    navigation: [
      { name: 'all', path: '/' },
      { name: 'fantasy', path: '/fantasy' },
      { name: 'scifi', path: '/scifi' },
      { name: 'games', path: '/games' },
      { name: 'sports', path: '/sports' },
      { name: 'cars', path: '/cars' }
    ]
  }),

  computed: {
    isCurrentRoute() {
      return route => route === this.$route.path
    }
  }
}
</script>

<template>
  <disclosure as="nav" class="sticky top-0 bg-zinc-900/50 backdrop-blur z-10" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 flex items-center sm:hidden">
          <disclosure-button class="p-1 hover:bg-zinc-700 hover:text-white">
            <icon-menu2 v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <icon-x v-else class="block h-6 w-6" aria-hidden="true" />
          </disclosure-button>
        </div>

        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="hidden sm:block">
            <div class="flex space-x-4">
              <router-link v-for="item in navigation" :key="item.name" :to="item.path"
                           :class="[
                             isCurrentRoute(item.path)
                               ? 'bg-stone-400 text-zinc-900'
                               : 'text-gray-300 hover:bg-zinc-700 hover:text-white',
                             'px-1.5 py-1 text-xs'
                           ]" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
            </div>
          </div>
        </div>
        <a class="p-1 hover:bg-zinc-700" href="https://github.com/JeanFranz73/wallpapers/">
          <icon-brand-github size="20" stroke="2" />
        </a>
      </div>
    </div>

    <disclosure-panel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2 border-b border-zinc-800">
        <router-link
          v-for="item in navigation" :key="item.name" :to="item.path"
          :class="[isCurrentRoute(item.path)
                     ? 'bg-stone-400 text-zinc-900'
                     : 'text-zinc-400 hover:bg-zinc-700 hover:text-white',
                   'mx-1 px-1.5 py-1 block']">{{ item.name }}</router-link>
      </div>
    </disclosure-panel>
  </disclosure>
</template>