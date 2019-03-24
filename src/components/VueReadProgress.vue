<template>
  <div class="read-progress-container">
    <span
      class="read-progress-bar"
      :class="{ 'with-shadow': shadow }"
      :style="{ width: readProgress + '%', color: color, height: height, opacity: opacity, backgroundColor: color }"
    ></span>
  </div>
</template>

<script>
export default {
  name: "VueReadProgress",
  props: {
    color: {
      type: String,
      default: "#506888"
    },
    height: {
      type: String,
      default: "4px"
    },
    opacity: {
      type: [String, Number],
      default: 1
    },
    shadow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      readProgress: 0
    };
  },
  created() {
    window.addEventListener("scroll", this.updateReadProgress);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateReadProgress);
  },
  methods: {
    updateReadProgress() {
      this.readProgress = this.currentScrollPosition(window.scrollY);
    },
    currentScrollPosition(position) {
      return (position / (document.body.clientHeight - document.documentElement.clientHeight)) * 100;
    }
  }
};
</script>

<style scoped lang="less">
.read-progress-container {
  width: 100%;
  background-color: transparent;
  position: fixed;
  display: block;
  z-index: 9999;
  top: 0;
  left: 0;

  .read-progress-bar {
    display: block;
    width: 0%;
    height: inherit;
    &.with-shadow {
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
