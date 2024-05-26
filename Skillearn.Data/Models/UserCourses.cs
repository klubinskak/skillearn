using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Skillearn.Data.Models
{
	public class UserCourses
	{
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("userId")]
        public int UserId { get; set; }

        [BsonElement("courses")]
        public List<Course>? Courses { get; set; }
    }

}

