using MongoDB.Driver;
using Skillearn.Data.Data;
using Skillearn.Data.Logic.Interfaces;
using Skillearn.Data.Models;

namespace Skillearn.Data.Logic
{
    public class RoleLogic : IRole
    {
        private readonly IMongoCollection<RoleModel> _rolesCollection;
        private readonly DBContext _ctx;

        public RoleLogic(DBContext context, DBContext ctx)
        {
            _rolesCollection = context.Roles;
            _ctx = ctx;
        }

        public List<RoleModel> GetAllRoles()
        {
            return _rolesCollection.Find(role => true).ToList();
        }

    }
}
