import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function DashboardCardItem({subject}) {
  const goto = (h) => {
    window.location.href = h
}
  return (
    <Card style={{height: '100%', display: 'grid', alignContent:'space-between'}} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography marginBottom={3} variant="h5" component="div">
          {subject.name}
        </Typography>
        
        <Typography variant="body2">
          {subject.description}
        </Typography>
      </CardContent>
      <CardActions>
        <a size="small" href={subject.link}>Learn More</a>
      </CardActions>
    </Card>
  );
}