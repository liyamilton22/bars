using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/tickets")]
public class TicketsController : ControllerBase
{
    private readonly ITicketService _service;

    // сервис приходит из DI, а не создаётся через new
    public TicketsController(ITicketService service)
    {
        _service = service;
    }

    // Действия (GET, POST, PATCH) появятся в ЛР8.
}