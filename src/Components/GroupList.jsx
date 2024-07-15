import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Paper, Box, Button } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import './GroupList.css';

const groups = [
  { id: 1, name: 'Fashion Trends' },
  { id: 2, name: 'Sustainable Fashion' },
  { id: 3, name: 'DIY Fashion' },
  { id: 4, name: 'Street Style' },
  { id: 5, name: 'High Fashion' },
  { id: 6, name: 'Casual Wear' },
  { id: 7, name: 'Formal Wear' },
  { id: 8, name: 'Vintage Fashion' },
  { id: 9, name: 'Accessories' },
  { id: 10, name: 'Seasonal Fashion' },
  { id: 11, name: 'Footwear' },
  { id: 12, name: 'Sportswear' },
  { id: 13, name: 'Ethnic Wear' },
  { id: 14, name: 'Designer Fashion' },
  { id: 15, name: 'Fashion Advice' },
];

const GroupsList = () => {
  return (
    <Container maxWidth="md" className="container">
      <Paper elevation={3} className="paper">
        <Typography variant="h4" component="h1" gutterBottom className="header">
          Community Forums
        </Typography>
        <Box display="flex" justifyContent="center" marginBottom="1rem">
          <Button variant="contained" color="primary" className="create-group-button">
            + Create Group
          </Button>
        </Box>
        <List>
          {groups.map(group => (
            <React.Fragment key={group.id}>
              <ListItem alignItems="flex-start" button component={Link} to={`/forum/group/${group.id}`} className="list-item">
                <ListItemAvatar>
                  <Avatar className="list-item-avatar">
                    <ForumIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={<Typography variant="h6" className="list-item-text-primary">{group.name}</Typography>}
                  secondary={
                    <Typography component="span" variant="body2" className="list-item-text-secondary">
                      Join the discussion on {group.name.toLowerCase()}.
                    </Typography>
                  }
                  className="list-item-text"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default GroupsList;
