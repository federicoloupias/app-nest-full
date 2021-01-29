import React, { useState } from 'react';
import '../styles/Notice.css';
import Moment from 'react-moment';
import moment from 'moment';

function Notice(props) {
    const [notice, setNotice] = useState(props.notice);

    
    function openInNewTab (url){
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    function handleDate() {
        const dateToFormat = new Date(notice.created_at);
        var today = moment();
        var yesterday = moment().subtract(1, 'day');

        var engagementDate = (dateToFormat);

        if(moment(engagementDate).isSame(today, 'day')){
            return <Moment className="date" date = {engagementDate} format="HH:mm A" />
        }else if(moment(engagementDate).isSame(yesterday, 'day')){
            return (<span className="date">Yesterday</span>);
        }
        return <Moment className="date" date={dateToFormat} format="MMM D" />
        
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
          if(!notice.isRemoved && handleTitle() != null ){
            return (
                <>
                    <td onClick={() => openInNewTab(handleUrl(notice))} className="notice" key = {notice._id}>{handleTitle()} - <span className="author">{notice.author}</span> - 
                    </td>
                    <td>
                        <div>{handleDate()} </div>
                    </td>
                    <td>
                    <svg className="svg" onClick={() => props.editNotice(notice)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
                    
                    </td>
                </>
            );
          }else{
            return;
          }
      }




    
    return (
        <>
            {handleShow(notice)}
        </>
    )
}

export default Notice
