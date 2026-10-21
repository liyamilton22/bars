
<template>
    <header>
        <h1>Мониторинг этапов реконструкции</h1>

        <nav>
            <router-link to="/">Список заявок</router-link>
            <router-link to="/new">Создать заявку</router-link>
            <router-link to="/login">Вход в систему</router-link>
        </nav>
    </header>
</template>

<style scoped>
    header {
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
    }

    h1 {
        font-size: 1.8rem;
    }

    nav {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

        nav a {
            color: #2563eb;
            text-decoration: none;
        }

            nav a:hover {
                text-decoration: underline;
            }

            nav a.router-link-active {
                font-weight: bold;
            }
</style>
