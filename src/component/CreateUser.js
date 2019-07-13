import React, { Component } from 'react';

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission: ""
        }
    }

    GetInfo = (event) => {
        const name = event.target.name
        const giatri = event.target.value
        this.setState({
            [name]: giatri
        });
        // var item = {}
        // item.id = this.state.id
        // item.name = this.state.name
        // item.tel = this.state.tel
        // item.permission = this.state.permission

    }

    HienthiForm = () => {
        if (this.props.hienthi === true) {
            return (
                <div className="col-12">
                    <form>
                        <div className="card border-primary mb-3 mt-3">
                            <div className="card-header">Thêm mới user vào hệ thống</div>
                            <div className="card-body text-primary">

                                <div className="form-group">
                                    <label htmlFor="true">tên user</label>
                                    <input onChange={(event) => { this.GetInfo(event) }} name="name" type="text" className="form-control" placeholder="nhập tên user" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="true">điện thoại</label>
                                    <input onChange={(event) => { this.GetInfo(event) }} name="tel" type="text" className="form-control" placeholder="nhập sdt" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="true">phân quyền</label>
                                    <select onChange={(event) => { this.GetInfo(event) }} name="permission" className="custom-select" required>
                                        <option value>chọn quyền</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Morderater</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" onClick={(name, tel, permission) => this.props.Add(this.state.name, this.state.tel, this.state.permission)} value="Thêm mới" className="btn btn-block  btn-primary" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }

    }


    render() {
        return (
            <div>
                {this.HienthiForm()}
            </div>



        );
    }
}

export default CreateUser;