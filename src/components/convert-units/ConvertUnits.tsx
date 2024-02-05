import * as React from 'react';
import UnitsSelect from './components/UnitsSelect';
import {IconButton} from "@mui/material";
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import convert from "convert-units";
import { useAtomValue } from "jotai";
import {unitAtom} from "@/app/convert/page";
export interface IUnitProps {
  frontUnit: string;
  frontVal?: number;
  backUnit: string;
  backVal?: number;
}

const unitProps: IUnitProps = {
  frontUnit: "mm",
  frontVal: 0,
  backUnit: "cm",
  backVal: 0,
}

export function CovertUnitsRow() {
  const [state, setState] = React.useState(unitProps)
  const unit = useAtomValue(unitAtom)

  React.useEffect(() => {
    setState({
      ...unitProps,
      frontUnit: convert().list(unit as convert.Measure)[0].abbr,
      backUnit: convert().list(unit as convert.Measure)[1].abbr,
    })
  }, [unit])

  const handleTransfer = () => {
    const f = state.frontUnit
    const b = state.backUnit
    const backVal = convert(state.frontVal).from(b as convert.Unit).to(f as convert.Unit)
    setState({
      ...state,
      frontUnit: b,
      backUnit: f,
      backVal: backVal
    })
  };

  const onFrontUnitChange = (unit: string) => {
    if (state.frontVal && state.backUnit) {
      const backVal = convert(state.frontVal).from(unit as convert.Unit).to(state.backUnit as convert.Unit)
      setState({
        ...state,
        frontUnit: unit,
        backVal: backVal
      })
    } else {
      setState({
        ...state,
        frontUnit: unit,
        backVal: 0
      })
    }
  };
  const onFrontInputValChange = (val: number) => {
    if (state.frontUnit && state.backUnit) {
      const backVal = convert(val).from(state.frontUnit as convert.Unit).to(state.backUnit as convert.Unit)
      setState({
        ...state,
        frontVal: val,
        backVal: backVal
      })
    } else {
      setState({
        ...state,
        frontVal: val,
        backVal: 0
      })
    }
  };

  const onBackUnitChange = (unit: string) => {
    if (state.backVal && state.frontUnit) {
      const frontVal = convert(state.frontVal).from(state.frontUnit as convert.Unit).to(unit as convert.Unit)
      setState({
        ...state,
        backUnit: unit,
        frontVal: frontVal
      })
    } else {
      setState({
        ...state,
        backUnit: unit,
        frontVal: 0
      })
    }
  };

  const onBackInputValChange = (val: number) => {
    if (state.frontUnit && state.backUnit) {
      const frontVal = convert(val).from(state.frontUnit as convert.Unit).to(state.backUnit as convert.Unit)
      setState({
        ...state,
        frontVal: frontVal,
        backVal: val
      })
    } else {
      setState({
        ...state,
        backVal: val,
        frontVal: 0
      })
    }
  };

  return (
    <div className="flex flex-row flex-wrap justify-center items-center">
      <UnitsSelect
        id="1"
        subu={state.frontUnit}
        val={state.frontVal}
        onUnitChange={onFrontUnitChange}
        onInputValChange={onFrontInputValChange}
      ></UnitsSelect>
      <IconButton
        color="inherit"
        aria-label="transfer currency"
        edge="start"
        onClick={handleTransfer}
        sx={{ p: "0 3ch" }}
      >
        <SyncAltIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <UnitsSelect
        id="2"
        subu={state.backUnit}
        val={state.backVal}
        onUnitChange={onBackUnitChange}
        onInputValChange={onBackInputValChange}
      ></UnitsSelect>
    </div>
  );
}
