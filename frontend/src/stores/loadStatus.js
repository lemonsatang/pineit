import { defineStore } from 'pinia'

export const useLoadStatus = defineStore('loadStatus', {
    state: () => ({
        isStillLoad: true
    }),
    getters: {
        getCurrentStatus() {
            return this.isStillLoad
        }
    },
    actions: {
        changeLoadStatus() {
            this.isStillLoad = !this.isStillLoad
        }
    }
})