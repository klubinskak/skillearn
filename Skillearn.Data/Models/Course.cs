using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Course
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    [BsonElement("title")]
    public string Title { get; set; }

    [BsonElement("description")]
    public string Description { get; set; }

    [BsonElement("instructor")]
    public string Instructor { get; set; }

    [BsonElement("duration")]
    public string Duration { get; set; }

    [BsonElement("price")]
    public string Price { get; set; }

    [BsonElement("image")]
    public string Image { get; set; }

    [BsonElement("viewsCount")]
    public int ViewsCount { get; set; }

    [BsonElement("timeSpent")]
    public int TimeSpent { get; set; }

    [BsonElement("language")]
    public string Language { get; set; }
    [BsonElement("createdAt")]
    public DateTime createdAt { get; set; }
    [BsonElement("updateAt")]
    public DateTime updatedAt { get; set; }
    [BsonElement("rating")]
    public List<CourseRating> Rating { get; set; }
}

public class CourseRating
{
    [BsonElement("userId")]
    public int UserId { get; set; }
    [BsonElement("value")]
    public int value { get; set; }
    [BsonElement("timestamp")]
    public DateTime Timestamp { get; set; }
}
