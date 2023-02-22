<template lang="">
  <div>
    <h3>父组件传给子组件的toCity:{{sendData}}</h3> 
    <button
      @click='select(`大连`)'
    >
      点击此处将‘大连’发射给父组件
    </button>
  </div>
</template>
<script>
export default {
  props: [
    'sendData', // 用来接收父组件传给子组件的数据
  ],
  data (){
    return {

    };
  },
  methods: {
    select(val) {
      let data = {
        cityName: val,
      };
      this.$emit('showCityName', data); // select事件触发后，自动触发showCityName事件
    },
    // 父组件的旧值（要传递）等于子组件中的新值
    // 重要的是子组件将数据改变，然后传递给父组件 // 通过事件触发
    // 如 select将模板中传递的值，大连，传递给父组件
    // selct(val) {
    //   let data = {
    //     nameChange: val,
    //   }
    //   this.$emit('showCityName', data)
    // }
    
  }
}
</script>
<style lang="">
  
</style>