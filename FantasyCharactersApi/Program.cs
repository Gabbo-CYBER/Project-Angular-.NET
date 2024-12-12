using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

public class Program
{
    public static void Main(string[] args)
    {
        // Creo l'applicazione web
        var builder = WebApplication.CreateBuilder(args);

        // Aggiungo i servizi per i controller
        builder.Services.AddControllers();

        // Aggiungo CORS per consentire il frontend Angular
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowFrontend", policy =>
            {
                policy.WithOrigins("http://localhost:4200")  // Porta predefinita di Angular
                      .AllowAnyHeader()
                      .AllowAnyMethod();
            });
        });

        // Creo l'applicazione
        var app = builder.Build();

        // Uso CORS
        app.UseCors("AllowFrontend");
        app.MapControllers();

        // Avvio l'applicazione
        app.Run();
    }
}

