import { memo, useCallback, useState } from "react";

interface ItemsListProps {
    getItems: () => string[];
}

const ItemsList = memo(({ getItems }: ItemsListProps) => {
    console.log("[ItemsList]: Render");
    const renderedItems = getItems().map((item, i) => <li key={i}>{item}</li>);
    return <ul>{renderedItems}</ul>
});

const UseCallbackSample = () => {
    console.log("[UseCallbackSample]: Render");
    const [ isColored, setIsColored ] = useState(false);
    const [ count, setCount ] = useState(0);

    const generateItemsFromAPI = useCallback(() => {
        return new Array(count).fill("").map((_, i) => `Item ${i + 1}`);
    }, [ count ]);

    const increaseCounter = (): void => setCount((prev) => prev + 1);
    const toggleColor = (): void => setIsColored((prev) => !prev);

    const styles = {
        color: isColored ? "darkred" : "black",
    };

    return (
        <>
            <h1 style={styles}>Amount of elements: {count}</h1>
            <div className="flex-row">
                <button className="btn btn-primary text-uppercase border me-2 p-2" onClick={increaseCounter}>
                    Increase
                </button>
                <button className="btn btn-warning text-uppercase border p-2" onClick={toggleColor}>
                    Change color
                </button>
            </div>
            <ItemsList getItems={generateItemsFromAPI}/>
        </>
    );
};

export default UseCallbackSample;
