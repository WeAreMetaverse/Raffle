import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  background: {
    width: '100vw',
    height: '100vh',
    background:
      'linear-gradient(0deg, rgba(1,1,1,1) 10%, rgba(20,20,20,1) 100%, rgba(57,9,74,1) 100%);',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed',
  },
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));
