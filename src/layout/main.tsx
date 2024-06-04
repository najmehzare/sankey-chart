import * as React from 'react';
import Stack from '@mui/material/Stack';
import SankeyChart from "@/components/sankey-chart";
import EnhancedTable from "@/components/table";

export default function Main() {

    return (
        <div>
            <Stack sx={{ padding: '10px', margin: '15px' }}>
                <SankeyChart />
            </Stack>
            <Stack sx={{ padding: '10px', margin: '15px' }} >
                <EnhancedTable />
            </Stack>
        </div>
    );
}