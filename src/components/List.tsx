import styled from 'styled-components';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { memo, useCallback, useState } from 'react';
import { observer } from 'mobx-react';
import { IList } from 'src/types';
import { Task, Modal, Portal } from 'src/components';
import { useRootStore } from 'src/hooks';


export const List = memo(observer(({ data }: { data: IList }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [newTaskName, setNewTaskName] = useState<string>('');
    const { deleteList, addTask, draggingFromListID, changeListOfTask } = useRootStore();

    const closeModalHandler = useCallback(() => setIsModalOpen(false), []);

    const handleAddTask = useCallback(() => {
        const name = newTaskName.trim();
        if (name.length) {
            void addTask(name, data._id);
            closeModalHandler();
        }
    }, [newTaskName])

    const handleDeleteList = () => {
        void deleteList(data._id);
    }

    const handleDrop = () => {
        if (data._id !== draggingFromListID) {
            void changeListOfTask(data._id);
        }
    }

    return (
        <>
            <ListItem onDragEnter={(e) => e.preventDefault()}
                      onDragLeave={(e) => e.preventDefault()}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleDrop}>
                <ListHead>
                    <ListTitle>{data.name}</ListTitle>
                    <ListControls>
                        <AddCircleOutlineOutlinedIcon onClick={() => setIsModalOpen(true)}/>
                        <RemoveCircleOutlineIcon onClick={handleDeleteList}/>
                    </ListControls>
                </ListHead>
                <ListBody>
                    {data.cards.map(card => <Task card={card} key={card._id}/>)}
                </ListBody>
            </ListItem>
            {isModalOpen && (
                <Portal>
                    <Modal
                        title='NEW TASK'
                        submitBtnText='ADD NEW TASK'
                        closeModalHandler={closeModalHandler}
                        onSubmitHandler={handleAddTask}>
                        <NewTaskInput
                            type="text"
                            value={newTaskName}
                            onChange={({ target }) => setNewTaskName(target.value)}/>
                    </Modal>
                </Portal>
            )}
        </>
    )
}))

const ListItem = styled.div`
  border: 1px solid #f7f7f7;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 150px;
`

const ListHead = styled.div`
  background-color: #3d3d3d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px 0 10px;
`

const ListTitle = styled.h3`
  color: #f7f7f7;
  padding: 15px 0;
`

const ListBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`

const ListControls = styled.div`
  cursor: pointer;
  display: flex;
`

const NewTaskInput = styled.input`
  background-color: transparent;
  border: 1px solid #f7f7f7;
  outline: none;
  padding: 5px 10px;
  font-size: 20px;
`
