import React, { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../AppRedux/hook";
import { fetchDetailUser, fetchUser } from "./slice";
import '../util/style.css';
import { Modal } from "antd";

function User() {
    const dispatch = useAppDispatch();
    const userData = useAppSelector(({users}) => users.post);
    console.log('userdata', userData);
    const [isShowModal, setIsShowModal] = useState(false);

    useEffect(() => {
        if(userData.length<1){
            dispatch(fetchUser({}))
        }
    }, [dispatch, userData])
    return(
        <div className="user-content">
          {userData.map((item, index) => {
            return (
                <div 
                    key={item.id} 
                    className="user-item"
                    onClick={() => {
                        dispatch(fetchDetailUser(item.id));
                        setIsShowModal(true)
                    }
                    }
                >
                    <p>{item.first_name} - {item.last_name}</p>
                    <p>{item.email}</p>
                    <img src={item.avatar} alt="" />
                </div>
            )
          })}  
            <Modal
                open={isShowModal}
                onCancel={()=>setIsShowModal(false)}
                closeIcon={<div></div>}
                footer={null}
                className="order-modal modal-order-history-detail"
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>

            </Modal>
        </div>
        
    )
}

export default User;
