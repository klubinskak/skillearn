using Skillearn.Data.Data;
using Skillearn.Data.Logic;
using Skillearn.Data.Logic.Interfaces;
using Newtonsoft.Json.Serialization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApiExplorer;


var builder = WebApplication.CreateBuilder(args);

var configuration = builder.Configuration;

var connectionString = configuration["MongoDB:ConnectionString"];
var databaseName = configuration["MongoDB:DatabaseName"];
builder.Services.AddScoped<DBContext>(sp => new DBContext(connectionString!, databaseName!));

// Add services to the container.

//db

builder.Configuration.AddJsonFile("appsettings.json");



builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsAllowSpecific",
    builder =>
    {
        //builder.AllowAnyMethod()
        //.AllowAnyHeader()
        //.AllowCredentials()
        //.WithOrigins(configuration.GetSection("AllowedHosts:Host").Get<string[]>());
        builder.WithOrigins(configuration["AllowedHosts"])
                           .AllowAnyMethod()
                           .AllowAnyHeader();
    });
});


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//services
builder.Services.AddScoped<IUser, UserLogic>();
builder.Services.AddScoped<ICourse, CourseLogic>();




var app = builder.Build();


//var context = new DBContext(connectionString!, databaseName!);


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("CorsAllowSpecific");


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
