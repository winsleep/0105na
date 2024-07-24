import React from 'react';
import '../index.css';
import ilonaImage from '../image/ilona.png'; 

export default function Profile() {
    return (
        <div className="profile-page">
            <div className="level-bar">
                <div className="level-circle">4</div>
                <div className="character-name">이로나</div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: '75%' }}></div>
                </div>
                <div className="score">15/20</div>
            </div>
            <div className="top-right">
                <div className="icons">
                    <button className="icon-button">9999 +</button>
                    <button className="icon-button">가방</button>
                    <button className="icon-button">알림</button>
                    <button className="icon-button">설정</button>
                </div>
            </div>
            <img src={ilonaImage} alt="Ilona" className="center-image" />
            <div className="bottom-buttons">
                <button className="button">입장하기</button>
                <button className="button">혼자하기</button>
                <button className="button small">채팅</button>
                <button className="button small">상점</button>
            </div>
        </div>
    );
}