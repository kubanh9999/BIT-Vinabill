import React, { FC, useMemo } from "react";
import { SelectedOptions } from "types/cart";
import { Product } from "types/product";
import { calcFinalPrice } from "utils/product";
import { DisplayPrice } from "./price";

export const FinalPrice: FC<{
  children: Product;
  options?: SelectedOptions;
}> = ({ children, options }) => {
  const finalPrice = useMemo(
    () => calcFinalPrice(children, options),
    [children, options],
  );
  const displayPrice = finalPrice != null && finalPrice !== -1 ? finalPrice : "Liên hệ";
  return <DisplayPrice>{finalPrice}</DisplayPrice>;
};
