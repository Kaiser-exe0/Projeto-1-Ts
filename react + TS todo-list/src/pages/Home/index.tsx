//dependencies

import { useState } from "react";

//Components

import { Footer } from "../../components/Footer/index.js";
import { Header } from "../../components/Header/index.js";
import { Form } from "../../components/Form/index.js";
import { TaskList } from "../../components/List/index.js";
import { Container, Main } from "./styles.js";
import { Modal } from "../../components/Modal/index.js";
import { ITask } from "../../interfaces/Task.js";

function Home() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const editTesk = (task: ITask): void => {
    setTaskToUpdate(task);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setTaskToUpdate(null);
    setIsModalOpen(false);
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty };
    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });
    setTaskList(updatedItems);

    setIsModalOpen(false);
  };

  return (
    <Container>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <Form
            taskList={taskList}
            buttonTitle="Salvar tarefa"
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        </Modal>
      )}
      <Header />
      <Main>
        <h1>oque deseja fazer?</h1>
        <Form
          taskList={taskList}
          setTaskList={setTaskList}
          buttonTitle="Criar tarefa"
        />
        <TaskList
          taskList={taskList}
          handleDelete={deleteTask}
          handleEdit={editTesk}
        />
      </Main>
      <Footer />
    </Container>
  );
}

export default Home;
