import styled from 'styled-components';
import { useExactPathMatch } from '../hooks';
import { Link } from 'react-router-dom';
import { memo } from 'react';

export const Navbar = memo(() => {
    const isRoot = useExactPathMatch('/');
    const isAbout = useExactPathMatch('/about');
    return (
        <>
            <Header>
                <Nav>
                    <Title>
                        {'<trello.react/>'}
                    </Title>
                    <List>
                        {!isRoot && <ListItem><Link to='/'>Dashboard</Link></ListItem>}
                        {!isAbout && <ListItem><Link to='/about'>About</Link></ListItem>}
                    </List>
                </Nav>
            </Header>
        </>
    )
})

const Header = styled.header`
  background-color: #61DBFB;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 15vh;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 95%;
`

const Title = styled.h1`
  font-size: 40px;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 50px;
`

const ListItem = styled.li`
  cursor: pointer;
  font-size: 20px;
  text-transform: uppercase;

  :hover {
    color: #121212;
    transition: .3s ease-in-out;
  }
`

