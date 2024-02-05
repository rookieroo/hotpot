import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { rules } from "./rules";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import { parse, Kit, Raphael, visualize } from "regulex_common";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { debounce } from "lodash";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import useHtmlCanvas from "@/hooks/use-html-canvas";
import {useTranslation} from "@/locales/client";

export interface IRules {
  title: string;
  rule: RegExp;
  examples?: (string | number)[];
  counterExamples?: string[];
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#eaecf0",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Regex() {
  const { t } = useTranslation();
  const [regex, setRegex] = useState<RegExp>(/vars+([a-zA-Z_]w*);/);
  const [search, setRearch] = useState<string>("");
  const [id, setId] = useState<string>("svgContainerId");
  const [append, setAppend] = useState<string>("");
  const [rulesList, setRulesList] = useState<IRules[]>(rules);
  const [error, setError] = useState<ReferenceError | undefined>(undefined);
  const [i, setI] = useState(false);
  const [m, setM] = useState(false);
  const [g, setG] = useState(false);
  const [url, download] = useHtmlCanvas();

  const debouncedSearch = React.useRef(
    debounce(async (val) => {
      const list = rules.filter((r) => r.title.indexOf(val) > -1);
      setRulesList(list);
    }, 1000)
  ).current;

  function getRegexFlags(re: RegExp) {
    let flags = "";
    flags += re.ignoreCase ? "i" : "";
    flags += re.multiline ? "m" : "";
    flags += re.global ? "g" : "";
    return flags;
  }
  const onChange = (e) => {
    setRegex(e.target.value);
  };
  const onSearchChange = (e) => {
    setRearch(e.target.value);
  };
  const onRexClick = (r) => {
    setRegex(r.rule);
  };
  const handleIchange = (e: React.ChangeEvent) => {
    setI(e.target.checked);
  };
  const handleMchange = (e: React.ChangeEvent) => {
    setM(e.target.checked);
  };
  const handleGchange = (e: React.ChangeEvent) => {
    setG(e.target.checked);
  };
  const handleDownload = () => {
    const ele = document.getElementById(id);
    const op = {
      width: ele && ele.childNodes && ele.childNodes.length ? ele.childNodes[0].clientWidth : ele?.clientWidth,
      height: ele && ele.childNodes && ele.childNodes.length ? ele.childNodes[0].clientHeight: ele?.clientHeight
    }
    download(id, "", op)
  };

  useEffect(() => {
    setAppend(`${i ? "i" : ""}${m ? "m" : ""}${g ? "g" : ""}`);
  }, [i, m, g]);

  useEffect(() => {
    debouncedSearch(search);
  }, [search]);

  useEffect(() => {
    const el = document.getElementById(id);
    const paper = Raphael(id, 0, 0);
    try {
      const re = new RegExp(regex.source, append);
      visualize(parse(re.source), getRegexFlags(re), paper);
      setError(undefined);
    } catch (e) {
      setError(e);
    }
    return () => {
      el.innerHTML = "";
    };
  }, [regex, append]);

  return (
    <Box sx={{ width: "100%", marginTop: "30px" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <TextField
            id="left"
            label={t("your search words")}
            fullWidth
            multiline
            value={search}
            rows={1}
            InputLabelProps={{ shrink: true }}
            onChange={onSearchChange}
          />
          <List
            sx={{
              width: "100%",
              height: "100vh",
              maxWidth: "100%",
              bgcolor: "background.paper",
              position: "relative",
              overflow: "auto",
              maxHeight: "100vh",
              "& ul": { padding: 0 },
            }}
            subheader={<li />}
          >
            {rulesList.map((r) => (
              <li key={`section-${String(r.rule)}`}>
                <ul>
                  <ListSubheader>
                    <Item>{`${r.title}`}</Item>
                  </ListSubheader>
                  <ListItem>
                    <ListItemText
                      style={{ cursor: "pointer", background: "#e8b373" }}
                      onClick={() => onRexClick(r)}
                    >
                      {t("Regex")}: {String(r.rule)}
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText onClick={() => onRexClick(r)}>
                      {t("Examples")}:
                    </ListItemText>
                  </ListItem>
                  {r.examples!.map((item) => (
                    <ListItem key={`item-${item}`}>
                      <ListItemText primary={`${item}`} />
                    </ListItem>
                  ))}
                </ul>
              </li>
            ))}
          </List>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <TextField
              id="left"
              label={t("your regex")}
              fullWidth
              multiline
              value={String(regex)}
              rows={2}
              InputLabelProps={{ shrink: true }}
              onChange={onChange}
            />
            <FormGroup>
              <FormControlLabel
                id="IgnoreCase"
                control={<Checkbox onChange={handleIchange} checked={i} />}
                label={t("IgnoreCase")}
              />
              <FormControlLabel
                id="Multiline"
                control={<Checkbox onChange={handleMchange} checked={m} />}
                label={t("Multiline")}
              />
              <FormControlLabel
                id="GlobalMatch"
                control={<Checkbox onChange={handleGchange} checked={g} />}
                label={t("GlobalMatch")}
              />
            </FormGroup>
            {error && error.message && (
              <>
                <p>{error.message}</p>
                {import.meta.env.DEV && <p>{error.stack}</p>}
              </>
            )}
            <div
              style={{
                visibility: error && error.message ? "hidden" : "visible",
              }}
              id={id}
            ></div>
            <Button variant="outlined" onClick={handleDownload}>
              {t("Download")}
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
