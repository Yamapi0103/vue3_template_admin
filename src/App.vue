<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { reqLogin } from '@/api/user'
import { onMounted } from 'vue'
onMounted(() => {
  console.log('APP mounted')
  reqLogin({ username: 'admin', password: '123456' }).then(console.log)
})
</script>
<style scoped></style>
