import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';
import 'react-responsive-modal/styles.css';
import { produto } from "../data.json";

export function Breadcrumb(props) {
    return (
            <Breadcrumbs aria-label="breadcrumb" sx={{
                mb: 5,
              }}>
                <Link underline="hover" color="inherit" href="/" alt="Produto breadcrumb">
                    Página Principal
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    Produto
                </Link>
                <Typography color="text.primary">{produto[props.idProduto].titulo}</Typography>
            </Breadcrumbs>
            
    )
}

export default Breadcrumb