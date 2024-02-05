import * as React from "react";
import CountrySelect from "./components/CountrySelect";
import {IconButton} from "@mui/material";
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import {useTranslation} from "@/locales/client";
import { conversion_rates as rates } from "./components/units";

export interface IUnitProps {
  frontUnit: RatesType;
  frontVal?: number;
  backUnit: RatesType;
  backVal?: number;
}

const unitProps: IUnitProps = {
  frontUnit: 'USD',
  frontVal: 1,
  backUnit: 'CNY',
  backVal: 0,
}

export type RatesType = keyof typeof rates

export function ConvertCurrencies() {
  const { t, i18n } = useTranslation();
  const [cState, setCState] = React.useState(unitProps)

  const handleTransfer = () => {
    const f = cState.frontUnit
    const b = cState.backUnit
    let backVal = cState.backVal
    if (cState.frontVal && cState.backVal) {
      backVal = (1 / rates[b]) * cState.frontVal * rates[f]
    }
    setCState({
      ...cState,
      frontUnit: b,
      backUnit: f,
      backVal: backVal,
    })
  };

  const onFrontCurrencyChange = (unit: RatesType) => {
    if (cState.frontVal && (rates[unit] && rates[cState.backUnit as RatesType])) {
      const backVal = (1 / rates[unit]) * cState.frontVal * rates[cState.backUnit]
      setCState({
        ...cState,
        frontUnit: unit,
        backVal: backVal
      })
    } else {
      setCState({
        ...cState,
        frontUnit: unit,
        backVal: 0
      })
    }
  };
  const onFrontInputValChange = (val: number) => {
    if (rates[cState.frontUnit] && rates[cState.backUnit]) {
      const backVal = (1 / rates[cState.frontUnit]) * val * rates[cState.backUnit]
      setCState({
        ...cState,
        frontVal: val,
        backVal: backVal
      })
    } else {
      setCState({
        ...cState,
        frontVal: val,
        backVal: 0
      })
    }
  };

  const onBackCurrencyChange = (unit: RatesType) => {
    if (cState.backVal && (rates[unit] && rates[cState.frontUnit as RatesType])) {
      const frontVal = (1 / rates[unit]) * cState.backVal * rates[cState.frontUnit]
      setCState({
        ...cState,
        backUnit: unit,
        frontVal: frontVal
      })
    } else {
      setCState({
        ...cState,
        backUnit: unit,
        frontVal: 0
      })
    }
  };

  const onBackInputValChange = (val: number) => {
    if (rates[cState.frontUnit] && rates[cState.backUnit]) {
      const frontVal = (1 / rates[cState.backUnit]) * val * rates[cState.frontUnit]
      setCState({
        ...cState,
        frontVal: frontVal,
        backVal: val
      })
    } else {
      setCState({
        ...cState,
        backVal: val,
        frontVal: 0
      })
    }
  };

  return (
    <div className="flex flex-row flex-wrap justify-center items-center">
      <CountrySelect
        unit={cState.frontUnit}
        val={cState.frontVal}
        onCurrencyChange={onFrontCurrencyChange}
        onInputValChange={onFrontInputValChange}
      ></CountrySelect>
      <IconButton
        color="inherit"
        aria-label="transfer currency"
        title={t("transfer currency", { ns: "conversion" })}
        edge="start"
        onClick={handleTransfer}
        sx={{ p: "0 3ch" }}
      >
        <SyncAltIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <CountrySelect
        unit={cState.backUnit}
        val={cState.backVal}
        onCurrencyChange={onBackCurrencyChange}
        onInputValChange={onBackInputValChange}
      ></CountrySelect>
    </div>
  );
}
