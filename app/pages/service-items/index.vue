<template>
  <div>
    服务项目页面
  </div>
</template>

<script setup>
const { data, pending, error } = await useFetch('/api/server-item/byPage', {
  query: { page: 1, pageSize: 10 }
})

console.log('返回的数据', data.value)
</script>