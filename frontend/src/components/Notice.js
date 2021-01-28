import React, { useState, useEffect } from 'react';
import '../styles/Notice.css';
import axios from 'axios';

function Notice(props) {
    console.log('props - ',props)
    const [notice, setNotice] = useState(props.notice);

    function editNotice(notice) {
        var newNotice = notice;
        newNotice.isRemoved = true;
        axios.put(`/notice/edit?noticeID=${newNotice._id}`, newNotice)
        .then(
            setNotice(newNotice)
        )
      }
    

      function handleTitle() {
        var result = null;
            if(notice.story_title == null){
                if(notice.title==null){
                    result = null;
                }else{
                    return (notice.title);
                }
            }else{
                return (notice.story_title);
            }
        return result;
      }

      function handleUrl() {
        var result = null;
            if(notice.story_url == null){
                if(notice.url==null){
                    result = null;
                }else{
                    return (notice.url);
                }
            }else{
                return (notice.story_url);
            }
        return result;
      }

      function handleShow(notice) {
          if(!notice.isRemoved){
            return (
                <a href={handleUrl()} target="_blank">
                    <td className="notice" key = {notice._id}>{handleTitle()} - {notice.author} - <div className="date">{notice.created_at}</div>
                        <button className="button" onClick={() => editNotice(notice)}>
                    Delete
                        </button>
                    </td>
                </a>
            );
          }else{
            return <li>Story removed</li>;
          }
      }




    
    return (
        <div>
            {handleShow(notice)}
        </div>
    )
}

export default Notice
