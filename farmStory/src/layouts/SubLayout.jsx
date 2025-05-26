import { Aside } from '../components/common/Aside'

export const SubLayout = ({ children }) => {
  return (
    <>
        <div id="sub">
            <div><img src="/images/sub_top_tit1.png" alt="INTRODUCTION"/></div>
            <section class="introduction">
                <Aside />
                <article>
                    <nav>
                        <img src="/images/sub_nav_tit_cate1_tit1.png" alt="인사말"/>
                        <p>
                            HOME &gt; 팜스토리소개 &gt; <em>인사말</em>
                        </p>
                    </nav>

                    {/* 내용 시작 */}
                    { children }
                    {/* 내용 끝 */}

                </article>
            </section>
        </div>
    </>
  )
}
