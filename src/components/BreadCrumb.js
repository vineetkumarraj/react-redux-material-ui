import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import { Paper, Typography } from '@material-ui/core';
import { AiOutlineHome } from 'react-icons/ai';
import { Link as RouterLink } from 'react-router-dom';

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    cursor: "pointer",
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);

export default function BreadCrumb(props) {
  return (
      <Paper style={{padding: 10, marginBottom: 10}}>
    <Breadcrumbs aria-label="breadcrumb">
      <StyledBreadcrumb
        component={RouterLink} 
        to='/'
        label="Home"
        icon={<AiOutlineHome fontSize="small" />}
      />

      { props.page && props.page.map( (page, index) => {

        return (!page.active)? (<StyledBreadcrumb label={page.url} component={RouterLink} to={page.link} key={index} /> ) : ( <Typography color="textPrimary" key={index}> {page.url} </Typography>)

      }) }

    </Breadcrumbs>
    </Paper>
  );
}
