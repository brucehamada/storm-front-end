import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import VideocamIcon from '@mui/icons-material/Videocam';
import { useNavigate } from 'react-router-dom';
const MeetingExpertCard = (props: any) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/meetings');
  };
  return (
    <Card sx={{ minWidth: 300 }} style={{ display: 'flex', flexDirection: 'column' }}>
      <CardActionArea onClick={handleClick}>
        <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ fontSize: 15 }} color="text.Primary">
              {props.month}
            </Typography>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgb(151,151,151)',
                borderRadius: '50px',
                height: '30px',
                width: '30px'
              }}
            >
              <p style={{ fontSize: 15, textAlign: 'center' }} color="text.Primary">
                {props.date}
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '13px', alignItems: 'left' }}>
            <Typography sx={{ fontSize: 15 }} color="text.Primary">
              {props.name}
            </Typography>
            <Typography sx={{ fontSize: 15 }} color="text.Primary">
              {props.startend}
            </Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <VideocamIcon />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MeetingExpertCard;
