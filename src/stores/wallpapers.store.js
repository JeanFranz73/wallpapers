import { defineStore } from 'pinia'
import axios from 'axios'

export const useWallpapersStore = defineStore('wallpapers', {
  state: () => ({
    wallpapers: []
  }),

  actions: {
    fetch() {
      axios.get(import.meta.env.BASE_URL + 'wallpapers.json')
        .then(response => {
          this.setWallpapers(response.data)
        }).catch(error => {
          console.error(error)
        })
    },

    async setWallpapers(wallpapers) {
      wallpapers.forEach(wpp => {
        wpp.url = import.meta.env.BASE_URL + `images/${wpp.filename}`
      })
      this.wallpapers = wallpapers
    }
  },

  getters: {
    getWallpapers(state) {
      return state.wallpapers
    },

    getByCategory(state) {
      return category => category ? state.wallpapers.filter(wpp => wpp.categories.includes(category)) : state.wallpapers
    }
  }
})