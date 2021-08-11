import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core';
import HomeScreen from './screens/HomeScreen';
import { makeStyles } from '@material-ui/core/styles';
import LoaderScreen from './screens/LoaderScreen';
import Cursor from './components/Cursor';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#181818',
    color: '#DFD3C3',
    '& *': {
      fontFamily: 'Conv_Ogg Roman,Sans-Serif',
      color: '#DFD3C3',
    },
    [theme.breakpoints.down("sm")]: {
      backgroundColor: '#000',
      color: '#fff'
    }
  },
}));


function App() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />
        <Router>
        {loading ? <LoaderScreen />
          : (
          <main className={classes.root}>
            <Cursor />
            <HomeScreen />
          </main>
        )}
        </Router>
    </React.Fragment>
  );
}

export default App;
