import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/system/useTheme';
import { Box, CardMedia, FormLabel, Stack, TextField } from '@mui/material';
import { CameraOutlined } from '@ant-design/icons';
import { ChangeEvent, useEffect, useState } from 'react';
import { ThemeMode } from 'types/config';

export default function CompanylogoCard(props: any) {
  const theme = useTheme();
  const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);
  const [avatar, setAvatar] = useState<string | any>(props.logo);
  const { getFileName } = props;

  useEffect(() => {
    if (selectedImage) {
      let reader = new FileReader();
      reader.readAsDataURL(selectedImage);
      reader.onload = function () {
        setAvatar(reader.result);
        getFileName(reader.result);
      };
    }
  }, [selectedImage]);
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        aspectRatio: '1',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.secondary.lighter
      }}
    >
      <Stack spacing={2.5} alignItems="center">
        <FormLabel
          htmlFor="change-avtar"
          sx={{
            position: 'relative',
            borderRadius: '5%',
            overflow: 'hidden',
            '&:hover .MuiBox-root': { opacity: 1 },
            cursor: 'pointer'
          }}
        >
          <CardMedia component="img" sx={{ height: '100px', width: '100px' }} image={avatar} />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              backgroundColor: theme.palette.mode === ThemeMode.DARK ? 'rgba(255, 255, 255, .75)' : 'rgba(0,0,0,.65)',
              width: '100%',
              height: '100%',
              opacity: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Stack spacing={0.5} alignItems="center">
              <CameraOutlined style={{ color: theme.palette.secondary.lighter, fontSize: '2rem' }} />
              <Typography sx={{ color: 'secondary.lighter' }}>Upload</Typography>
            </Stack>
          </Box>
        </FormLabel>
        <TextField
          type="file"
          id="change-avtar"
          placeholder="Outlined"
          variant="outlined"
          sx={{ display: 'none' }}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSelectedImage(e.target.files?.[0])}
        />
        {/* <Stack spacing={0.5} alignItems="center">
              <Typography variant="h5">Comopany Logo</Typography>
              <Typography color="secondary">Guidelines</Typography>
            </Stack> */}
      </Stack>
      <Stack sx={{ alignItems: 'center', marginTop: '0.5rem' }}>
        <Typography variant="h4">Company Logo</Typography>
        <Typography variant="h5">Guidlines</Typography>
      </Stack>
    </Card>
  );
}
