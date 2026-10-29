using backend.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// DI: сервис регистрируется здесь, контроллер получает его через конструктор
builder.Services.AddSingleton<ITicketService, TicketService>();

var app = builder.Build();

// Swagger только в режиме Development
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();

// /health: только "процесс жив", без данных заявки
app.MapGet("/health", () => Results.Ok("ok"));

// /info: имя приложения, среда и учебная пометка
app.MapGet("/info", (IWebHostEnvironment env) => Results.Ok(new
{
    name = "Reconstruction Monitoring API",
    environment = env.EnvironmentName,
    version = "ЛР7"
}));

app.Run();