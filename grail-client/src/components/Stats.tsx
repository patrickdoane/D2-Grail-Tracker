import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';
import { Box } from '@mui/material';


function Stats({ items }) {
    console.log(items);

    const uniques = items.filter(item => item.quality === 'unique');

    const sets = items.filter(item => item.quality === 'set');

    const uniquesFound = uniques.filter(unique => unique.found);

    const setsFound = sets.filter(set => set.found);

    console.log(uniquesFound);
    console.log(setsFound)

    return (
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }} justifyContent={'center'}>
            <Box>
                <h3 id="uniques">
                    Uniques
                </h3>
                <Gauge
                    width={100}
                    height={100}
                    value={uniquesFound.length}
                    valueMax={uniques.length}
                    text={
                        ({ value, valueMax }) => `${value} / ${valueMax}`
                    }>
                    Uniques
                </Gauge>
            </Box>
            <Box>
                <h3 id="sets">
                    sets
                </h3>
                <Gauge
                    width={100}
                    height={100}
                    value={setsFound.length}
                    valueMax={sets.length}
                    text={
                        ({ value, valueMax }) => `${value} / ${valueMax}`
                    }>
                    sets
                </Gauge>
            </Box>
        </Stack>
    )
}

export default Stats;