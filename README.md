# bars
#РИС и Web

## Студенка

Лия Газизьянова

## Группа

ТРИС-3-23

## Тема

Информационная система мониторинга сроков и этапов выполнения работ при реконструкции сетевых объектов.

## Стек

Vue 3 + ASP.NET Core + PostgreSQL
## Документация

- [Предложение темы](docs/project-proposal.md)
- [ЛР1: техническое задание](docs/lab-01-requirements.md)
- [ЛР2: архитектура](docs/architecture.md)
- [ЛР2: модель данных](docs/data-model.md)
- [ЛР2: API-контракт](docs/api-contract.md)
- [ЛР2: матрица требований](docs/requirements-matrix.md)
- ## Запуск клиента

```
cd frontend
npm install
npm run dev
```

Открыть адрес Vite, обычно http://localhost:5173
## Запуск backend

```
cd backend
dotnet restore
dotnet run
```

- API: http://localhost:5000
- Swagger: http://localhost:5000/swagger
- Проверка живости: http://localhost:5000/health
- Информация о приложении: http://localhost:5000/info

Ограничения ЛР7:
- данные заявок пока хранятся в памяти и после перезапуска пропадут;
- `/health` проверяет только то, что процесс жив, а не создание заявки;
- настоящее создание заявки (POST /api/tickets) появится в ЛР8.