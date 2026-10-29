import { mockGetTickets, mockCreateTicket } from './mockTickets.js'

// true: данные из mock; false: настоящий fetch к серверу
const USE_MOCK = true

const baseUrl = import.meta.env.VITE_API_BASE_URL

// status = HTTP-код ответа, null = ответа не было вообще (нет связи)
export class ApiError extends Error {
  constructor(message, status = null) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

// ответ mock приводим к тому же поведению, что и у fetch
function fromMock(result) {
  if (!result.ok) {
    throw new ApiError(`HTTP ${result.status}`, result.status)
  }
  return result.data
}

// fetch: 400 и 500 не попадают в catch, их ловим по response.ok
async function request(path, options) {
  let response
  try {
    response = await fetch(`${baseUrl}${path}`, options)
  } catch {
    throw new ApiError('Нет связи с сервером', null)
  }
  if (!response.ok) {
    throw new ApiError(`HTTP ${response.status}`, response.status)
  }
  return response.json()
}

export async function getTickets() {
  if (USE_MOCK) return fromMock(await mockGetTickets())
  return request('/api/tickets')
}

export async function createTicket(body) {
  if (USE_MOCK) return fromMock(await mockCreateTicket(body))
  return request('/api/tickets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
}

// понятный человеку текст: три разных отказа
export function errorMessage(err) {
  if (!(err instanceof ApiError)) return 'Непредвиденная ошибка'
  if (err.status === 400) return 'Проверьте поля'
  if (err.status === 500) return 'Сервер не смог обработать запрос'
  if (err.status === null) return 'Нет связи с сервером'
  return `Не удалось выполнить запрос (код ${err.status})`
}