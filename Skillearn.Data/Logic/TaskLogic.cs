using System;
using MongoDB.Driver;
using Skillearn.Data.Data;
using Skillearn.Data.Models;

namespace Skillearn.Data.Logic.Interfaces
{
	public class TaskLogic : ITask
	{
        private readonly IMongoCollection<TaskModel> _tasksCollection;
        private readonly DBContext _ctx;

        public TaskLogic(DBContext ctx)
        {
            _tasksCollection = ctx.Tasks;
            _ctx = ctx;
        }

        public List<TaskModel> GetTasks(string dateTime)
        {
            return _tasksCollection.Find(task => task.Date == dateTime).ToList();
        }

    }
}

