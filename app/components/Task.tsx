import { ITask } from "@/types/tasks";

interface ITaskProps{
    task:ITask
}

const Task:React.FC<ITaskProps> = ({task}) => {
  return (
    <tr key={task.id} className="bg-blue-100">
      <td>{task.text}</td>
      <td>Blue</td>
    </tr>
  );
};

export default Task;
