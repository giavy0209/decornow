import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Upload from "./pages/Upload";
import Categories from "./pages/Categories";
import Banners from "./pages/Banners";
import Info from "./pages/Info";
import News from "./pages/News";
import Login from "./pages/Login";
import { Menu } from "antd";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [currentUrl, setCurrentUrl] = useState('/');
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, [location])

  const handleClick = useCallback(selectedItem => {
    setCurrentUrl(selectedItem.key);
    navigate(selectedItem.key);
  },[]);
  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div className="App">
      {!token && <div style={{position : 'fixed' , top : 10, right : 10}} onClick={()=>navigate('/admin/login')} className="logout">Login</div> }
      {token && 
      <>
      <div className="logout" style={{position : 'fixed' , top : 10, right : 10}} onClick={logout}>Logout</div>
      <Menu
        onClick={handleClick}
        mode="horizontal"
        selectedKeys={[currentUrl]}
      >
        <Menu.Item key='/admin/upload'>Hình ảnh</Menu.Item>
        <Menu.Item key='/admin/danh-muc'>Danh mục</Menu.Item>
        <Menu.Item key='/admin/banner'>Banner</Menu.Item>
        <Menu.Item key='/admin/news'>Tin tức- dự án</Menu.Item>
        <Menu.Item key='/admin/info'>Liên hệ</Menu.Item>
      </Menu>
      </>
      }
      <Routes>
        <Route path='/admin/upload' element={<Upload />} />
        <Route path='/admin/danh-muc' element={<Categories />} />
        <Route path='/admin/banner' element={<Banners />} />
        <Route path='/admin/news' element={<News />} />
        <Route path='/admin/info' element={<Info />} />
        <Route path='/admin/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
