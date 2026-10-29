<script setup>
import { ref, onMounted } from 'vue'
import { getTickets, errorMessage } from '../api/tickets'
import TicketTable from '../components/TicketTable.vue'

// одно состояние: loading | empty | data | error
const state = ref('loading')
const items = ref([])
const errorText = ref('')

async function load() {
  state.value = 'loading'
  try {
    items.value = await getTickets()
    state.value = items.value.length === 0 ? 'empty' : 'data'
  } catch (err) {
    errorText.value = errorMessage(err)
    state.value = 'error'
  }
}

onMounted(load)
</script>

<template>
  <section>
    <h2>Список заявок</h2>

    <p v-if="state === 'loading'">Загрузка…</p>
    <p v-else-if="state === 'empty'">Записей пока нет</p>
    <div v-else-if="state === 'error'">
      <p role="alert">{{ errorText }}</p>
      <button type="button" @click="load">Повторить</button>
    </div>
    <TicketTable v-else :items="items" />
  </section>
</template>