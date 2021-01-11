<template>
  <div class="gallery">
    <section class="demo-gallery">
      <ul class="wrapper">
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=156"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=56"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=164"
            width="1240"
          />
        </li>
      </ul>
    </section>
    <section class="demo-gallery">
      <ul class="wrapper">
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=138"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=77"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=121"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=202"
            width="1240"
          />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'Gallery',
  mounted() {
    const images = gsap.utils.toArray('.gallery img')
    console.log(images)
    gsap.utils.toArray('.gallery section').forEach((section, index) => {
      const w = section.querySelector('.demo-gallery .wrapper')
      // eslint-disable-next-line no-unreachable
      const [x, xEnd] =
        index % 2
          ? ['100%', (w.scrollWidth - section.offsetWidth) * -1]
          : [w.scrollWidth * -1, 0]
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
            ease: 'power4'
          }
        }
      )
    })
  }
}
</script>

<style lang="scss">
.demo-gallery {
  .wrapper {
    display: flex;
  }
  li {
    flex-shrink: 0;
    width: clamp(500px, 60vw, 800px);
  }
}
</style>
