import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const loadStateFromCookie = () => {
    const username = Cookies.get("username");

    return { username };
};

const initState = {
    username: '',
};

const loginSlice = createSlice({
    name: "loginSlice",
    initialState: loadStateFromCookie() || initState,
    reducers: {
        login: (state, action) => { // state가 initState를 가르킴.
            // redux username 초기화
            const data = action.payload;
            state.username = data.username;

            // username 쿠키 저장
            Cookies.set("username", state.username, 1);
        },
        logout: (state) => {
            state.username = null;

            // 쿠키 삭제
            Cookies.remove('username');
            //Cookies.remove('access_token'); // 서버에서 생성된 읽기만 가능한 쿠키 (HttpOnlyCookie)
            //Cookies.remove('refresh_token'); // 자바스크립트로 접근이 불가능해서 이렇게 삭제할 수 없음.
        },
    },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;