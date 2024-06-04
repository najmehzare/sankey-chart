import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import SankeyChart from "@/components/sankey-chart";
import EnhancedTable from "@/components/table";
import Stack from '@mui/material/Stack';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

export default function Main() {

    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress + 30));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <Stack sx={{ padding: '10px', margin: '15px' }}>
                <Card>
                    <div className='p-10 flex justify-center'>
                        {
                            progress <= 100 ?
                                <Box sx={{ width: '80%', direction: 'ltr' }}>
                                    <LinearProgressWithLabel value={progress} />
                                </Box>
                                :
                                <SankeyChart />
                        }
                    </div>
                </Card>
            </Stack>
            <Stack sx={{ padding: '10px', margin: '15px' }} >
                <EnhancedTable />
            </Stack>
        </div>
    );
}
