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

        public IMongoCollection<User> Users => _database.GetCollection<User>("users");
        public IMongoCollection<Course> Courses => _database.GetCollection<Course>("courses");

    }
}
