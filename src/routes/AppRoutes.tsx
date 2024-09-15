import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Tools } from '../pages/Tools';
import { Tutorials } from '../pages/Tutorials';
import { Support } from '../pages/Support';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path='/tutorials' element={<Tutorials />} />
            <Route path='/support' element={<Support />} />
        </Routes>
    )
}
