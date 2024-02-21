import { alpha, Theme } from '@mui/material/styles';

export const getToolbarStyles = (numSelected: number) => ({
    pl: { sm: 2 },
    pr: { xs: 1, sm: 1 },
    ...(numSelected > 0 && {
        bgcolor: (theme: Theme) =>
            alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
            )
    })
});
