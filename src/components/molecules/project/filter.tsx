import { TextField, Grid, InputLabel, InputAdornment, Chip, Typography, MenuItem, FormControl, Autocomplete, Select } from '@mui/material';
import { useState } from 'react';
import { Box } from '@mui/system';
import ISO6391 from 'iso-639-1';

export const Filter = (props: any) => {
  const [budget, setBudget] = useState('');
  const [skill, setSkills] = useState<string[]>([]);
  const [experience, setExperience] = useState('');
  const [language, setLanguages] = useState<string[]>([]);
  const onSkillsDelete = (item: string) => () => {
    setSkills((skill) => skill.filter((v) => v == item));
  };
  const languages = ISO6391.getAllNames();
  const onLanguagesDelete = (item: string) => () => {
    setLanguages((language) => language.filter((v) => v != item));
  };

  return (
    <Grid container spacing={3} sx={{ height: '100vh' }}>
      <Grid item xs={2}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography style={{ fontSize: '16px', fontWeight: 'bold' }}>Filter</Typography>
            <InputLabel>Budget</InputLabel>
            <Select
              style={{ marginLeft: '10px' }}
              fullWidth
              value={budget}
              endAdornment={
                <InputAdornment position="end" style={{ paddingRight: '10px' }}>
                  USD/Hour
                </InputAdornment>
              }
              onChange={(event) => setBudget(event?.target.value)}
            >
              {props.budgets.map((item: string) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Skills</InputLabel>
            <FormControl sx={{ m: 1, mt: 3, width: '100%' }}>
              <Autocomplete
                multiple
                options={props.skills}
                value={skill}
                onChange={(e, newValue) => setSkills(newValue as string[])}
                renderTags={() => null}
                renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Areas Of Expertise" />}
              />
            </FormControl>
            <Box
              mt={3}
              sx={{
                '& > :not(:last-child)': { marginRight: 1 },
                '& > *': { marginBottom: 1 }
              }}
            >
              {skill.map((item: any) => (
                <Chip key={item} label={item} onDelete={onSkillsDelete(item)} />
              ))}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Experience</InputLabel>
            <Select fullWidth value={experience} style={{ marginLeft: '10px' }} onChange={(event) => setExperience(event?.target.value)}>
              {props.experiences.map((item: string) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Language</InputLabel>
            <FormControl sx={{ m: 1, mt: 3, width: '100%' }}>
              <Autocomplete
                multiple
                options={languages}
                value={language}
                onChange={(e, newValue) => setLanguages(newValue as string[])}
                renderTags={() => null}
                renderInput={(params) => <TextField {...params} variant="outlined" placeholder="languages" />}
              />
            </FormControl>
            <Box
              mt={3}
              sx={{
                '& > :not(:last-child)': { marginRight: 1 },
                '& > *': { marginBottom: 1 }
              }}
            >
              {language.map((item: string) => (
                <Chip key={item} label={item} onDelete={onLanguagesDelete(item)} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
