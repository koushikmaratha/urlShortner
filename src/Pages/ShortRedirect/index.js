import React from 'react';
import {
    useParams
} from "react-router-dom";
const ShortRedirect = () => {
    let { id } = useParams();

    return (
        <div className="container mt-5 ">
            <p>{id}</p>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <span style={{ fontSize: '3em' }}><i class="fas fa-spinner fa-spin"></i></span>
            </div>
        </div>
    );
};

export default ShortRedirect;