import React from "react"
import {useState, useEffect} from "react"
import axios from 'axios'
axios.defaults.withCredentials = true

const User = ({id}) => {
    const [message, setMessage] = useState({})

    useEffect(() => {
        async function fetchData() {
            axios.get(`http://172.30.16.1:5000/users/${id}`, { withCredentials: true }).then((response) => {
                setMessage(response.data.message);
            }).catch((error) => {
                console.error('Error fetching data:', error);
            });
        }
        fetchData();
        
    }, [id]);


    return (
        <div className="company">
            <div className="company-grid">
                <div className="company-picture">
                </div>
                <div className="company-info">
                    <h1 className="company-name">{message.Name}</h1>
                    <p className="company-location">{message.Location}</p>
                    <p className="company-category">{message.Category}</p>
                    <button className="button">Connect</button>
                </div>
            </div>
        </div>
    )
}

export default User;