namespace backend.Services;

// Интерфейс правил работы с заявками. Реализация подставляется через DI,
// поэтому позже хранилище в памяти заменится на PostgreSQL без правки контроллера.
public interface ITicketService
{
    int Count();
}