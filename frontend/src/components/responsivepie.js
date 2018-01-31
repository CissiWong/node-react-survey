import { render } from 'react-dom'
import { ResponsivePie } from '@nivo/pie'

render((
  <div>
    <ResponsivePie
      data={[
        {
          id: "med sjukpenning",
          label: "med sjukpenning",
          value: 800,
          color: "hsl(67, 70%, 50%)"
        },
        {
          id: "utan sjukpenning",
          label: "utan sjukpenning",
          value: 200,
          color: "hsl(283, 70%, 50%)"
        }
      ]}

      margin={{
        top: 40,
        right: 80,
        bottom: 80,
        left: 80
      }}
      innerRadius={0.05}
      padAngle={0.7}
      cornerRadius={3}
      colors="pastel1"
      colorBy="id"
      borderColor="inherit:darker(0.6)"
      radialLabelsSkipAngle={10}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#333333"
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={16}
      radialLabelsLinkHorizontalLength={24}
      radialLabelsLinkStrokeWidth={1}
      radialLabelsLinkColor="inherit"
      enableSlicesLabels={false}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#333333"
      animate
      motionStiffness={90}
      motionDamping={15}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          translateY: 56,
          itemWidth: 100,
          itemHeight: 14,
          symbolSize: 14,
          symbolShape: "circle"
        }
      ]} />
  </div>
))
