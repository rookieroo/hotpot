import * as React from "react";
import {Box, TextField, Autocomplete, FormControl, InputLabel, Input, InputAdornment} from "@mui/material";
import { CountryType, countries } from "./units";
import {useTranslation} from "@/locales/client";
import { RatesType } from "../ConvertCurrencies";
import {conversion_rates as rates} from "./units";
interface ICurrencyProps {
  onCurrencyChange: (value: RatesType) => void;
  onInputValChange: (value: number) => void;
  unit: RatesType;
  val: number|undefined;
}

export default function CountrySelect({ onCurrencyChange, onInputValChange, unit, val }: ICurrencyProps) {
  const { t, i18n } = useTranslation();

  const selectedUnit = React.useMemo(
    () => countries.find((i) => i.code === unit),
    [unit],
  );

  const getLabel = (option: CountryType) => {
    return `${option.code} ${option.symbol} ${
      i18n.language === "en" ? option.country : option.name_zh
    }`;
  };

  const onCountryChange = (
    event: React.SyntheticEvent,
    value: string|null,
    // reason: string
  ) => {
    if (value && value.split(" ").length && rates[value.split(" ")[0] as RatesType])
      // 回调函数 货币code提升状态到父组件
      onCurrencyChange(value.split(" ")[0] as RatesType)
    else
      onCurrencyChange(unit)
  };

  const onChange = (
    event: React.SyntheticEvent,
    value: CountryType,
    // reason: string
  ) => {
    if (value)
      // 回调函数 货币code提升状态到父组件
      onCurrencyChange(value.code as RatesType)
    else
      onCurrencyChange(unit)
  };

  return (
    <div>
      <Autocomplete
        id="country-select-demo"
        sx={{ width: 300 }}
        value={selectedUnit}
        options={countries}
        autoHighlight
        disableClearable
        onInputChange={onCountryChange}
        onChange={onChange}
        getOptionLabel={(option) => getLabel(option)}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              srcSet={`https://flagcdn.com/w40/${option.countryCode.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w20/${option.countryCode.toLowerCase()}.png`}
              alt=""
            />
            {option.code} ({option.symbol}){" "}
            {i18n.language === "en" ? option.country : option.name_zh}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label={t("Choose a currency", { ns: "conversion" })}
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
      <FormControl fullWidth sx={{ m: 1, width: 300 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">{t("Amount", {ns: "conversion"})}</InputLabel>
        <Input
          type="number"
          value={val}
          onChange={event => onInputValChange(Number(event.target.value))}
          startAdornment={<InputAdornment position="start">{selectedUnit?.symbol}</InputAdornment>}
        />
      </FormControl>
    </div>
  );
}
