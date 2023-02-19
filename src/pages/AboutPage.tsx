import styled from 'styled-components';

export const AboutPage = () => {
    return (
        <>
            <Container>
                <Title>
                    Hey, welcome to a <Highlighted>Trello</Highlighted> clone built
                    with <Highlighted>React</Highlighted>
                </Title>
                <List>
                    <ListItem>
                        Go to the <Highlighted>DASHBOARD</Highlighted> to view it and start managing your tasks
                    </ListItem>
                    <ListItem>
                        In your board you can create as many cards as you want to help you manage your project tasks
                    </ListItem>
                    <ListItem>
                        This project has been developed with the aim of studying and practicing web development,
                        interfaces building and styling, the source code can be found
                    </ListItem>
                </List>
            </Container>
        </>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 0 auto;
  padding-top: 5%;
  width: 60%;
`

const Title = styled.h2`
  align-self: center;
  font-size: 40px;
  font-weight: 400;
`

const Highlighted = styled.span`
  color: #61DBFB;
  font-weight: 700;
`

const List = styled.ul`
  font-size: 23px;
`

const ListItem = styled.li`
  padding-bottom: 2.5rem;
`
