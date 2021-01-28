import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Notice from './Notice'

function NewsList() {

    const [notices, setNotices] = useState([])

    useEffect( () =>{
        axios.get("/notice/notices")
        .then(function(response){
            const hits = response.data;
            setNotices(hits);
        })
    }, []);

    return (
        <div>
            <table>
                <tr>
                {notices.map(notice =>(
                    <Notice key = {notice._id} notice = {notice}></Notice>
                ))}
                </tr>
            </table>
        </div>
    )
}

export default NewsList
