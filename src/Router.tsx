import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { ErrorPage } from './component/ErrorPage';
import { FadeInSample } from './FadeInSample';
import { Profile } from './Profile';
import { Works } from './Works';
import { WorksDetail } from './WorksDetail';
const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<Profile />} />
                        <Route path="/product" element={<Works />} />
                        <Route path="/product/:id" element={<WorksDetail />} />
                        <Route path="/contact" element={<Profile />} />

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