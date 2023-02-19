import styled from 'styled-components';
import { Lists, ListsControls } from 'src/components';

export const DashboardPage = () => {
    return (
        <Container>
            <Title>Your board</Title>
            <ListsControls/>
            <Lists/>
        </Container>

    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0 auto;
  position: relative;
  width: 85%;
  min-height: 85vh;
`

const Title = styled.h2`
  align-self: center;
  display: inline-block;
  font-size: 40px;
  font-weight: 400;
  margin-top: 1rem;
`
