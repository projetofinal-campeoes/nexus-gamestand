import React, {useEffect} from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/router';
import { hasCookie } from 'cookies-next';

export default function CircularColor() {    
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
    </Stack>
  );
}