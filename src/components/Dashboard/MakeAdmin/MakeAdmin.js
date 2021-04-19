import React, { useEffect } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
const MakeAdmin = () => {
    document.title = "Make Admin";
    const { register, handleSubmit,formState: { errors } } = useForm();
    let history = useHistory();
    const onSubmit = data =>{        
        fetch('http://localhost:5000/addAdminEmail',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){               
                alert('New admin added successfully.');
                history.push("/dashboard");
            }
        })
    };
    
    return (
        <section className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-lg-10 col-md-6 mx-auto">
                <h3 className="text-center">Make admin</h3>
                <hr style={{backgroundColor:'lightgray'} }/>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="">Email</label>
                    <div className="d-flex">
                        <div className="form-group">
                            <input id="adminEmail" type="text" {...register('email', { required: true })} placeholder="edison@gmail.com" className="form-control" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group" >
                            <button type="submit" className="btn btn-dark">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default MakeAdmin;