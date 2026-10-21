<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { addItem } from '../ticketsStore'

    const router = useRouter()

    // автофокус на первом поле при открытии экрана
    const vFocus = { mounted: (el) => el.focus() }

    // в script содержимое ref читают через .value
    const form = ref({ title: '', siteId: null, description: '' })
    const errors = ref({ title: '', siteId: '', description: '' })

    function onCreate() {
        const title = form.value.title.trim()
        const description = form.value.description.trim()
        const siteId = form.value.siteId

        errors.value = { title: '', siteId: '', description: '' }

        if (title.length < 5 || title.length > 80) {
            errors.value.title = 'Тема: от 5 до 80 символов'
        }
        if (!Number.isInteger(siteId) || siteId <= 0) {
            errors.value.siteId = 'siteId: целое число больше нуля'
        }
        if (description.length < 10 || description.length > 500) {
            errors.value.description = 'Описание: от 10 до 500 символов'
        }

        // отказ: return до addItem, запись не добавляется
        if (errors.value.title || errors.value.siteId || errors.value.description) return

        addItem({ title, siteId, description })

        // очистить форму и перейти на список
        form.value = { title: '', siteId: null, description: '' }
        router.push('/')
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

            <button type="submit">Создать заявку</button>
        </form>
    </section>
</template>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        max-width: 400px;
    }

    [role="alert"] {
        color: #b00020;
        margin: 0;
    }
</style>