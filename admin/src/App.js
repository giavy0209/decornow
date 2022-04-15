import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Staff from "./pages/Staff";
import Discount from "./pages/Discount";
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
        <Menu.Item key='/admin/staff'>Nhân viên</Menu.Item>
        <Menu.Item key='/admin/discount'>Mã giảm giá</Menu.Item>
      </Menu>
      </>
      }
      <Routes>
        <Route path='/admin/login' element={<Login />} />
        <Route path='/admin/upload' element={<Upload />} />
        <Route path='/admin/staff' element={<Staff />} />
        <Route path='/admin/discount' element={<Discount />} />
      </Routes>
    </div>
  );
}

export default App;
