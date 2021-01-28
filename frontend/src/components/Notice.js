import React, { useState, useEffect } from 'react';
import '../styles/Notice.css';
import axios from 'axios';

function Notice(props) {
    console.log('props - ',props)
    const [notice, setNotice] = useState(props.notice);

    

    function editNotice(notice) {
        console.log("NOTICIA A EDITAR ", notice)
        var newNotice = notice;
        newNotice.isRemoved = true;
        axios.put(`/notice/edit?noticeID=${newNotice._id}`, newNotice)
        .then(
            setNotice(newNotice)
        )
      }
    
    function openInNewTab (url){
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    function handleUrl(notice) {
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

      

      function handleShow(notice) {
          if(!notice.isRemoved){
            return (
                <>
                    <td onClick={() => openInNewTab(handleUrl(notice))} className="notice" key = {notice._id}>{handleTitle()} - <span className="author">{notice.author}</span> - 
                    </td>
                    <td>
                        <div className="date">{notice.created_at} </div>
                    </td>
                    <td>
                    <svg className="svg" onClick={() => editNotice(notice)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
                    
                    </td>
                </>
            );
          }else{
            return<>
                    <td>
                        Story removed
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                </>;
          }
      }




    
    return (
        <>
            {handleShow(notice)}
        </>
    )
}

export default Notice
