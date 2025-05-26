import { Link } from 'react-router-dom'

export const Aside = () => {
  return (
    <>
        <aside>
            <img src="/images/sub_aside_cate1_tit.png" alt="팜스토리 소개"/>

            <ul className="lnb">
                <li className="on">
                    <Link to="/introduction/hello">인사말</Link>
                </li>
                <li className='on'>
                    <Link to="/introduction/direction">찾아오시는 길</Link>
                </li>
            </ul>
        </aside>
    </>
  )
}
