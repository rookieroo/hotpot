import * as React from "react";
import {Box, TextField, Autocomplete, FormControl, InputLabel, Input, InputAdornment} from "@mui/material";
import convert from "convert-units";
import {useTranslation} from "@/locales/client";
import { useAtomValue } from "jotai";
import {unitAtom} from "@/app/convert/page";

export interface IMeasure {
  abbr: convert.Unit;
  measure: convert.Measure;
  system: convert.System;
  singular: string;
  plural: string;
}
interface IUnitProps {
  onUnitChange: (value: string) => void;
  onInputValChange: (value: number) => void;
  subu: string;
  val: number|undefined;
  id: string|undefined;
}

export default function UnitsSelect({ id, onUnitChange, onInputValChange, subu, val }: IUnitProps) {
  const [list, setList] = React.useState<string[]>([])
  const [chooseLabel, setChooseLabel] = React.useState<string>('')
  const { t, i18n } = useTranslation();
  const unit = useAtomValue(unitAtom)

  React.useEffect(() => {
    setList(convert().list(unit as convert.Measure).map(i => i.abbr))
    setChooseLabel(i18n.language === 'en' ? `Choose a ${t(unit, {ns: "conversion"})} unit` : `选择一种${t(unit, {ns: "conversion"})}单位`)
  }, [i18n.language, unit])

  const getLabel = (option: string) => {
    // return t(option, {ns: "conversion"})
    return option
  };

  const onUnitInputChange = (
    event: React.SyntheticEvent,
    value: string|null,
    reason: string
  ) => {
    if (reason == "reset") return
    if (value && list.some(i => i === value) && reason !== "input") {
      onUnitChange(value);
    } else {
      onUnitChange(subu);
    }
  };

  return (
    <div>
      <Autocomplete
        id={id}
        sx={{ width: 300 }}
        options={list}
        value={subu}
        // inputValue={subu}
        // isOptionEqualToValue={}
        autoHighlight
        disableClearable
        onInputChange={onUnitInputChange}
        onChange={onUnitInputChange}
        getOptionLabel={(option) => getLabel(option)}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            {option}
            {/* {t(option, {ns: "conversion"})} */}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label={chooseLabel}
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password",
            }}
          />
        )}
      />
      <FormControl fullWidth sx={{ m: 1, width: 300 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">{chooseLabel}</InputLabel>
        <Input
          id={`${id}_input-number`}
          value={val}
          type="number"
          onChange={event => onInputValChange(Number(event.target.value))}
          startAdornment={<InputAdornment position="start">{subu}</InputAdornment>}
        />
      </FormControl>
    </div>
  );
}
