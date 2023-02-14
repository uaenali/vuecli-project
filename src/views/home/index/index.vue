<template>
  <div>
    <!-- <h1>首页真正的</h1> -->
    <!-- 走马灯 -->
    <el-carousel type="card" height="200px" :interval="4000">
      <el-carousel-item v-for="item in imgLists" :key="item">
        <img :src="item"/>
      </el-carousel-item>
    </el-carousel>
    <!-- 卡片 -->
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="8" v-for="(o, index) in cardLists" :key="o.img">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="o.img" class="image">
          <div style="padding: 14px;">
            <span>{{ o.title }}</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgLists: [
        require("@/assets/img/banner1.jpg"),
        require("@/assets/img/banner2.jpg"),
        require("@/assets/img/banner3.jpg"),
      ],
      cardLists: [
        {title: 'first', img: require('@/assets/img/banner1.jpg')},
        {title: 'second', img: require('@/assets/img/banner1.jpg')},
        {title: 'third', img: require('@/assets/img/banner1.jpg')},
      ]
    }
  }
}
</script>

<style scoped>
.el-card__body img {
  height: 200px;
  max-width: 100%;
}
</style>