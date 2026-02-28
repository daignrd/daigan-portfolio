import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import Now from './pages/Now';
import Reading from './pages/Reading';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="now" element={<Now />} />
          <Route path="reading" element={<Reading />} />
          {/* Blog routes — hidden until content is ready
          <Route path="blog/:slug" element={<BlogPost />} />
          */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
