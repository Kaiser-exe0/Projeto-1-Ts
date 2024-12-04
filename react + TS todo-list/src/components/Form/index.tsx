import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Container, Forms } from "./styles.js";
import { Button } from "../Button";

import { ITask } from "../../interfaces/Task.js";

interface Props {
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  buttonTitle?: string;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void;
}

export function Form({
  taskList,
  setTaskList,
  buttonTitle = "Criar tarefa",
  task,
  handleUpdate,
}: Props) {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTask: ITask = { id, title, difficulty };

      setTaskList!([...taskList, newTask]);

      setTitle("");
      setDifficulty(0);
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <Container>
      <Forms onSubmit={addTaskHandler}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            placeholder="Digite o título"
            onChange={handleChange}
            value={title}
          />
        </div>
        <div>
          <label htmlFor="difficulty">Dificuldade:</label>
          <input
            type="text"
            name="difficulty"
            placeholder="Dificuldade da tarefa"
            onChange={handleChange}
            value={difficulty}
          />
        </div>
        <Button title={buttonTitle} />
      </Forms>
    </Container>
  );
}
