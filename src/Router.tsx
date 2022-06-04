import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { ErrorPage } from './component/ErrorPage';
const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<App />} />

                        {/* Not Found */}

                        <Route path="*" element={
                            <ErrorPage text={'お探しのページは見つかりませんでした'} onClick={() => {
                                window.location.href = "/";
                            }} buttonText={'ホームに戻る'} />
                        }
                        />

                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Router;