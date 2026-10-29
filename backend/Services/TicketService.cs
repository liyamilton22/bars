namespace backend.Services;

// Заготовка: данные пока в памяти. Создание заявок появится в ЛР8.
public class TicketService : ITicketService
{
    private readonly List<object> _items = new();

    public int Count() => _items.Count;
}