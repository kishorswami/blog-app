import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Stack } from "@mui/system";
import VideocamIcon from "@mui/icons-material/Videocam";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import PhotoIcon from "@mui/icons-material/Photo";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const AddPost = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%)", md: 30 },
          backgroundColor: "#356657",
        }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserContainer onClick={(e) => setOpen(true)}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <Typography variant="span" fontWeight={500}>
              The Champ
            </Typography>
          </UserContainer>
          <TextField
            sx={{ width: "100%", padding: "20px" }}
            multiline
            rows={4}
            placeholder="Write Something..."
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={2}>
            <InsertEmoticonIcon color="primary" />
            <PhotoIcon color="secondary" />
            <VideocamIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <CalendarMonthIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddPost;