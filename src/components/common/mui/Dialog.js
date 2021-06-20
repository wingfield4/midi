import React from 'react';
import { connect } from 'react-redux';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiDialog from '@material-ui/core/Dialog';

import Button from './Button';

const Dialog = ({
  children,
  colors,
  content,
  dispatch,
  onCancel,
  cancelLabel,
  onConfirm,
  confirmLabel,
  title,
  CancelButtonProps,
  ConfirmButtonProps,
  DialogContentProps,
  ...props
}) => {
  return (
    <MuiDialog
      maxWidth="sm"
      fullWidth
      {...props}
    >
      {title &&
        <DialogTitle>
          {title}
        </DialogTitle>
      }
      {content &&
        <DialogContent {...DialogContentProps}>
          {content}
        </DialogContent>
      }
      {(onCancel || onConfirm) &&
        <DialogActions>
          {onCancel &&
            <Button
              onClick={onCancel}
              {...CancelButtonProps}
            >
              {cancelLabel || "Cancel"}
            </Button>
          }
          {onConfirm &&
            <Button
              color="secondary"
              onClick={onConfirm}
              {...ConfirmButtonProps}
            >
              {confirmLabel || "Confirm"}
            </Button>
          }
        </DialogActions>
      }
      {children}
    </MuiDialog>
  )
}

export default connect(state => ({
  colors: state.colors
}))(Dialog);
