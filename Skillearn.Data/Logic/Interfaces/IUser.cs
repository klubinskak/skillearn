using Skillearn.Data.Models;

namespace Skillearn.Data.Logic.Interfaces
{
    public interface IUser
    {
        public List<UserModel> GetAllUsers();
        public UserModel UpdateUser(UserModel model);
    }
}
