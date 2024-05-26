using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Skillearn.Data.Models;

namespace Skillearn.Data.Data
{
    public class DBContext
    {
        private readonly IMongoDatabase _database;

        public DBContext(string connectionString, string databaseName)
        {
            var client = new MongoClient(connectionString); 
            _database = client.GetDatabase(databaseName);
        }

        public IMongoCollection<UserModel> Users => _database.GetCollection<UserModel>("users");
        public IMongoCollection<Course> Courses => _database.GetCollection<Course>("courses");
        public IMongoCollection<RoleModel> Roles => _database.GetCollection<RoleModel>("roles");
        public IMongoCollection<TaskModel> Tasks => _database.GetCollection<TaskModel>("tasks");
        public IMongoCollection<UserCourses> UserCourses => _database.GetCollection<UserCourses>("user_courses");
    }
}
