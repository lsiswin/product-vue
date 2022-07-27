<template>
  <el-affix :offset="0">
    <div class="h-6" />
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
    >
      <el-menu-item index="1">{{ inPage }}</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="3" disabled>Info</el-menu-item>
      <el-menu-item index="4">Orders</el-menu-item>
    </el-menu>

    <el-row class="tac">
      <el-space wrap>
      <el-col>
        <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><HomeFilled /></el-icon>
              <span>One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item one</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>Two</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><user /></el-icon>
            <span>Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>Four</span>
          </el-menu-item>
          <el-menu-item index="5">
            <el-icon><setting /></el-icon>
            <span>Four</span>
          </el-menu-item>
          <el-menu-item index="6">
            <el-icon><setting /></el-icon>
            <span>Four</span>
          </el-menu-item>
          <el-menu-item index="7">
            <el-icon><setting /></el-icon>
            <span>Four</span>
          </el-menu-item>
          <el-menu-item index="8">
            <el-icon><setting /></el-icon>
            <span>Four</span>
          </el-menu-item>
          <el-menu-item index="9">
            <el-icon><setting /></el-icon>
            <span>Four</span>
          </el-menu-item>
          <el-menu-item index="10">
            <el-icon><setting /></el-icon>
            <span>Four</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-space>
    </el-row>
  </el-affix>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const goBack = () => {
  console.log('go back')
}
const inPage =  'Hello Vue.js!'

</script>
<style>
el-menu-item{
  margin-top: 5px;
}
</style>