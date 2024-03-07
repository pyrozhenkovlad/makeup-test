import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {ConfigProvider} from 'antd';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ConfigProvider theme={{
                token: {
                    colorPrimary: '#00b96b'
                },
                components: {
                    Button: {
                        colorBgBase: '#00b96b',
                    },
                },
            }}>
                <App/>
            </ConfigProvider>
        </BrowserRouter>
    </React.StrictMode>
);

