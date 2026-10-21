<script setup>
    import { ref } from 'vue'

    // автофокус на первом поле формы при показе экрана
    const vFocus = { mounted: (el) => el.focus() }

    // какой экран показан: 'list', 'new' или 'login'
    const screen = ref('list')

    // тестовые данные; статусы только New, InProgress, Closed, Cancelled
    const items = [
        { id: 1, number: 'REC-0001', title: 'Замена кабельной линии, этап 1', siteId: 3, status: 'New' },
        { id: 2, number: 'REC-0002', title: 'Монтаж оборудования на подстанции', siteId: 1, status: 'InProgress' }
    ]
</script>

<template>
    <header>
        <h1>Мониторинг этапов реконструкции</h1>
        <nav>
            <button type="button" @click="screen = 'list'">Список заявок</button>
            <button type="button" @click="screen = 'new'">Создать заявку</button>
            <button type="button" @click="screen = 'login'">Вход</button>
        </nav>
    </header>

    <main>
        <section v-if="screen === 'list'">
            <h2>Список заявок</h2>
            <table>
                <thead>
                    <tr>
                        <th>Номер</th>
                        <th>Тема</th>
                        <th>siteId</th>
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
        </section>

        <section v-else-if="screen === 'new'">
            <h2>Создание заявки</h2>
            <form @submit.prevent>
                <label for="title">Заголовок, 5–80 символов</label>
                <input id="title" name="title" v-focus>

                <label for="siteId">Номер сетевого объекта (siteId)</label>
                <input id="siteId" name="siteId" type="number">

                <label for="description">Описание, 10–500 символов</label>
                <textarea id="description" name="description"></textarea>

                <button type="submit">Создать</button>
            </form>
        </section>

        <section v-else-if="screen === 'login'">
            <h2>Вход</h2>
            <form @submit.prevent>
                <label for="login">Логин</label>
                <input id="login" name="login" v-focus>

                <label for="password">Пароль</label>
                <input id="password" name="password" type="password">

                <button type="submit">Войти</button>
            </form>
        </section>
    </main>
</template>

<style scoped>
    header, main {
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
    }

    nav {
        display: flex;
        gap: 0.5rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        max-width: 400px;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    th, td {
        border: 1px solid #999;
        padding: 0.4rem 0.6rem;
        text-align: left;
    }
</style>