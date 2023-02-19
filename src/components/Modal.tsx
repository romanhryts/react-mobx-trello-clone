import { memo, ReactNode, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface IModalProps {
    children: ReactNode;
    title: string;
    submitBtnText: string;
    closeModalHandler: () => void;
    onSubmitHandler: () => void;
}

export const Modal = memo(
    ({ children, title, closeModalHandler, submitBtnText, onSubmitHandler }: IModalProps) => {
        const containerRef = useRef<HTMLDivElement | null>(null);

        const closeHandler = useCallback((event: Event) => {
            if (event.target === containerRef.current) {
                closeModalHandler();
            }
        }, []);


        useEffect(() => {
            containerRef.current?.addEventListener('click', closeHandler);
            return () => containerRef.current?.removeEventListener('click', closeHandler);
        }, [])


        return (
            <Container ref={containerRef} className={'container-modal'}>
                <ModalBody>
                    <ModalTitle>{title}</ModalTitle>
                    {children}
                    <ModalButton onClick={onSubmitHandler}>{submitBtnText}</ModalButton>
                </ModalBody>
            </Container>
        )
    }
)

const Container = styled.div`
  background-color: rgba(0, 0, 0, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`

const ModalBody = styled.div`
  border: 1px solid #f7f7f7;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 200px;
  min-width: 320px;
  padding: 20px 10px;
`

const ModalTitle = styled.h3`
  color: #f7f7f7;
  font-size: 25px;
`

const ModalButton = styled.button`
  border: 1px solid #f7f7f7;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  padding: 5px 10px;
`
