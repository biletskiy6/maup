<template>
  <div
    v-if="visible"
    class="app-modal"
    :class="{ active: visible, [name]: name }"
    @click="handleClose"
  >
    <div class="app-modal-inner" @click.stop>
      <slot :params="params" />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  name: 'AppModal',
  props: {
    name: {
      required: false,
      type: String,
      default: ''
    }
  },
  data() {
    return {
      params: {},
      visible: false
    }
  },
  watch: {
    visible: {
      handler(val) {
        if (val) {
          this.$nextTick(() => {
            document.body.style.setProperty('overflow', 'hidden')
            const tl = gsap.timeline({ delay: 0.2 })
            tl.to('.app-modal', {
              clipPath: 'polygon(0 0, 110% 0, 90% 100%, 0 100%)',
              duration: 1
            }).to(
              '.app-modal',
              {
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                duration: 1
              },
              0.3
            )
          })
        } else {
          document.body.style.removeProperty('overflow', 'hidden')
        }
      }
    }
  },
  beforeMount() {
    this.$modal.$event.$on('show', (modal, params) => {
      this.params = params
      return this.name === modal ? (this.visible = true) : null
    })
    this.$modal.$event.$on('hide', (modal) => {
      return this.name === modal ? this.handleClose() : null
    })
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (this.visible && e.which === 27) {
        this.handleClose()
      }
    })
  },
  methods: {
    handleClose() {
      const tl = gsap.timeline({ delay: 0.2 })
      tl.to('.app-modal', {
        clipPath: 'polygon(0 0, -5% 0, 40% 100%, 0 100%)',
        duration: 1
      })
        .to(
          '.app-modal',
          {
            clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
            duration: 1
          },
          0.3
        )
        .eventCallback('onComplete', () => {
          this.$store.commit('resetModalVisible')
          this.visible = false
        })
    }
  }
}
</script>
