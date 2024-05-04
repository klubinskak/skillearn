using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Skillearn.Data.Models
{
    public class UserModel
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("country")]
        public string Country { get; set; }

        [BsonElement("role")]
        public string Role { get; set; }

        [BsonElement("department")]
        public string Department { get; set; }
    }
}
