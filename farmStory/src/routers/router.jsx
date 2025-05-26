import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/main/MainPage";
import { HelloPage } from "../pages/introduction/HelloPage";
import { DirectionPage } from "../pages/introduction/DirectionPage";

// 라우터 생성
const router = createBrowserRouter([
    {path:"/", element: <MainPage />},
    {path:"/introduction/hello", element: <HelloPage />},
    {path:"/introduction/direction", element: <DirectionPage />},
    {path:"/market/list", element: null},
    {path:"/croptalk/story", element: null},
    {path:"/croptalk/grow", element: null},
    {path:"/croptalk/school", element: null},
    {path:"/event/info", element: null},
    {path:"/community/notice", element: null},
    {path:"/user/login", element: null},
    {path:"/user/terms", element: null},
    {path:"/user/register", element: null},
    {path:"/user/logout", element: null},
    {path:"/board/list", element: null},
    {path:"/board/write", element: null},
    {path:"/board/view", element: null},
    {path:"/board/modify", element: null},
    {path:"/admin", element: null},
    {path:"/admin/product/register", element: null},
]);

// 라우터 내보내기
export default router;