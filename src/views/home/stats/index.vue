<template>
  <div>
    <h1>数据管理</h1>
    <div>父组件的toCity: {{toCity}}</div>
        <train-city
          @showCityName="updateCity"
          :sendData="toCity"
        />
    </div>
</template>
<script>
import trainCity from '../../../components/trainCity.vue'
export default {
  components: { trainCity },
  data (){
    return {
      toCity: '北京',
    };
  },
  methods: {
    updateCity(data) { // 触发子组件的选择城市事件
      this.toCity = data.cityName; // 改变父组件的值
    },
    // 在父组件值定义的接收函数 是由子组件里定义的 触发函数定义的，
    // 比如子组件的@input那么每一次的输入都会调用$emit()即父组件里的函数也会被调用
  }
}
</script>
<style lang="">
  
</style>