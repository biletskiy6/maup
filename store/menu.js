export const state = () => ({
  isOpen: false
})
export const mutations = {
  setOpen(state) {
    state.isOpen = true
  },
  resetOpen(state) {
    state.isOpen = false
  }
}
export const getters = {
  isOpen: ({ isOpen }) => isOpen
}
