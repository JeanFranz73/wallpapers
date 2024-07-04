<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog as HeadlessDialog,
  DialogPanel
} from '@headlessui/vue'

export default {
  data: () => ({
    // isOpen: localStorage.getItem('welcomeDialog') === null
    isOpen: true
  }),

  methods: {
    closeModal() {
      this.isOpen = false
      localStorage.setItem('welcomeDialog', 'closed')
    }
  },

  components: {
    TransitionRoot,
    TransitionChild,
    HeadlessDialog,
    DialogPanel
  }
}
</script>

<template>
  <transition-root appear :show="isOpen" as="template">
    <headless-dialog as="div" @close="closeModal" class="relative z-10">
      <transition-child as="template" enter="duration-100 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                        leave="duration-100 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/25 backdrop-blur" />
      </transition-child>

      <div class="fixed inset-0">
        <div class="flex min-h-full items-center justify-center p-1 text-center">
          <transition-child as="template" enter="duration-100 ease-out" enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100" leave="duration-100 ease-in" leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95">
            <dialog-panel
              class="w-full max-w-md transform overflow-hidden rounded bg-zinc-900 p-2 text-left align-middle shadow-xl transition-all">
              <div class="text-xs">
                <p class="mb-2">
                  I know what you're thinking, "another wallpaper website?"
                </p>
                <p class="mb-2">
                  Well, yes, but actually no.
                </p>
                <p class="mb-2">
                  Many wallpaper websites are bloated with ads, popups, and other annoying stuff.
                </p>
                <p class="mb-2">I've made this project because I wanted to make something
                  simple and straightforward to use.
                </p>
                <p class="mb-2">
                  All wallpapers are curated to have high DPI and resolutions. Also, no AI.
                </p>
                <p class="mb-2">
                  And most important, this website is open-source, and if you want you can contribute
                  on <a href="https://github.com/JeanFranz73/wallpapers/" class="underline outline-none">GitHub</a>.
                </p>
                <p class="mb-2">
                  Want to add a wallpaper? <a href="https://github.com/JeanFranz73/wallpapers/pulls"
                                              class="underline outline-none">open a PR</a>.
                </p>
                <p class="border-t border-t-zinc-500 pt-2 mb-2">
                  Disclaimer: I am <b>not</b> the author of the wallpapers, I just created the
                  website.
                  If you are the author of any of the wallpapers and want me to remove them, please
                  <a href="https://github.com/JeanFranz73/wallpapers/issues" class="underline outline-none">open an issue</a> on the
                  GitHub repo.
                </p>
                <span>- nana</span>
              </div>
              <div class="mt-2 flex flex-row justify-end">
                <button type="button" class="px-2 text-xs bg-zinc-800 hover:bg-zinc-700"
                        @click="closeModal">got it</button>
              </div>
            </dialog-panel>
          </transition-child>
        </div>
      </div>
    </headless-dialog>
  </transition-root>
</template>

<style></style>