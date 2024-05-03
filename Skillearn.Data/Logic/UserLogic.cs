using MongoDB.Driver;
using Skillearn.Data.Data;
using Skillearn.Data.Logic.Interfaces;
using Skillearn.Data.Models;

namespace Skillearn.Data.Logic
{
    public class UserLogic : IUser
    {
        private readonly IMongoCollection<User> _userCollection;
        private readonly DBContext _ctx;

        public UserLogic(DBContext context, DBContext ctx)
        {
            _userCollection = context.Users;
            _ctx = ctx;
        }

        public List<User> GetAllUsers()
        {
            return _userCollection.Find(user => true).ToList();
        }
    }
}
