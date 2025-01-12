<template>
  <div>
    <el-button type="primary" :icon="Plus">按钮</el-button>
    <el-button type="success" size="small" :icon="Plus">按钮</el-button>
    <div class="example-pagination-block">
      <div class="example-demonstration">When you have few pages</div>
      <el-pagination layout="prev, pager, next" :total="50" />
    </div>
    <div class="example-pagination-block">
      <div class="example-demonstration">When you have more than 7 pages</div>
      <el-pagination
        v-model:current-page="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000"
      />
    </div>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { Plus } from '@element-plus/icons-vue'
import { ref } from 'vue'


const currentPage1 = ref(5)
</script>
<style scoped></style>
