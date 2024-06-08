import Lottie from "lottie-react";
import { Typography } from "@mui/material";
import Elephant from '../../assets/lottie/empty-eleph.json';
import theme from "../utils/theme";

export const EmptyComponent: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="w-72 h-72">
                <Lottie animationData={Elephant} />
            </div>
            <Typography variant="h6" gutterBottom
                sx={{ fontWeight: 700, alignItems: 'center', justifyContent: 'center', marginTop: '16px', marginBottom: '16px' }}
                color={theme.palette.info.main}>
                Search and add books to your reading list ✨
            </Typography>
        </div>
    );
};