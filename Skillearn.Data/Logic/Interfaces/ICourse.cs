using Skillearn.Data.Models;

namespace Skillearn.Data.Logic.Interfaces
{
    public interface ICourse
    {
        public List<Course> GetAllCourses();
        public List<Course> GetTopCourses(int limit);
        public Course GetCourseDetail(string courseId);
        public List<UserCourses> GetUserCourses(int userId);
    }
}