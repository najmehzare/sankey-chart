import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SankeyChart from "@/components/sankey-chart";
import EnhancedTable from "@/components/table";

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

export default function Home() {

  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 20));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="p-5 m-5">
      <Card sx={{ padding: '0px' }}>
        {
          progress <= 100 ?
            <div className='p-10 flex justify-center'>
              <Box sx={{ width: '80%', direction: 'ltr' }}>
                <LinearProgressWithLabel value={progress} />
              </Box>
            </div>
            :
            <SankeyChart />
        }

        <CardContent>
          <div dir="rtl" className="pt-10">
            <EnhancedTable />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
