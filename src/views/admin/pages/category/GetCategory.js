import React, { Component } from 'react';
import { Button, Paper, TableFooter, TablePagination, Typography } from '@material-ui/core';
import BreadCrumb from '../../../../components/BreadCrumb';
import { connect } from 'react-redux';
import { loadCategory } from '../../../../actions/CategoryActions';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withSnackbar } from 'notistack';


class GetCategory extends Component {

    componentDidMount() {
        this.props.loadCategory();
    }

    filterCategory = (page = 2) => {
        this.props.loadCategory(page);
    }

    render() {
        const { error, loading, category } = this.props;
        if(error){
            return <Paper><Typography variant="h3">Error occured</Typography></Paper>
        }
        if(loading){
            return <Paper><Typography variant="h3">Loading</Typography></Paper>
        }
        if(category) {
            return(
                <><BreadCrumb  page={[{url: 'Category', link: '/category', active: true}]} />
                <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Action</TableCell>
                        <TableCell align="center">Created At</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {category.data.map((row) => (
                        <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="center"> <img src={row.image_path} alt={row.name} width={100} /></TableCell>
                        <TableCell align="center">{row.description}</TableCell>
                        <TableCell align="center">{row.active}</TableCell>
                        <TableCell align="center">{row.created_at}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                      <TableFooter>
                        <TableRow>
                            <TablePagination
                            rowsPerPageOptions={[10, 20, 50]}
                            colSpan = {3}
                            count = {category.total}
                            rowsPerPage = {category.per_page} 
                            page = {category.current_page - 1}
                            SelectProps = {{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            // onChangePage={handleChangePage}
                            // onChangeRowsPerPage={handleChangeRowsPerPage}
                            // ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
        
                </Table>
                </TableContainer>
                <Button onClick={this.filterCategory}>Clich me to load nex</Button>
                </>)
        }

        return(
        <>
        <BreadCrumb  page={[{url: 'Category', link: '/category', active: true}]} />
        </>)
    }
}

const mapStateToProps = state => ({
    category: state.category.apiData,
    loading: state.category.isLoading,
    error: state.category.error
})

export default withSnackbar(connect(mapStateToProps, { loadCategory })(GetCategory));
