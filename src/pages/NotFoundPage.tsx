import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
    return (
        <>
            <Container>
                <ErrorMessage>Page not found.</ErrorMessage>
                <ErrorCode>404</ErrorCode>
                <BackLink><Link to='/'>Return back to the home?</Link></BackLink>
            </Container>
        </>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  width: 100vw;
  height: 85vh;
`

const ErrorMessage = styled.p`
  font-size: 45px;
`

const ErrorCode = styled.span`
  color: #ff3333;
  font-size: 65px;
`

const BackLink = styled.span`
  border-bottom: 1px solid #f7f7f7;
  font-size: 25px;
`
