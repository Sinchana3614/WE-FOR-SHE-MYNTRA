// StyleBoard.jsx
import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Grid, Box, Button, TextField, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import './StyleBoard.css';

const StyleBoard = () => {
    const [styles, setStyles] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            setPreview(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleUpload = () => {
        if (!title || !description || !image) return;

        const newStyle = {
            id: styles.length + 1,
            title,
            description,
            image: preview,
        };

        setStyles([...styles, newStyle]);
        setTitle('');
        setDescription('');
        setImage(null);
        setPreview(null);
    };

    return (
        <Container className="style-board">
            <Typography variant="h4" gutterBottom>
                Style Board
            </Typography>
            <Box mb={3}>
                <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    margin="normal"
                />
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    type="file"
                    onChange={handleImageChange}
                />
                <label htmlFor="raised-button-file">
                    <Button
                        variant="contained"
                        color="primary"
                        component="span"
                        startIcon={<AddPhotoAlternateIcon />}
                        fullWidth
                        margin="normal"
                    >
                        Upload Image
                    </Button>
                </label>
                {preview && (
                    <Box mt={2}>
                        <img src={preview} alt="Preview" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
                    </Box>
                )}
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={handleUpload}
                    disabled={!title || !description || !image}
                >
                    Add Style
                </Button>
            </Box>
            <Grid container spacing={3}>
                {styles.map((style) => (
                    <Grid item xs={12} sm={6} md={4} key={style.id}>
                        <Card>
                            <CardMedia component="img" height="200" image={style.image} alt={style.title} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {style.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {style.description}
                                </Typography>
                            </CardContent>
                            <IconButton color="secondary">
                                <FavoriteIcon />
                            </IconButton>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default StyleBoard;
