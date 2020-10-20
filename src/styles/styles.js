import backgroundImage from './images/loginBackground.jpg';

export const drawerWidth = 240;

export const sidebarStyles = theme => ({

  root: {
    display: 'flex',
  },

  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    '&:hover': {
       background: "#fff",
    },
  },
  listItem: {
    borderBottom: '1px solid #ccc',
    borderLeft: `4px solid ${theme.palette.secondary.light}`,
    borderRadius: '10px 0px 0px 10px',
    marginBottom: 2,
    '&:hover, &:active': {
       borderLeft: `4px solid ${theme.palette.secondary.main}`,
       backgroundColor: theme.palette.primary.main,
       color: theme.palette.secondary.main,
        "& $listIcon": {
        color: theme.palette.secondary.main,
      }
    },
  },
  listIcon: {
    fontSize: 30,
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    border: 'none',
    backgroundColor: theme.palette.primary.light,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    borderBottom: '1px solid silver',
    padding: '15px 0px',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});


export const loginStyles = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
    theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});