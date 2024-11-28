import React, { useEffect, useRef, useState } from "react";
import { FC } from "react";
import { Box, Text } from "zmp-ui";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoriesState, selectedCategoryIdState } from "state";
import { useNavigate } from "react-router";
import "./style.css";

export const Categories: FC = () => {
  const categories = useRecoilValue(categoriesState);
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const navigate = useNavigate();
  const setSelectedCategoryId = useSetRecoilState(selectedCategoryIdState);

  const gotoCategory = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    navigate("/category");
  };

  // const sortedCategories = [...categories].sort((a, b) => {
  //   if (a.name === "Đậu") return -1;
  //   if (b.name === "Đậu") return 1;
  //   return 0;
  // })

  const sortedCategories = categories.map((cate) => ({
    id: crypto.randomUUID(),
    category: cate, // Đổi `cate` thành `category` để khớp với đoạn sau
  }));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !isAutoScroll) return;

    console.log(section.scrollWidth);
    console.log(section.clientWidth);
    

    // Dừng interval cũ nếu còn
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }

    // Bắt đầu tự động trượt
    scrollIntervalRef.current = setInterval(() => {
      if (!section) return;

      // Nếu đã cuộn đến giữa, quay lại ban đầu
      if (section.scrollLeft >= section.scrollWidth - section.clientWidth -100) {
        section.scrollLeft = 0;
      } else {        
        section.scrollLeft += 100; // Điều chỉnh tốc độ cuộn ở đây
      }
    }, 10); // Điều chỉnh khoảng thời gian giữa các lần cuộn

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [isAutoScroll]);

  const handleInteractionStart = () => {
    // Dừng auto scroll
    setIsAutoScroll(false);

    // Quay lại chế độ tự động trượt sau 3 giây
    setTimeout(() => { 
      setIsAutoScroll(true);
    }, 5000);
  };

  return (
    <Box className="bg-white w-full overflow-x-auto">
      <div className="inner">
        <div className="wrapper">
          <section 
            ref={sectionRef}
            onTouchStart={handleInteractionStart}
            onMouseDown={handleInteractionStart}
            className="flex space-x-0 py-2 px-0 touch-pan-x pl-2"
          >
            {[...sortedCategories, ...sortedCategories].map(({ id, category }, index) => (
              <div
                key={`${id}-${index}`}
                onClick={() => gotoCategory(category.id)}
                className="flex-shrink-0 flex flex-col space-y-1 items-center ml-0 mr-0 min-w-[90px]"
              >
                <img 
                  className="w-12 h-12 object-cover" 
                  src={category.icon} 
                  alt={category.name} 
                />
                <Text
                  size="xxSmall"
                  className="text-gray text-center break-words w-full max-w-[75px]"
                >
                  {category.name}
                </Text>
              </div>
            ))}
          </section>
        </div>
      </div>
    </Box>
  //   <Box className="bg-white w-screen overflow-x-auto pb-2">
  //   <div className="inner w-full">
  //     <div className="wrapper w-full">
  //       <section 
  //         className="flex"
  //         style={{ 
  //           animationDuration: `${20000}ms`, // Tăng thời gian để chậm lại
  //           width: 'max-content' // Đảm bảo section có chiều rộng đủ chứa các items
  //         }}
  //       >
  //         {/* Nhân đôi danh sách để tạo hiệu ứng trượt liên tục */}
  //         {[...sortedCategories, ...sortedCategories].map(({ id, category }, index) => (
  //           <div
  //             key={`${id}-${index}`}
  //             onClick={() => gotoCategory(category.id)}
  //             className="flex flex-col space-y-1 items-center mr-4 min-w-[100px]" // Thêm min-width
  //           >
  //             <img 
  //               className="w-12 h-12 object-cover" 
  //               src={category.icon} 
  //               alt={category.name} 
  //             />
  //             <Text
  //               size="xxSmall"
  //               className="text-gray text-center break-words w-full max-w-[100px]"
  //             >
  //               {category.name}
  //             </Text>
  //           </div>
  //         ))}
  //       </section>
  //     </div>
  //   </div>
  // </Box>
    // <Box className="bg-white grid grid-flow-col auto-cols-max gap-2 ml-0 pt-5 pb-5 w-screen overflow-x-auto">
    //   {sortedCategories?.map((category, i) => (
    //     <div
    //       key={i}
    //       onClick={() => gotoCategory(category.id)}
    //       className="flex flex-col space-y-1 items-center"
    //     >
    //       <img className="w-12 h-12" src={category.icon} alt={category.name} />
    //       <Text
    //         size="xxSmall"
    //         className="text-gray text-center break-words w-full max-w-[100px]">
    //         {category.name}
    //       </Text>
    //     </div>
    //   ))}
    // </Box>

  );
};
