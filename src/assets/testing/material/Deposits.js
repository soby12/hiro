import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
    return (
        <React.Fragment>
            <Title >
                <h5 style={{color:'black',marginTop:'10px'}}>
            Recent Deposits
                </h5>
            </Title>
            <Typography component="p" variant="h4">
            $3,024.00
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
            on 15 March, 2019
            </Typography>
            <div>
                <Link style={{color:'black'}} color="" href="#" onClick={preventDefault}>
            View balance
                </Link>
            </div>
        </React.Fragment>
    );
}