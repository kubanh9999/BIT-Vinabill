import { FormField } from "components/csform/types";

export const formFields: FormField[] = [
  {
    title: "Tên sản phẩm",
    field: "name",
    type: "txt",
    validate: {
      message: "Tên sản phẩm rỗng",
    },
  },
  {
    title: "Giá bán chính thức",
    field: "price",
    type: "txt",
    validate: {
      message: "Giá sản phẩm rỗng",
    },
  },
  {
    title: "Giá ban đầu",
    field: "sale",
    type: "txt",
    validate: {
      message: "Giá sản phẩm rỗng",
    },
  },
  {
    title: "Chi tiết sản phẩm",
    field: "description",
    type: "txtar",
  },
  // {
  //   title: "Tùy chọn",
  //   field: "variantId",
  //   type: "mulcbx",
  // },
  {
    title: "Thể loại",
    field: "categoryId",
    type: "mulcbx",
  },
  // {
  //   title: "Gợi ý sản phẩm lên trang chủ",
  //   field: "isFeatured",
  //   type: "chk",
  // },
];
