import { ref } from 'vue'

export const items = ref([
  {
    id: 1,
    number: 'REC-0001',
    title: 'Замена кабельной линии, этап 1',
    siteId: 3,
    status: 'Новая'
  },
  {
    id: 2,
    number: 'REC-0002',
    title: 'Монтаж оборудования на подстанции',
    siteId: 1,
    status: 'В работе'
  }
])
