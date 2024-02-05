'use client'

import * as React from "react";
import { Box, TextField, Autocomplete } from "@mui/material";
import { atom, useAtom } from "jotai";
import {ConvertCurrencies} from "@/components/convert-units/ConvertCurrencies";
import {units} from "@/components/convert-units/components/units";
import {CovertUnitsRow} from "@/components/convert-units/ConvertUnits";
import {useTranslation, i18n} from "@/locales/client";

export const unitAtom = atom("length");

export default function CovertUnits() {
  const { t } = useTranslation();

  const [unit, setUnit] = useAtom(unitAtom);

  const onUnitsChange = (
    event: React.SyntheticEvent,
    value: string
    // reason: string
  ) => {
    if (value && units.indexOf(value)>-1) {
      setUnit(value);
    } else {
      setUnit(unit);
    }
  };

  return (
    <div className="h-screen flex flex-col flex-wrap justify-center items-center">
      <Autocomplete
        id="units-select"
        sx={{ width: 300, marginBottom: "100px", }}
        options={units}
        value={unit}
        autoHighlight
        disableClearable
        getOptionLabel={(option) => option}
        onInputChange={onUnitsChange}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            {i18n.language === 'zh-CN' && option} {t(option, { ns: "conversion" })}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label={t("Choose A Unit", { ns: "conversion" })}
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
      <>
        {unit === "currency" && <ConvertCurrencies></ConvertCurrencies>}
        {unit && unit !== "currency" && <CovertUnitsRow></CovertUnitsRow>}
      </>
    </div>
  );
}
