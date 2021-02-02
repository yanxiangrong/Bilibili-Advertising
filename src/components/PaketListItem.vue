<template>
  <div style="display: flex; flex-direction: column; width: 100%">
    <div v-for="(item, index) in paketList" :key="index">
      <div style="display: flex; flex-direction: row">
        <div style="display: flex; flex-direction: column; width: 70%">
          <div class="title" style="display: flex">{{item.title1}}</div>
          <div class="kind" style="display: flex; margin-left: auto">{{item.title2}}</div>
        </div>
        <div style="display: flex; flex-direction: column; width: 30%">
          <div class="price" style="display: flex; margin-left: auto">{{item.price}}</div>
          <div class="label" style="display: flex; margin-left: auto">{{item.label}}</div>
        </div>
      </div>
      <hr class="myHr"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export interface PaketItem {
  title1: string
  title2: string
  price: string
  label: string
}

export default defineComponent({
  name: 'Paket',
  props: {
    paketList: {
      type: Array,
      default: () => [
          {
            title1: '哔哩哔哩大会员套餐',
            title2: '年度大会员',
            price: '¥168.00',
            label: '原价¥233'
          },
          {
          title1: '哔哩哔哩大会员套餐',
          title2: '连续包年',
          price: '¥148.00',
          label: '原价¥233'
        },
        {
          title1: '哔哩哔哩大会员套餐',
          title2: '连续包季',
          price: '¥45.00',
          label: '原价¥68'
        },
        {
          title1: '哔哩哔哩大会员套餐',
          title2: '连续包月',
          price: '¥15.00',
          label: '原价¥25'
        }
      ] as PaketItem[]
    }
  }
})
</script>

<style scoped>

.title {
  color: #00a1d6;
  font-weight: bold;
  font-size: 2em;
}

.kind {
  font-weight: bold;
  font-size: 1.5em;
}

.price {
  color: #4166e2;
  font-weight: bold;
  font-size: 2.5em;
}

.label {
  font-weight: lighter;
  font-size: 1em;
}

.myHr {
  background-color: darkgrey;
  height:1px;
  border:0;
}

</style>