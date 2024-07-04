<script>
import DefaultHeader from '@/views/layouts/DefaultHeader.vue'
import WelcomeDialog from '@/components/WelcomeDialog.vue'

export default {
  name: 'App',
  components: {
    DefaultHeader,
    WelcomeDialog
  }
}
</script>

<template>
  <default-header />
  <main class="p-5 mx-auto max-w-7xl">
    <router-view />
  </main>
  <welcome-dialog />
</template>