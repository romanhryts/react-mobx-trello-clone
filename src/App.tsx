import { observer } from 'mobx-react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'src/components';

const App = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}
export default observer(App);
