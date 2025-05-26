import { useLocation, useSearchParams } from 'react-router-dom';

// cate1, cate2를 구하는 커스텀 훅
export const useCates = () => {

    const location = useLocation();
    const [searchParams] = useSearchParams();

    const pathValues = location.pathname.split("/");

    const cate1 = pathValues[1];
    const cate2 = pathValues[2];

    return [cate1, cate2];
};

export default useCates;
