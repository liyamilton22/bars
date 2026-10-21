<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Номер заявки</th>
        <th>Тема заявки</th>
        <th>Сетевой объект</th>
        <th>Статус</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.number }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.siteId }}</td>
        <td>{{ item.status }}</td>
      </tr>
    </tbody>
  </table>
</template>
