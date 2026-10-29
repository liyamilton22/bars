<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { createTicket, errorMessage } from '../api/tickets'

const router = useRouter()

// автофокус на первом поле
const vFocus = { mounted: (el) => el.focus() }

const form = ref({ title: '', siteId: null, description: '' })
const errors = ref({ title: '', siteId: '', description: '' })
const submitError = ref('')
const isSubmitting = ref(false)

async function onCreate() {
  // защита от двойного клика
  if (isSubmitting.value) return

  const title = form.value.title.trim()
  const description = form.value.description.trim()
  const siteId = form.value.siteId

  errors.value = { title: '', siteId: '', description: '' }
  submitError.value = ''

  if (title.length < 5 || title.length > 80) {
    errors.value.title = 'Тема: от 5 до 80 символов'
  }
  if (!Number.isInteger(siteId) || siteId <= 0) {
    errors.value.siteId = 'siteId: целое число больше нуля'
  }
  if (description.length < 10 || description.length > 500) {
    errors.value.description = 'Описание: от 10 до 500 символов'
  }
  if (errors.value.title || errors.value.siteId || errors.value.description) return

  isSubmitting.value = true
  try {
    // id, number и status приходят из ответа, форма их не вычисляет
    await createTicket({ title, siteId, description })
    form.value = { title: '', siteId: null, description: '' }
    router.push('/') // список сам загрузит данные при открытии
  } catch (err) {
    // поля остаются заполненными, чтобы человек исправил ошибку
    submitError.value = errorMessage(err)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section>
    <h2>Создание заявки</h2>

    <form @submit.prevent="onCreate" novalidate>
      <label for="title">Заголовок, 5–80 символов</label>
      <input id="title" name="title" v-model="form.title" v-focus>
      <p v-if="errors.title" role="alert">{{ errors.title }}</p>

      <label for="siteId">Номер сетевого объекта (siteId)</label>
      <input id="siteId" name="siteId" type="number" v-model.number="form.siteId">
      <p v-if="errors.siteId" role="alert">{{ errors.siteId }}</p>

      <label for="description">Описание, 10–500 символов</label>
      <textarea id="description" name="description" v-model="form.description"></textarea>
      <p v-if="errors.description" role="alert">{{ errors.description }}</p>

      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Создаём…' : 'Создать заявку' }}
      </button>
      <p v-if="submitError" role="alert">{{ submitError }}</p>
    </form>
  </section>
</template>