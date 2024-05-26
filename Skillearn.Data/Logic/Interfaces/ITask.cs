using System;
using Skillearn.Data.Models;

namespace Skillearn.Data.Logic.Interfaces
{
	public interface ITask
	{
        public List<TaskModel> GetTasks(string dateTime);
    }
}

