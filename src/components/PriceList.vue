<template>
  <div id="test" class="shake" style="width: 35em">
    <div style="display: flex; flex-direction: row">
      <Paket/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import Paket from "./PaketListItem.vue";

export default defineComponent({
  name: 'PriceList',
  components: {Paket},
  methods: {
  },
  setup: () => {
    onMounted(() => {
      window.setInterval(() => {
        const elem = document.getElementById("test");
        if (elem === null) return;
        const rand1 = Math.floor(Math.random() * 50);
        const rand2 = Math.floor(Math.random() * 50);
        elem.style.transitionDuration = ".2s";
        elem.style.transitionTimingFunction = "linear";
        elem.style.transform = "translate3d("+ rand1 +"px, "+ rand2 +"px, 0)";
      }, 200)
    })
  }
})
</script>

<style scoped>
button {
  background: #d93419;
  border-radius: 4px;
  display: inline-block;
  border: none;
  padding: 0.75rem 1rem;
  margin: 20px 10px 0 0;
  text-decoration: none;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.shake {
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>