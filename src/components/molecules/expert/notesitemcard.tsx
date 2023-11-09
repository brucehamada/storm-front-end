import { Typography } from '@mui/material';

const NotesItemCard = (props: any) => {
    return (
        <>
            <img src={props.item.image} alt={'IMAGE'} />
            <Typography sx={{
                fontSize: '20px',
                textAlign: 'center',
                color: '#444444'
            }}>
                {props.item.text}
            </Typography>
            <Typography sx={{
                fontSize: '16px',
                textAlign: 'center',
                padding: '10px 0 0',
                color: '#555555'
            }}>
                {props.item.date}
            </Typography>
        </>
    );
}

export default NotesItemCard;