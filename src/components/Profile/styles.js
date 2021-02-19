import { createUseStyles } from 'react-jss';

export default createUseStyles({
    profile: {
  display: 'block',
  width: 270,
  margin: '10px auto 30px auto',
  borderRadius: 5,
  boxShadow: '0 0 5px #999999',
  opacity: '0.8',
  transition: 'opacity 500ms ease',
        '&:hover': {
            opacity: '1',
            cursor: 'pointer',
  },
    },
    
    description: {
  backgroundColor: '#fff',
  textAlign: 'center',
  borderRadius: '5px 5px 0 0',
    },
    
    avatar: {
  width: '50%',
  padding: 10,
    },
    
    stats: {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  listStyle: 'none',
  margin: 0,
  padding: '15px 5px 15px 5px',
  backgroundColor: 'rgb(240, 239, 239)',
  borderRadius: '0 0 5px 5px',
    },

    name: {
  fontSize: 20,
  fontWeight: 'bold',
  color: 'rgb(66, 53, 53)',
  margin: 0,
  paddingTop: 5,
  paddingBottom: 5,
    },

    tag: {
  color: 'rgb(66, 53, 53)',
  margin: 0,
  paddingTop: 5,
  paddingBottom: 5,
  fontSize: 14,
  color: '#a59f9f',
    },

    location: {
  color: 'rgb(66, 53, 53)',
  margin: 0,
  paddingTop: 5,
  paddingBottom: 5,
  fontSize: 14,
  color: '#a59f9f',
    },

    label: {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 90,
  color: '#a59f9f',
  fontSize: 12,
    },
    
    quantity: {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 90,  
  color: 'rgb(66, 53, 53)',
  fontWeight: 'bold',
}
});