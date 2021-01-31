export const state = () => ({
  animation: false
})

export const mutations = {
  animationFinished(state) {
    state.animation = false
  }
}
export const actions = {}
export const getters = {
  animation: ({ animation }) => animation
}
