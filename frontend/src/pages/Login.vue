<template>
    <section>
        <h2>Вход в систему</h2>

        <form @submit.prevent>
            <label for="login">Логин</label>
            <input id="login" name="login" autocomplete="username" required>

            <label for="password">Пароль</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required>

            <button type="submit">Войти</button>
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