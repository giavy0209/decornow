import { FC } from "react";
import Iframe from 'react-iframe'
import { FiUpload, FiPhone, FiShoppingCart } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import { AiOutlineMail } from 'react-icons/ai'
import Link from "next/link";

const Footer : FC = ()=> {
    return (
        <>
        <footer className="footer">
        <div className="footer-default">
          <div className="footer-default__col-1">
            <p className="footer-default__header">DECORNOW</p>
            <p className="footer-default__col-1--license">
              Giấy phép đăng ký kinh doanh số 41L8031928 do UBND Quận 12 cấp ngày 25/02/2021
            </p>
            <ul>
              <li>
                <span><GoLocation /></span>
                <span>
                  Tòa nhà Thái An, 2290 Quốc Lộ 1A, phường Trung Mỹ Tây, <br/>
                  Quận 12, TP. Hồ Chí Minh
                </span>
              </li>
              <li>
                <span><FiPhone /></span>
                <span>
                  <p>
                    <a href="tel:0328889398">032 888 9398</a> <br />
                    <a href="tel:0937628360">093 762 8360</a>
                  </p>
                </span>
              </li>
              <li>
                <span><AiOutlineMail /></span>
                <span><a href="mailto:contact@decornow.vn">contact@decornow.vn</a></span>
              </li>
            </ul>
          </div>
          <div className="footer-default__col-2">
            <p className="footer-default__header">Trang</p>
            <ul>
              <li><Link href="/thiet-ke">Thiết kế</Link></li>
              <li><Link href="/huong-dan">Hướng Dẫn</Link></li>
              <li><Link href="/bo-khung-anh">Bộ Khung Ảnh</Link></li>
              <li><Link href="/cart">Giỏ Hàng</Link></li>
            </ul>
          </div>
          <div className="footer-default__col-3">
            <p className="footer-default__header text-left">Facebook</p>
            <Iframe
              name="f1407468eeb468"
              data-testid="fb:page Facebook Social Plugin"
              title="fb:page Facebook Social Plugin"
              frameBorder={0}
              allowFullScreen
              scrolling="no"
              allow="encrypted-media"
              url="https://www.facebook.com/v10.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfb3f1260e81dfc%26domain%3Ddecornow.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fdecornow.vn%252Ff9384254468f8%26relation%3Dparent.parent&amp;container_width=370&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FDecorNow.VN&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs="
            ></Iframe>
          </div>
        </div>

        <div className="footer-copy-right" style={{paddingBottom: '1rem'}}>
          <p>
            © Bản quyền thuộc về 
            <a href="https://decornow.vn" target="_blank"><strong> DECORNOW</strong></a>
            &nbsp;| Thành Viên Công Ty TNHH <strong>Kayrus Media</strong>
          </p>
        </div>
      </footer>
        </>
    )
}

export default Footer