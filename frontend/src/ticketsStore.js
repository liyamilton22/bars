import { ref } from 'vue'

// единый массив заявок для всего приложения
export const items = ref([
    {
        id: 1,
        number: 'REC-0001',
        title: 'Замена кабельной линии, этап 1',
        siteId: 3,
        description: 'Контроль сроков замены кабеля на участке 1',
        status: 'New'
    },
    {
        id: 2,
        number: 'REC-0002',
        title: 'Монтаж оборудования на подстанции',
        siteId: 1,
        description: 'Монтаж и проверка оборудования на подстанции',
        status: 'InProgress'
    }
])

// следующий учебный id; в текущей сессии не повторяется
let nextId = 3

export function addItem({ title, siteId, description }) {
    const id = nextId++
    const item = {
        id,
        number: `TMP-${id}`,
        title,
        siteId,
        description,
        status: 'New' // всегда New, статус пользователь не задаёт
    }
    items.value.push(item)
    return item
}