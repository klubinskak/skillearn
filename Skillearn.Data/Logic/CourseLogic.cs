using MongoDB.Bson;
using MongoDB.Driver;
using Skillearn.Data.Data;
using Skillearn.Data.Logic.Interfaces;
using Skillearn.Data.Models;
using System.Collections.Generic;
using System;

namespace Skillearn.Data.Logic
{
    public class CourseLogic :ICourse 
    {
        private readonly IMongoCollection<Course> _courseCollection;
        private readonly IMongoCollection<UserCourses> _userCoursesCollection;
        private readonly DBContext _ctx;

        public CourseLogic(DBContext ctx)
        {
            _courseCollection = ctx.Courses;
            _userCoursesCollection = ctx.UserCourses;
            _ctx = ctx;
        }

        public List<Course> GetAllCourses()
        {
            return _courseCollection.Find(course => true).ToList();
        }

        public List<Course> GetTopCourses(int limit)
        {
            var pipeline = new List<BsonDocument>
{
            // Sorting
            BsonDocument.Parse(@"{
                $sort: {
                    viewsCount: -1,
                    timeSpent: -1
                }
            }"),
            // Limiting
            BsonDocument.Parse($"{{ '$limit': {limit} }}")
            };


            var cursor = _courseCollection.Aggregate<Course>(pipeline);
            return cursor.ToList();
        }

        public Course GetCourseDetail(string courseId)
        {
            return _courseCollection.Find(course => course.Id == courseId).FirstOrDefault();
        }

        public List<UserCourses> GetUserCourses(int userId)
        {
            return _userCoursesCollection.Find(item => item.UserId == userId).ToList();
        }
    }
};
