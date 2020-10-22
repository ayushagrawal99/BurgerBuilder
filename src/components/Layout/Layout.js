import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import './Layout.css';

const layout = (props) => {
    return(
        <Aux>
            <div>Toolbar, Navigation, SideDrawer</div>
            <main className="Content">
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;