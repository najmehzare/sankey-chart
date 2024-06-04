import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import SankeyChart from './chart';
import Stack from '@mui/material/Stack';

const lables = [
    {
        lable: 'bar_left',
        color: 'bg-orange-500'
    },
    {
        lable: 'baz_left',
        color: 'bg-blue-500'
    },
    {
        lable: 'foo_left',
        color: 'bg-green-500'
    },
    {
        lable: 'foo_right',
        color: 'bg-red-500'
    },
    {
        lable: 'bar_right',
        color: 'bg-purple-500'
    },
    {
        lable: 'baz_right',
        color: 'bg-amber-900'
    },
]

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

export default function SankeyChartIndex() {

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
        <Card>
            <div className='p-5 flex justify-center bg-blue-100'>
                <Card sx={{ width: '15%', marginX: '5px', marginBottom: '5px', padding: '15px' }}>
                    {
                        lables.map((lable) => (
                            <div className='flex justify-start text-xs font-semibold p-1'>
                                <div className='flex flex-row items-center justify-center'>
                                    <span className={`${lable.color} bg p-2 ml-2 rounded`}></span>
                                    <span className=''>{lable.lable}</span>
                                </div>
                            </div>
                        ))
                    }
                </Card>
                <Stack sx={{ width: '85%', direction: 'ltr' }}>
                    {
                        progress <= 100 ?
                            <LinearProgressWithLabel value={progress} />
                            :
                            <SankeyChart />
                    }
                </Stack>
            </div>
        </Card>
    );
}