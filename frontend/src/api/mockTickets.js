// Mock имитирует сервер: пауза, коды ответа, id и number выдаёт "сервер"
const DELAY = 500
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

let nextId = 3
const tickets = [
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
]

// учебные флаги для проверки отказов
export const mockFlags = { force400: false, force500: false, empty: false }

// в режиме разработки флаги доступны из консоли браузера: mockFlags.force500 = true
if (import.meta.env.DEV) {
  window.mockFlags = mockFlags
}

export async function mockGetTickets() {
  await wait(DELAY)
  if (mockFlags.force500) {
    return { ok: false, status: 500, data: { error: 'Внутренняя ошибка' } }
  }
  if (mockFlags.empty) {
    return { ok: true, status: 200, data: [] }
  }
  return { ok: true, status: 200, data: [...tickets] }
}

export async function mockCreateTicket(body) {
  await wait(DELAY)

  if (mockFlags.force500) {
    return { ok: false, status: 500, data: { error: 'Внутренняя ошибка' } }
  }

  const title = (body.title ?? '').trim()
  const description = (body.description ?? '').trim()
  const invalid =
    mockFlags.force400 ||
    title.length < 5 || title.length > 80 ||
    !Number.isInteger(body.siteId) || body.siteId <= 0 ||
    description.length < 10 || description.length > 500

  if (invalid) {
    return { ok: false, status: 400, data: { error: 'Неверные поля' } }
  }

  const id = nextId++
  const ticket = {
    id,
    number: `REC-${String(id).padStart(4, '0')}`,
    title,
    siteId: body.siteId,
    description,
    status: 'New'
  }
  tickets.push(ticket)
  return { ok: true, status: 201, data: ticket }
}