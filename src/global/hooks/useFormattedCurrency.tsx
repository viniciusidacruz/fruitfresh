import { FormattedNumber } from "react-intl";

interface IParamsElementCurrency {
  value: number;
  discount?: number;
}

export function useFormattedCurrency() {
  function elementCurrency({ value, discount }: IParamsElementCurrency) {
    const totalValue = discount ? value - (value * discount) / 100 : value;

    return (
      <FormattedNumber
        currency="BRL"
        style="currency"
        value={totalValue}
        minimumFractionDigits={2}
        maximumFractionDigits={2}
      />
    );
  }

  return {
    elementCurrency,
  };
}
