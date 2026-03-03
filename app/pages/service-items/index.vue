<template>
  <div>
    服务项目页面，打开控制台，查看返回的数据，并渲染数据。
  </div>
</template>

<script setup>
const { data, pending, error } = await useFetch('/api/server-item/byPage', {
  query: { page: 1, pageSize: 10 }
})

console.log('返回的数据', data.value)
</script>