<template>
    <section>
        <h2>Создание заявки</h2>

        <form @submit.prevent>
            <label for="title">Заголовок, 5–80 символов</label>
            <input id="title" name="title" minlength="5" maxlength="80" required>

            <label for="siteId">Номер сетевого объекта (siteId)</label>
            <input id="siteId" name="siteId" type="number" min="1" required>

            <label for="description">Описание, 10–500 символов</label>
            <textarea id="description" name="description" minlength="10" maxlength="500" required></textarea>

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
</style>