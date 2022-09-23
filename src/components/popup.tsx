import React, {FC} from 'react';
import {Box, Modal} from '@mui/material';
import PopupEditChart from "./popup-edit-chart";
import PopupSaveChart from "./popup-save-chart";

interface PopupProps {
  isOpen: boolean,
  setIsOpen: any,
  type: string,
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Popup: FC<PopupProps> = ({isOpen, setIsOpen, type}) => {
  const popupInner = () => {
    switch (type) {
      case "edit":
        return <PopupEditChart/>
      case "save":
        return <PopupSaveChart/>
      default:
        return null
    }
  }

  return (
    <div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={style}>
          {popupInner()}
        </Box>
      </Modal>
    </div>
  );
};

export default Popup;