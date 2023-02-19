import styled from 'styled-components';
import { observer } from 'mobx-react';
import { List } from 'src/components';
import { useDidMount, useRootStore } from 'src/hooks';
import { toJS } from 'mobx';

export const Lists = observer(() => {
    const { lists, loading, isError, getLists } = useRootStore();
    const parsedLists = toJS(lists);

    useDidMount(() => {
        if (!parsedLists.length) {
            void getLists();
        }
    }, []);


    if (loading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>Error...</h1>
    }


    return (
        <Container>
            {parsedLists.map(list => (<List data={list} key={list._id}/>))}
        </Container>
    )
})

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 35px;
  text-align: center;
  margin: 0 auto;
  width: 100%;
`






