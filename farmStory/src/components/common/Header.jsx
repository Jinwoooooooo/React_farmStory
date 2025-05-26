import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
        <header>
            <Link to="/" className="logo"><img src="/images/logo.png" alt="로고" /></Link>
            <p>
                <Link to="/">HOME |</Link>
                <Link to="/user/login">로그인 |</Link>
                <Link to="/user/terms">회원가입 |</Link>                
                <Link to="/myinfo/cart">나의정보 |</Link>
                <Link to="#">로그아웃 |</Link>
                <Link to="/admin/">관리자 |</Link>
                <Link to="/community/qna">고객센터</Link>
            </p>
            <img src="/images/head_txt_img.png" alt="3만원 이상 무료배송" />

            <ul className="gnb">
                <li><Link to="/introduction/hello">팜스토리소개</Link></li>
                <li><Link to="/market/list"><img src="/images/head_menu_badge.png" alt="30%" />장보기</Link></li>
                <li><Link to="/croptalk/story">농작물이야기</Link></li>
                <li><Link to="/event/event">이벤트</Link></li>
                <li><Link to="/community/notice">커뮤니티</Link></li>
            </ul>
        </header>
    </>
  )
}
