import { Button } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import {useTranslation} from "@/locales/client";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

export interface ICustomImgUploadProps {
  max?: number;
  uploadText?: string;
  ns?: string;
  onImgUpload: (url: string) => void;
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export function CustomImgUpload({
    max = 1,
    uploadText = "Choose Some Files",
    ns = "",
    onImgUpload,
  }: ICustomImgUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [dense, setDense] = React.useState(true);
  const [secondary, setSecondary] = React.useState(true);
  const { t, i18n } = useTranslation();

  const chooseFile = (e) => {
    const fileElem = document.getElementById("fileElem") as HTMLElement;
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault(); // 避免导航至“#”
  };

  const onFileChange = (e) => {
    const _files = e.target.files;

    if (_files.length) {
      const url = URL.createObjectURL(_files[0]);
      _files[0].url = url;
      setFiles([...files, ..._files]);
      onImgUpload(url);
    }
  };

  const selectFile = (f: File) => {
    const imgUrl = URL.createObjectURL(f);
    onImgUpload(imgUrl);
  };

  const deleteFile = (f: File) => {
    setFiles(files.filter((file) => file !== f));
  };

  return (
    <>
      <input
        type="file"
        id="fileElem"
        multiple
        accept="image/*"
        style={{ display: "none" }}
        onChange={onFileChange}
      />
      {files.length < max && (
        <Button
          onClick={chooseFile}
          variant="contained"
          endIcon={<DriveFolderUploadIcon />}
        >
          {t(uploadText, { ns: ns })}
        </Button>
      )}
      <Grid item xs={12} md={6}>
        {/* <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Files List
        </Typography> */}
        <Demo>
          <List dense={dense}>
            {files.length > 0 &&
            files.map((f) => (
              <div onClick={() => onImgUpload(f.url)} key={f.url}>
                <ListItem
                  secondaryAction={
                    <IconButton
                      onClick={() => deleteFile(f)}
                      edge="end"
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <img src={f.url} />
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={f.name}
                    secondary={secondary ? `${f.size} bytes` : null}
                  />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </Demo>
      </Grid>
    </>
  );
}
