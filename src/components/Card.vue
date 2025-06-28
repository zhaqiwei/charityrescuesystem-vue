<template>
  <div class="card-wrap"
       @mousemove="handleMouseMove"
       @mouseenter="handleMouseEnter"
       @mouseleave="handleMouseLeave"
       ref="card">
    <div class="card" :style="cardStyle">
      <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
      <div class="card-info">
        <div class="card-header">
          <slot name="header"></slot>
        </div>
        <div class="card-content">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataImage'],
  data() {
    return {
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null
    };
  },
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      };
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`
      };
    }
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width/2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height/2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    }
  }
};
</script>

<style>
/* 确保卡片样式是全局的 */
.card-wrap {
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  width: 240px;
  height: 320px;
}

.card {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow:
      rgba(0, 0, 0, 0.66) 0 30px 60px 0,
      inset #333 0 0 0 5px,
      inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
  transition: all 0.5s ease;
}

.card-bg {
  opacity: 0.5;
  position: absolute;
  top: -20px;
  left: -20px;
  width: calc(100% + 40px);
  height: calc(100% + 40px);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #555;
  transition: all 0.5s ease;
  pointer-events: none;
}

.card-info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  z-index: 10;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
}

.card-header {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.8);
}

.card-content {
  font-size: 16px;
  text-shadow: 0 1px 3px rgba(0,0,0,0.8);
}

/* 悬停效果 */
.card-wrap:hover .card {
  transform: scale(1.05);
  box-shadow:
      rgba(255, 255, 255, 0.2) 0 0 40px 5px,
      rgba(255, 255, 255, 1) 0 0 0 1px,
      rgba(0, 0, 0, 0.66) 0 30px 60px 0,
      inset #333 0 0 0 5px,
      inset white 0 0 0 6px;
}

.card-wrap:hover .card-bg {
  opacity: 0.8;
  transform: scale(1.1);
}
</style>