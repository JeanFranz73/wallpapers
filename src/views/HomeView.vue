<script>
import DefaultGallery from '@/components/DefaultGallery.vue'

export default {
  name: 'HomeView',

  components: {
    DefaultGallery
  },

  computed: {
    currentPath() {
      return this.$route.path === '/' ? '' : this.$route.path
    }
  }
}
</script>

<template>
  <default-gallery />
</template>
