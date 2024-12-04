import { ITask } from "../../interfaces/Task.js";
import { Button } from "../Button/index.js";
import { Container, Task } from "./styles.js";

import { FiTrash, FiEdit } from "react-icons/fi";

interface Props {
  taskList: ITask[];
  handleDelete: (id: number) => void;
  handleEdit: (task: ITask) => void;
}

export function TaskList({ taskList, handleDelete, handleEdit }: Props) {
  return (
    <Container>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id}>
            <Task>
              <div className="info">
                <h4>{task.title}</h4>
                <span>Dificuldade:{task.difficulty}</span>
              </div>
              <div className="actions">
                <Button
                  isTrash
                  onClick={() => {
                    handleDelete(task.id);
                  }}
                >
                  <FiTrash />
                </Button>
                <Button onClick={() => handleEdit(task)}>
                  <FiEdit />
                </Button>
              </div>
            </Task>
          </div>
        ))
      ) : (
        <p>Não tem tarefas cadastradas!</p>
      )}
    </Container>
  );
}

export default TaskList;
