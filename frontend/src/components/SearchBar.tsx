import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, Box, Typography, Button } from '@mui/material';
import theme from '../utils/theme';
import { Book, SearchBarProps } from '../utils/types';
import {  } from '../utils/types';

const SearchBar: React.FC<SearchBarProps> = ({
    books,
    readingList,
    onSearch,
    onAddBook,
    onRemoveBook,
}) => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        onSearch(searchTerm);
    }, [searchTerm, onSearch]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
    };

    const isBookInReadingList = (book: Book) => {
        return readingList.some((b) => b.title === book.title);
    };

    return (
        <Autocomplete
            freeSolo
            blurOnSelect
            openOnFocus
            options={books}
            getOptionLabel={(option: any) => option.title }
            renderOption={(props, option) => (
                <li
                    {...props}
                    key={option.title}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '10px',
                        borderRadius: '8px',
                    }}>
                    <img
                        src={option.coverPhotoURL}
                        alt={option.title}
                        width="80"
                        height="100"
                        style={{ marginRight: '16px', borderRadius: '4px' }}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="subtitle1"
                            color={theme.palette.info.main}
                            sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
                            {option.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary"
                            sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
                            by {option.author}
                        </Typography>
                    </Box>
                    <Button
                        variant="outlined"
                        color={isBookInReadingList(option) ? 'error' : 'primary'}
                        onClick={(event) => {
                            event.stopPropagation();
                            isBookInReadingList(option) ? onRemoveBook(option) : onAddBook(option);
                        }}
                        sx={{
                            borderRadius: '40px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '40px',
                            },
                        }}
                    >
                        {isBookInReadingList(option) ? 'Remove' : 'Add'}
                    </Button>
                </li>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search Books 🔍"
                    variant="outlined"
                    onChange={handleInputChange}
                    value={searchTerm}
                    fullWidth
                    sx={{
                       borderColor: theme.palette.info.main,
                        borderRadius: '40px',
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '40px',
                        },
                    }}
                />
            )}
        />
    );
};

export default SearchBar;
