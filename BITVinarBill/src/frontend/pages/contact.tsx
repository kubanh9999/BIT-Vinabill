import React, { FC, useEffect, useRef } from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import { useNavigate } from "react-router-dom";

const ContactPage: FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.0007960907465!2d108.1884431735413!3d16.06544848461344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219aaa32a9c5f%3A0x666e7b5f6b57292!2zMjQgQ8O5IENow61uaCBMYW4sIEjDsmEgS2jDqiwgVGhhbmggS2jDqiwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1732590744313!5m2!1sen!2s" ;
    }
  }, []);

  return (
    <>
      <Header title="Liên hệ" showBackIcon={true} className="bg-textPrimary text-white" />
      <Page>
        <Box className="m-4 space-y-4">
          <Box className="space-y-2">
          <Text.Title><strong>Thông tin liên hệ</strong></Text.Title>
          <Text><strong>Địa chỉ:</strong> Văn phòng tại Đà Nẵng: 24 Cù Chính Lan, phường Hòa Khê, Thanh Khê, Đà Nẵng</Text>
          <Text><strong>Số điện thoại hotline/zalo:</strong> <a href="tel: 0916847711" style={{ textDecoration: 'underline' }}> 0916847711 </a></Text>
          <Text><strong>Số điện thoại tư vấn:</strong> <a href="tel: 0916847711" style={{ textDecoration: 'underline' }}></a>  0916847711</Text>
          <Text><strong>Email: </strong> <a href="mailto:voquychau@yahoo.com" style={{ textDecoration: 'underline' }}>voquychau@yahoo.com</a></Text>
         
        </Box>
        <Box className="space-y-2">
          <Text.Title><strong>Bản đồ</strong></Text.Title>
          <iframe
            ref={iframeRef}
            style={{ 
              width: '100%',  
              height: '50vh', 
              border: 0 
            }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>

      </Box>
    </Page>
    </>
  );
};

export default ContactPage;