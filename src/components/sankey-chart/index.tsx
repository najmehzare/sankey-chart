import React, { Component } from 'react'
import Chart from 'react-google-charts'

const sankeyData = [
    ['From', 'To', 'Weight'],
    ['bar_left', 'foo_right', 1],
    ['bar_left', 'bar_right', 1],
    ['bar_left', 'baz_right', 1],
    ['foo_left', 'bar_right', 1],
    ['foo_left', 'baz_right', 1],
    ['baz_left', 'bar_right', 1],
]

var colors = ['orange', 'red', 'purple', 'brown','green', 'blue'];

var options = {
    height: 200,
    sankey: {
        node: {
            colors: colors
        },
        link: {
            colorMode: 'gradient',
            colors: colors
        }
    }
};

class SankeyChart extends Component {
    render() {
        return (
            <div className="container mt-5">
                <Chart
                    width={'100%'}
                    height={'100%'}
                    chartType="Sankey"
                    loader={<div>Loading Chart</div>}
                    data={sankeyData}
                    rootProps={{ 'data-testid': '1' }}
                    options={options}
                />
            </div>
        )
    }
}

export default SankeyChart