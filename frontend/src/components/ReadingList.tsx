import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { EmptyComponent } from './EmptyComponent';
import theme from '../utils/theme';
import { ReadingListProps } from '../utils/types';

const ReadingList: React.FC<ReadingListProps> = ({ readingList, onRemoveBook }) => {
  if (readingList.length === 0) {
    return <EmptyComponent />;
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
        mt: '16px',
      }}
    >
      {readingList.map((book) => (
        <Box
          key={book.title}
          sx={{
            textAlign: 'center',
            p: 2,
            borderRadius: '8px',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
        >
          <img
            src={book.coverPhotoURL}
            alt={book.title}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
          <Box sx={{ flexGrow: 1, textAlign: 'left' }}>
            <Typography
             variant="subtitle1"
             color={theme.palette.info.main}
             noWrap sx={{ textOverflow: 'ellipsis', overflow: 'hidden', textAlign: 'left' }}
             >
              {book.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" noWrap sx={{ textOverflow: 'ellipsis', overflow: 'hidden', textAlign: 'left' }}>
              by {book.author}
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => onRemoveBook(book)}
            sx={{ borderRadius: '20px', mt: '8px',  
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 8px 16px rgba(16, 13, 13, 0.2)',
              backgroundColor: theme.palette.custom.turquoiseDark1,
            }, }}
          >
            <span className='text-white font-bold'>Remove</span>
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default ReadingList;
