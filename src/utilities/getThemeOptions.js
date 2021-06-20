import toRGBA from './toRGBA';

const getTheme = (colors) => ({
  palette: {
    primary: {
      main: colors.accent1
    },
    secondary: {
      main: colors.accent2
    },
    error: {
      main: colors.error
    },
    warning: {
      main: colors.accent3
    },
    info: {
      main: colors.accent3
    },
    success: {
      main: colors.accent2
    }
  },
  overrides: {
    MuiToggleButton: {
      root: {
        color: colors.captionText,
        backgroundColor: colors.widgetBackground,
        '&:hover': {
          backgroundColor: colors.accent1
        },
        "&$disabled": {
          color: colors.disabled,
          backgroundColor: colors.widgetBackground
        },
        "&$selected": {
          "&&": {
            color: colors.accent2,
            backgroundColor: colors.widgetBackground,
            '&:hover': {
              backgroundColor: colors.accent1
            }
          }
        }
      },
    },
    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: toRGBA(colors.text, .12)
        }
      },
      root: {}
    },
    MuiListItemText: {
      primary: {
        color: colors.text
      },
      secondary: {
        color: colors.captionText
      }
    },
    MuiInputLabel: {
      root: {
        color: colors.captionText,
        '&$focused': {
          color: colors.accent1
        }
      }
    },
    MuiInput: {
      root: {
        "&&": {
          color: colors.text,
          "&:hover:not($disabled):not($focused):not($error):before": {
            borderColor: colors.text
          },
          "&:before": {
            borderColor: colors.captionText,
          },
          '&$focused': {
            "&&": {
              color: colors.text
            },
            "&:before": {
              borderBottom: `2px solid ${colors.accent1}`
            },
            "&:after": {
              borderBottom: `2px solid ${colors.accent1}`
            }
          },
        }
      },
      input: {
        color: colors.text
      }
    },
    MuiOutlinedInput: {
      root: {
        "&&": {
          color: colors.text,
          "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
            borderColor: colors.text
          },
          "&:hover:not($disabled):not($focused):not($error):before": {
            borderColor: colors.text
          },
          "&:before": {
            borderColor: colors.captionText,
          },
          '&$focused': {
            "&&": {
              color: colors.text,
              "& $notchedOutline": {
                borderColor: colors.accent1
              }
            }
          },
          "&$disabled": {
            "&&": {
              color: colors.captionText,
              borderColor: colors.border
            }
          }
        }
      },
      notchedOutline: {
        borderColor: colors.captionText
      }
    },
    MuiDialog: {
      paper: {
        backgroundColor: colors.widgetBackground,
        boxShadow: `0px 11px 15px -7px ${colors.border}, 0px 24px 38px 3px ${colors.border}, 0px 9px 46px 8px ${colors.border}`
      }
    },
    MuiDialogContent: {
      root: {
        backgroundColor: colors.widgetBackground
      }
    },
    MuiDialogTitle: {
      root: {
        color: colors.text
      }
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: colors.accent1,
        color: colors.accent1Text
      }
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: colors.widgetBackground,
        color: colors.text,
      },
    },
    MuiPickersDay: {
      day: {
        color: colors.text,
      },
      daySelected: {
        backgroundColor: colors.widgetBackground,
      },
      dayDisabled: {
        color: colors.captionText,
      },
      current: {
        color: colors.text,
      },
    },
    MuiCheckbox: {
      root: {
        color: colors.accent2,
        "&$checked": {
          "&&": {
            color: colors.accent2
          }
        }
      }
    },
    MuiFab: {
      root: {
        "&&": {
          backgroundColor: colors.accent2
        }
      },
      label: {
        color: colors.text
      }
    },
    MuiFormControlLabel: {
      label: {
        color: colors.text
      }
    },
    MuiIconButton: {
      root: {
        color: colors.text
      },
      colorPrimary: {
        color: colors.accent1Text
      },
      colorSecondary: {
        color: colors.accent2
      }
    },
    MuiLinearProgress: {
      dashed: {
        "&&": {
          backgroundImage: `radial-gradient(${colors.lightAccent} 0%, ${colors.lightAccent} 16%, transparent 42%)`
        }
      },
      bar1Buffer: {
        "&&": {
          backgroundColor:colors.accent2
        }
      },
      bar2Buffer: {
        "&&": {
          backgroundColor: toRGBA(colors.accent2, .6)
        }
      }
    },
    MuiSelect: {
      selectMenu: {
        color: colors.text,
      },
      icon: {
        color: colors.text
      }
    },
    MuiRadio: {
      root: {
        "&&": {
          color: colors.accent2,
          "&$checked": {
            "&&": {
              color: colors.accent2
            }
          }
        }
      }
    },
    MuiMenu: {
      paper: {
        backgroundColor: colors.widgetBackground
      },
      list: {
        color: colors.text
      }
    },
    MuiFormControl: {
      root: {
        color: colors.text
      }
    },
    MuiSlider: {
      markLabel: {
        color: colors.text
      },
      markLabelActive: {
        color: colors.text
      },
      root: {
        color: colors.accent2
      }
    },
    MuiSwitch: {
      switchBase: {
        '&$checked': {
          "&&": {
            color: colors.accent2
          }
        },
        '&$checked + $track': {
          backgroundColor: colors.accent2,
        },
      },
      track: {
        backgroundColor: colors.text
      }
    },
    MuiTab: {
      root: {
        color: colors.text
      },
      textColorInherit: {
        color: colors.text
      }
    },
    MuiTable: {
      root: {
        backgroundColor: colors.widgetBackground
      },
      paper: {
        backgroundColor: colors.widgetBackground
      }
    },
    MuiTableCell: {
      body: {
        color: colors.text
      },
      head: {
        color: colors.text
      }
    },
    MuiTablePagination: {
      root: {
        color: colors.text,
        backgroundColor: colors.widgetBackground
      },
      selectIcon: {
        color: colors.captionText
      }
    },
    MuiTableSortLabel: {
      root: {
        color: colors.text
      },
      active: {
        "&&": {
          color: colors.text
        }
      },
      icon: {
        "&&": {
          color: `${colors.text} !important`
        }
      }
    },
    MuiTabs: {
      indicator: {
        backgroundColor: colors.accent2
      }
    },
    MuiButton: {
      text: {
        color: colors.text,
        "&$disabled": {
          color: colors.border
        }
      },
      textPrimary: {
        color: colors.text
      },
      textSecondary: {
        color: colors.accent2
      },
      contained: {
        backgroundColor: colors.accent3,
        color: colors.accent3Text,
        "&$disabled": {
          color: colors.captionText,
          backgroundColor: colors.border
        }
      },
      containedPrimary: {
        backgroundColor: colors.accent1,
        color: colors.accent1Text
      },
      containedSecondary: {
        backgroundColor: colors.accent2,
        color: colors.accent2Text
      },
      outlined: {
        borderColor: colors.captionText,
        color: colors.text
      },
      outlinedPrimary: {
        borderColor: colors.captionText,
        color: colors.accent1Text
      },
      outlinedSecondary: {
        borderColor: colors.accent2,
        color: colors.accent2
      },
      sizeSmall: {
        color: colors.text,
        "&$disabled": {
          color: colors.captionText
        }
      },
      outlinedSizeSmall: {
        color: colors.text,
        borderColor: colors.captionText,
        "&$disabled": {
          color: colors.captionText,
          borderColor: colors.border
        }
      }
    }
  }
});

export default getTheme;