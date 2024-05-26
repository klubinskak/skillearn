using MongoDB.Driver;
using Skillearn.Data.Data;
using Skillearn.Data.Logic.Interfaces;
using Skillearn.Data.Models;

namespace Skillearn.Data.Logic
{
    public class UserLogic : IUser
    {
        private readonly IMongoCollection<UserModel> _userCollection;
        private readonly DBContext _ctx;

        public UserLogic(DBContext ctx)
        {
            _userCollection = ctx.Users;
            _ctx = ctx;
        }

        public List<UserModel> GetAllUsers()
        {
            return _userCollection.Find(user => true).ToList();
        }

        public UserModel UpdateUser(UserModel model)
        {
            UserModel returnModel = new UserModel();
            var currentData = Builders<UserModel>.Filter.Eq(u => u.Id, model.Id);

            var updateData = Builders<UserModel>.Update
                .Set(u => u.Name, model.Name)
                .Set(u => u.Country, model.Country)
                .Set(u => u.Role, model.Role)
                .Set(u => u.Department, model.Department);

            try
            {
                _userCollection.UpdateOne(currentData, updateData);

                returnModel = _userCollection.Find(u => u.Id == model.Id).FirstOrDefault();


            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("User not found or update failed.");
            }

            return returnModel;
        }
    }
}
