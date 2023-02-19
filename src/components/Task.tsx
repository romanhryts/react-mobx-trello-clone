import styled from 'styled-components';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { observer } from 'mobx-react';
import { timeAgo } from 'src/utils';
import { useRootStore } from 'src/hooks';
import { ICard } from 'src/types';
import { memo, useCallback } from 'react';

export const Task = memo(observer(({ card }: { card: ICard }) => {
    const { deleteTask, setIDsOnDrag } = useRootStore();

    const handleDelete = useCallback(() => {
        void deleteTask(card._id, card.listID);
    }, []);

    const handleDragStart = () => {
        setIDsOnDrag(card._id, card.listID);
    }

    return (
        <TaskContainer key={card._id} draggable={true} onDragStart={handleDragStart}>
            <TaskContent>
                <TaskName>
                    {card.name}
                </TaskName>
                <TaskDate>
                    {timeAgo(card.updatedAt)}
                </TaskDate>
            </TaskContent>
            <DeleteOutlineIcon onClick={handleDelete} style={{ cursor: 'pointer' }}/>
        </TaskContainer>
    )
}))

const TaskContainer = styled.div`
  border-radius: 10px;
  border: 1px solid #f7f7f7;
  background-color: #212121;
  color: #f7f7f7;
  cursor: grab;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  padding: 10px;
  min-height: 50px;
  width: 100%;
`

const TaskName = styled.p`
  font-size: 15px;
`

const TaskContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const TaskDate = styled.span`
  font-size: 10px;
`
