import { ButtonComponent } from "../Button";
import { IcomponentParams } from "./types";
import {
  TiHeartFullOutline,
  TiHeartOutline,
  TiShoppingCart,
  TiTrash,
} from "react-icons/ti";
import { useState } from "react";

export const CardComponent = ({
  price,
  discount,
  priceDiscount,
  description,
  title,
  image,
  href,
  target,
  category,
  favorite,
}: IcomponentParams) => {
  const [isFavorite, setFavorite] = useState(false);
  const toggleShowPassword = () => setFavorite(!isFavorite);

  return (
    <div
      className="max-w-xs rounded overflow-hidden shadow-xl p-4 select-none"
      data-testid="group-element"
    >
      <div className="w-full flex justify-between">
        <button data-testid="buttonDelet-element" type="submit">
          <span data-testid="iconTrash-element">
            <TiTrash color="rgba(132 204 22)" size={25} />
          </span>
        </button>
        <span
          data-testid="discount-element"
          className="p-1 text-white rounded-2xl bg-lime-500"
        >
          {discount}
        </span>
      </div>
      <div className="w-full mb-2">
        <a data-testid="link-element" href={href} target={target}>
          <img data-testid="image-element" src={image} alt="foto da fruta" />
        </a>
      </div>
      <div data-testid="title-element" className="mb-3 flex align-center">
        <h1>{title}</h1>
        <div data-testid="categorys-element">
          {category ? (
            <span
              data-testid="category-element"
              className="ml-32 text-xs text-slate-400"
            >
              {category}
            </span>
          ) : (
            <span
              data-testid="unknown-element"
              className="ml-32 text-xs text-slate-400"
            >
              Desconhecido
            </span>
          )}
        </div>
      </div>
      <div
        data-testid="description-element"
        className="mb-1 text-xs text-slate-500"
      >
        <span>
          <h3>{description}</h3>
        </span>
      </div>
      <div className="mb-4 flex justify-between items-center text-lg">
        <span data-testid="priceDiscount-element" className="mr-6">
          {priceDiscount}
        </span>
        <span
          className="opacity-50 line-through border-b"
          data-testid="price-element"
        >
          {price}
        </span>
        <button
          data-testid="buttonFavorite-element"
          type="submit"
          className="ml-24 items-center "
          onClick={toggleShowPassword}
        >
          {isFavorite ? (
            <TiHeartFullOutline
              data-testid="iconHeartFull-element"
              color="rgba(132 204 22)"
              size={25}
            />
          ) : (
            <TiHeartOutline
              data-testid="iconHeart-element"
              color="rgba(132 204 22)"
              size={25}
            />
          )}
        </button>
      </div>
      <div data-testid="buttonAdd-element" className="flex items-center">
        <ButtonComponent text={"Add to Cart"} icon={<TiShoppingCart />} />
      </div>
    </div>
  );
};
