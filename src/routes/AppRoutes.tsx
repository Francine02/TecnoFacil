import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Tools } from '../pages/Tools';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />

        </Routes>
    )
}
