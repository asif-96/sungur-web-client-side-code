import React from 'react';
import UserSideBar from '../UserSideBar/UserSideBar';

const ShowPurchaseBundle = () => {




    return (
        <div className="container p-3">
            <div className="row border-bottom">
                <h3 className="display-6">Purchase History</h3>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <UserSideBar></UserSideBar>
                </div>
                <div className="col-md-9 div-border">
                    <h1>Cooming Soon...!</h1>
                </div>
            </div>
        </div>
    );
};

export default ShowPurchaseBundle;