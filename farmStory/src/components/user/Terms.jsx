import React, { useEffect, useState } from "react";
import { getTerms } from "../../api/userAPI";
import { Link } from "react-router-dom";

export const Terms = () => {
  const [termsText, setTermsText] = useState("");
  const [privacyText, setPrivacyText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTerms();

        setTermsText(data.terms);
        setPrivacyText(data.privacy);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="terms">
      <h2 className="tit">사이트 이용약관</h2>
      <table border="1">
        <tr>
          <td>
            <textarea name="terms" value={termsText}></textarea>
            <label>
              <input type="checkbox" className="terms" />
              &nbsp;동의합니다.
            </label>
          </td>
        </tr>
      </table>
      <h2 className="tit">개인정보 취급방침</h2>
      <table border="1">
        <tr>
          <td>
            <textarea name="privacy" value={privacyText}></textarea>
            <label>
              <input type="checkbox" className="privacy" />
              &nbsp;동의합니다.
            </label>
          </td>
        </tr>
      </table>
      <div>
        <Link to="/user/login" className="btn btnCancel">
          취소
        </Link>
        <Link to="/user/register" className="btn btnNext">
          다음
        </Link>
      </div>
    </section>
  );
};
