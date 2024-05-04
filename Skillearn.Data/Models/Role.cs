using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Skillearn.Data.Models
{
    public class RoleModel
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonElement("name")]
        public string Name { get; set; }
        [BsonElement("description")]
        public string Description { get; set; }
    }
}
