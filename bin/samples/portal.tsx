import ReactDOM from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

const Message = () => {
  return <p className="fs-5">Portal message!</p>;
};

const Portal = ({ children }: PortalProps) => {
  const div: HTMLElement = document.createElement("div");
  document.body.appendChild(div);
  return ReactDOM.createPortal(children, div);
};

const PortalSample = () => {
  return (
    <>
      <Portal>
        <Message />
      </Portal>
    </>
  );
};

export default PortalSample;
