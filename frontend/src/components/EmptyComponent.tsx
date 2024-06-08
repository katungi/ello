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
            <div className="mt-4">
                <Typography variant="h5" gutterBottom
                    sx={{ fontWeight: 700 }}
                    color={theme.palette.info.main}>
                    Add books to your reading list ✨
                </Typography>
            </div>
        </div>
    );
};