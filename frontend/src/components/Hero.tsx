import React from 'react';
import { Box, Typography } from '@mui/material';
import SearchBar from './SearchBar';
import logo from '../../assets/ello-logo.svg';
import theme from '../utils/theme';
import { HeroProps } from '../utils/types';

const HeroSection: React.FC<HeroProps> = ({ books, readingList, onSearch, onAddBook, onRemoveBook }) => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                py: 8,
                px: 2,
                backgroundColor: 'white',
            }}
        >
            <img src={logo} alt="Ello Logo" style={{ width: '150px', marginBottom: '16px' }} />
            <Typography variant="h4" gutterBottom color={theme.palette.info.main} 
            sx={{ mt: '8px', fontWeight: 'bold' }}
            >
                Confident, Independent Reading
            </Typography>
            <Typography variant="h6" color="textPrimary"
                sx={{ mt: '8px', maxWidth: '600px' }}>
                Over 700 decodable books that match your child's reading ability.
                 Help prevent the summer slump, without frustration.
            </Typography>
            <Box sx={{ width: '100%', maxWidth: '600px', mt: 4 }}>
                <SearchBar
                    books={books}
                    readingList={readingList}
                    onSearch={onSearch}
                    onAddBook={onAddBook}
                    onRemoveBook={onRemoveBook}
                />
            </Box>
        </Box>
    );
};

export default HeroSection;
