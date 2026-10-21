<script setup>
    import AppHeader from './components/AppHeader.vue'
</script>

<template>
    <AppHeader />

    <main>
        <router-view />
    </main>
</template>

<style>
    main {
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th,
    td {
        border: 1px solid #999;
        padding: 0.4rem 0.6rem;
        text-align: left;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        max-width: 400px;
    }
</style>