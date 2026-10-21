<template>
    <header>
        <div class="header-inner">
            <h1>Мониторинг этапов реконструкции</h1>

            <nav>
                <router-link to="/">Список заявок</router-link>
                <router-link to="/new">Создать заявку</router-link>
                <router-link to="/login">Вход в систему</router-link>
            </nav>
        </div>
    </header>
</template>

<style scoped>
    header {
        border-bottom: 1px solid #d9dee5;
    }

    .header-inner {
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
    }

    h1 {
        margin: 0 0 0.5rem;
        font-size: 1.4rem;
    }

    nav {
        display: flex;
        flex-wrap: wrap;
        gap: 1.2rem;
    }

        nav a {
            color: #6b7280;
            text-decoration: none;
            padding-bottom: 2px;
        }

            nav a:hover {
                color: #1f2937;
            }

            nav a.router-link-exact-active {
                color: #2563eb;
                font-weight: 600;
                border-bottom: 2px solid #2563eb;
            }
</style>