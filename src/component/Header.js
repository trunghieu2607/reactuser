import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (

            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-3">Quản lí giao diện thành viên bằng reactjs</h1>
                    <p>với dữ liệu jason</p>
                    <hr className="my-2" />
                </div>
            </div>
        );
    }
}

export default Header;