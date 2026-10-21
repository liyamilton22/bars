<script setup>
    defineProps({
        items: {
            type: Array,
            required: true
        }
    })

    // подписи на экране; значения в данных не меняются
    const statusLabels = {
        New: 'Новая',
        InProgress: 'В работе',
        Closed: 'Закрыта',
        Cancelled: 'Отменена'
    }
</script>

<template>
    <div class="table-wrap">
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
                <tr v-if="items.length === 0">
                    <td colspan="4" class="empty">Заявок пока нет</td>
                </tr>
                <tr v-for="item in items" :key="item.id">
                    <td>{{ item.number }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.siteId }}</td>
                    <td>{{ statusLabels[item.status] ?? item.status }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>