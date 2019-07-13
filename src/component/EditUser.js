import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id : this.props.ObjectSua.id,
            name : this.props.ObjectSua.name,
            tel : this.props.ObjectSua.tel,
            permission : this.props.ObjectSua.permission
        }
    }
    onChange =(event) =>{
        var name = event.target.name
        var giatri = event.target.value
        this.setState({
            [name] : giatri
        });
    }
    ButtonSave =() =>{
        this.props.SuaCha()
        
        var info = {}
        info.id = this.state.id
        info.name = this.state.name
        info.tel = this.state.tel
        info.permission = this.state.permission
        this.props.EditUser(info)
    }
    render() {
        return (
            <div className="col">
                <form>
                    <div className="card text-white bg-warning mb-3 mt-3">
                        <div className="card-header text-center">Sửa thông tin user</div>
                        <div className="card-body text-primary">

                            <div className="form-group">
                                <label htmlFor="true">tên user</label>
                                <input onChange={(event)=>{this.onChange(event)}} defaultValue = {this.props.ObjectSua.name} name="name" type="text" className="form-control" placeholder="nhập tên user" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="true">điện thoại</label>
                                <input onChange={(event)=>{this.onChange(event)}} defaultValue = {this.props.ObjectSua.tel} name="tel" type="text" className="form-control" placeholder="nhập sdt" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="true">phân quyền</label>
                                <select onChange={(event)=>{this.onChange(event)}} defaultValue = {this.props.ObjectSua.permission} name="permission" className="custom-select" required>
                                    <option value>chọn quyền</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Morderater</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input onClick ={()=>{this.ButtonSave()}}
                                type="button"  value="Lưu thông tin" className="btn btn-block  btn-danger" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;