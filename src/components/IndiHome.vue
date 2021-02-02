<template>
  <div style="width: 100%; height: 1600px; background: url(src/assets/bg.png) no-repeat fixed;background-size: 100% 100%">
<!--    <img style="width: 100%;" src="src/assets/bg.png" alt="bg">-->
    <div style="display: flex; flex-direction: row">
      <div style="display: flex; flex-direction: column">
        <div style="display: flex; flex-direction: row; margin-top: 1em; margin-left: 2em">
          <img src="src/assets/bilibili.png" style="height: 5em; width: 15em" alt="bilibili_logo">
          <div style="display: flex; flex-direction: column; margin-left: 1em">
            <div class="title">哔哩哔哩大会员</div>
            <div class="title2">你感兴趣的视频，都在哔哩哔哩！</div>
          </div>
        </div>
        <price-list style="margin-left: 25%; margin-top: 10%"/>
      </div>
<!--      <button @click="changePic">test</button>-->
      <img v-if="show1" class="myPicture" id="pic22" style="margin-right: 15%;margin-left: auto ; width: 25%" src="src/assets/22.png" alt="22">
      <img v-if="show2" class="myPicture" id="pic33" style="margin-right: 15%;margin-left: auto ; width: 25%" src="src/assets/33.png" alt="33">
    </div>
  </div>
  <audio autoplay loop src="src/assets/DJ%20UBUR%20UBUR%20REMIX.mp3"></audio>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import PriceList from "./PriceList.vue";

export default defineComponent({
  name: 'IndiHome',
  components: {PriceList},
  mounted() {
    window.setInterval(this.changePic, 10000)
  },
  methods: {
    changePic() {
      this.show1 = !this.show1
      this.show2 = !this.show2
    }
  },
  setup: () => {
    return {
      show1: ref(true),
      show2: ref(false)
    }
  }
})
</script>

<style scoped>

.title {
  font-weight: bold;
  font-size: 1.5em;
}

.title2 {
  color: #fa7298;
  font-weight: bold;
  font-size: 2.5em;
}

.myPicture {
  animation: transfer 1s ;
}

@keyframes transfer {
  0% {
    transform: translate3d(10em, 0, 0);
    opacity: 0
  }

  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

</style>