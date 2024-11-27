import React, { FC } from "react";
import { getConfig } from "utils/config";

export const DisplayPrice: FC<{ finalPrice: number; originalPrice: number }> = ({ finalPrice, originalPrice }) => {
  const symbol = getConfig((config) => config.template.currencySymbol);
  
  if (getConfig((config) => config.template.prefixCurrencySymbol)) {
    if(!finalPrice || finalPrice == -1){
      
      return (
        <>
          Liên hệ
        </>
      )
    }
    else if(!originalPrice || originalPrice == -1){
      
      return(
        <>
          {finalPrice?.toLocaleString()}
          {symbol}
        </>
      )
    }
    else{
      return (
        <>  
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'center',
          }}>
            <span style={{ 
              whiteSpace: 'nowrap', 
              overflow: 'hidden', 
              textOverflow: 'ellipsis', 
            }}>
              {finalPrice?.toLocaleString()}
              {symbol}
            </span>
            <span style={{ 
              textDecoration: 'line-through', 
              color: '#b0b0b0', 
              fontSize: '0.9em', 
              marginLeft: '5px', 
              display: 'block', 
              whiteSpace: 'normal', 
              overflow: 'hidden', 
              textOverflow: 'ellipsis', 
            }}>
              {originalPrice?.toLocaleString()}
              {symbol}
            </span>
          </div>
        </>
      );
      
      // return (
      //   <>  
      //     <span style={{ 
      //       marginLeft:'5px',
      //       whiteSpace: 'nowrap', // Ngăn giá chính thức xuống dòng
      //       overflow: 'hidden', // Ẩn phần dư thừa nếu vượt quá không gian
      //       textOverflow: 'ellipsis', // Thêm dấu ba chấm nếu giá quá dài
      //       }}>
      //         {finalPrice?.toLocaleString()}
      //         {symbol}
      //     </span>
      //     <span style={{ 
      //       textDecoration: 'line-through',
      //       fontSize: '0.8em',
      //       marginLeft:'5px',
      //       display: 'inline-block', // Đảm bảo giá gốc có thể xuống dòng nếu cần
      //       whiteSpace: 'nowrap', // Ngăn không cho giá gốc xuống dòng
      //       overflow: 'hidden', // Ẩn phần dư thừa
      //       textOverflow: 'ellipsis', // Thêm dấu ba chấm nếu giá gốc quá dài
      //       }}>
      //         {originalPrice?.toLocaleString()}
      //         {symbol}
      //     </span>
      //   </>
      // );
    }
  } else {
    
    return (
      <>
        {(!finalPrice || finalPrice == -1) && 
          <>
            Liên hệ
          </>
        }
        {(finalPrice && finalPrice != -1) && 
          <>
          
          {finalPrice?.toLocaleString()}
          {symbol}
        </>
        }
      </>      
    );
  }
};
