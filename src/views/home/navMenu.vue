<template>
  <div>
    <!-- 右侧侧边栏 -->
    <el-aside width="200px">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        router
      >
      <!-- 无子集 -->
        <el-menu-item index="/index">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/stats">
          <i class="el-icon-menu"></i>
          <span slot="title">数据管理</span>
        </el-menu-item>
        <!-- 有子集 -->
        <el-submenu index="/xms">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">信息管理</span>
          </template>
          <el-menu-item index="/xms/list">列表管理 </el-menu-item>
        </el-submenu>


      </el-menu>

    </el-aside>
  </div>
</template>