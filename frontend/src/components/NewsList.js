import React, { useState, useEffect } from 'react';
import Notice from './Notice';
import moment from 'moment';
import { apiService } from '../api/apiservice';

function NewsList() {

    const [notices, setNotices] = useState([]);

    function getNotices(){
        apiService.get("/notice/notices")
        .then(function(response){
            const notices = response.data;
            var noticesByDate = handleNoticesByDateFirstToLast(notices);
            setNotices(noticesByDate);
        })
    }

    function handleNoticesByDateFirstToLast(notices) {
        var noticesToReturn = [];
        var noticesByDate = sortDateNotices(notices);
        for (let index = 0; index < noticesByDate.length; index++) {
            let obj = notices.find(o => o._id === noticesByDate[index]._id);
            noticesToReturn.push(obj);
        }
        return noticesToReturn;
    }

    function sortDateNotices (notices) {
        var momentDates = [];
        var newNoticesWithDates = notices.slice();
        for (var i in newNoticesWithDates) {
            momentDates.push(moment(newNoticesWithDates[i].created_at));
            newNoticesWithDates[i].created_at = new Date(momentDates[i]);
        }
        newNoticesWithDates.sort(sortByDateDescAndTimeAscDateObj);
        return newNoticesWithDates;
    }

        
    function sortByDateDescAndTimeAscDateObj (lhs, rhs) {
        var results;

        results = lhs.created_at.getYear() < rhs.created_at.getYear() ? 1 : lhs.created_at.getYear() > rhs.created_at.getYear() ? -1 : 0;

        if (results === 0) results = lhs.created_at.getMonth() < rhs.created_at.getMonth() ? 1 : lhs.created_at.getMonth() > rhs.created_at.getMonth() ? -1 : 0;

        if (results === 0) results = lhs.created_at.getDate() < rhs.created_at.getDate() ? 1 : lhs.created_at.getDate() > rhs.created_at.getDate() ? -1 : 0;

        if (results === 0) results = lhs.created_at.getHours() < rhs.created_at.getHours() ? 1 : lhs.created_at.getHours() > rhs.created_at.getHours() ? -1 : 0;

        if (results === 0) results = lhs.created_at.getMinutes() < rhs.created_at.getMinutes() ? 1 : lhs.created_at.getMinutes() > rhs.created_at.getMinutes() ? -1 : 0;

        if (results === 0) results = lhs.created_at.getSeconds() < rhs.created_at.getSeconds() ? 1 : lhs.created_at.getSeconds() > rhs.created_at.getSeconds() ? -1 : 0;

        return results;
    }

    const editNotice = function (notice) {
        if(notice){
            const newNotice = notice;
            newNotice.isRemoved = true;
            apiService.put(`/notice/edit?noticeID=${newNotice._id}`, newNotice)
            .then(function () {
                getNotices()
            })
        }
    }

    useEffect( () =>{
        getNotices()
    }, []);

    

    return (
        <div>
            <table>
                <tbody>
                    {notices.map(notice =>(
                        <tr >
                            <Notice key = {notice._id} notice = {notice} editNotice={editNotice}></Notice>
                        </tr>
                    ))}
               </tbody>
            </table>
        </div>
    )
}

export default NewsList
