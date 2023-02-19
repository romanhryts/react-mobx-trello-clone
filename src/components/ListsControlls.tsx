import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useCallback, useState } from 'react';
import { Portal, Modal } from 'src/components';
import { observer } from 'mobx-react';
import { useRootStore } from 'src/hooks';


export const ListsControls = observer(() => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [newListName, setNewListName] = useState<string>('');
    const { addList, sortCardsDescending, sortCardsAscending } = useRootStore();

    const addListHandler = useCallback(() => {
        const name: string = newListName.trim();
        if (name.length) {
            void addList(name);
            setIsModalOpen(false);
        }
    }, [newListName]);

    return (
        <>
            <ListButtons>
                <ExpandMoreIcon onClick={sortCardsAscending}/>
                <ExpandLessIcon onClick={sortCardsDescending}/>
                <AddIcon onClick={() => setIsModalOpen(true)}/>
            </ListButtons>
            {isModalOpen && (
                <Portal>
                    <Modal
                        title='NEW LIST'
                        submitBtnText='ADD NEW LIST'
                        closeModalHandler={() => setIsModalOpen(false)}
                        onSubmitHandler={addListHandler}>
                        <NewListInput
                            type="text"
                            value={newListName}
                            onChange={({ target }) => setNewListName(target.value)}
                        />
                    </Modal>
                </Portal>
            )}
        </>
    )
})

const ListButtons = styled.div`
  cursor: pointer;
  display: flex;
  position: absolute;
  right: 0;
  top: 15px;
`

const NewListInput = styled.input`
  background-color: transparent;
  border: 1px solid #f7f7f7;
  outline: none;
  padding: 5px 10px;
  font-size: 20px;
`
