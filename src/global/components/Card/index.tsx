import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  TiShoppingCart,
  TiHeartOutline,
  TiHeartFullOutline,
} from "react-icons/ti";

import { limitString } from "../../utils/limitString";
import { useFormattedCurrency } from "../../hooks/useFormattedCurrency";

import { ButtonComponent } from "../Button";

import { IComponentParams } from "./types";

export const CardComponent = ({
  favorite = false,
  ...props
}: IComponentParams) => {
  const [isFavorite, setFavorite] = useState(favorite);

  const { elementCurrency } = useFormattedCurrency();

  const toggleShowPassword = () => setFavorite(!isFavorite);

  return (
    <article
      data-testid="group-element"
      className="max-w-xs rounded overflow-hidden shadow-xl p-4 select-none"
    >
      {props.discount && (
        <span
          data-testid="discount-element"
          className="p-1 text-white rounded-2xl bg-lime-500"
        >
          -{props.discount}%
        </span>
      )}

      <figure className="w-full mb-2">
        <NavLink target="_self" to={props.href} data-testid="link-element">
          <img
            src={props.image}
            data-testid="image-element"
            alt={props.alternativeText}
          />
        </NavLink>
      </figure>

      <div className="mb-3 flex justify-between align-center">
        <h3>{props.title}</h3>

        <span className="ml-32 text-xs text-slate-500">
          {props.category || "Desconhecido"}
        </span>
      </div>

      <p className="mb-3 text-xs text-slate-700">
        {limitString(props.description)}
      </p>

      <div>
        <span className="mb-1 text-xs text-slate-500">Preço por Kg</span>
        <div className="mb-4 flex justify-between items-center text-lg">
          <span data-testid="priceDiscount-element" className="mr-6">
            {elementCurrency({
              value: props.price,
              discount: props.discount,
            })}
          </span>

          {props.discount && (
            <span
              data-testid="price-element"
              className="opacity-50 line-through border-b"
            >
              {elementCurrency({ value: props.price })}
            </span>
          )}

          <button
            type="button"
            onClick={toggleShowPassword}
            className="ml-24 items-center"
            data-testid="buttonFavorite-element"
            aria-label="Botão de adicionar aos favoritos"
          >
            {isFavorite ? (
              <TiHeartFullOutline
                size={25}
                color="rgba(132 204 22)"
                data-testid="iconHeartFull-element"
              />
            ) : (
              <TiHeartOutline
                size={25}
                color="rgba(132 204 22)"
                data-testid="iconHeart-element"
              />
            )}
          </button>
        </div>
      </div>

      <ButtonComponent
        text="Add to Cart"
        icon={<TiShoppingCart />}
        data-testid="buttonAdd-element"
        arial-label="Adicionar produto ao carrinho"
      />
    </article>
  );
};
