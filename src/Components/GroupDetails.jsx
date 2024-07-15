import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Paper, Box, TextField, Button, List, ListItem, ListItemText, Divider } from '@mui/material';

const GroupDetails = () => {
  const { groupId } = useParams();
  const group = groups.find(group => group.id === parseInt(groupId));

  if (!group) {
    return <Typography variant="h6">Group not found</Typography>;
  }

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Paper elevation={3} style={{ padding: '2rem' }}>
        <Typography variant="h4" component="h1" gutterBottom style={{ color: '#ff4081' }}>
          {group.name}
        </Typography>
        <Box component="form" style={{ marginBottom: '1rem' }}>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Type your message..."
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: '1rem', borderRadius: '20px', padding: '0.5rem 2rem' }}
          >
            Send
          </Button>
        </Box>
        <List>
          {messages.map((message, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={<Typography variant="body1" style={{ fontWeight: 'bold' }}>{message.user}</Typography>}
                  secondary={
                    <Typography component="span" variant="body2" color="textSecondary">
                      {message.content}
                    </Typography>
                  }
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

export default GroupDetails;
