import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';
import 'react-responsive-modal/styles.css';


export function Breadcrumb() {
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
                <Typography color="text.primary">Kit de incenso para ambientização e reenergização por quartzo rosa</Typography>
            </Breadcrumbs>
            
    )
}

export default Breadcrumb