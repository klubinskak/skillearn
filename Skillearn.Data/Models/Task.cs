using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Skillearn.Data.Models
{
	public class TaskModel
	{
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonElement("title")]
        public string Title { get; set; }
        [BsonElement("description")]
        public string Description { get; set; }
        [BsonElement("isDone")]
        public bool IsDone { get; set; }
        [BsonElement("date")]
        public string Date { get; set; }
        [BsonElement("userId")]
        public string UserId { get; set; }
        [BsonElement("entity")]
        public string Entity { get; set; }
        [BsonElement("startTime")]
        public string StartTime { get; set; }
        [BsonElement("endTime")]
        public string EndTime { get; set; }
    }
}

