const r = 18
const circleLength = 2 * Math.PI * r
const circleProps = { className: "circle", cx: "50%", cy: "50%", r }
const emptyStyle = { stroke: 'white' }
const colour = remaining => remaining <= 0 ? 'red' : remaining <= 20 ? 'orange' : '#EB4A8E'

export default function CharsRemaining({ className, current, max }) {
  const remaining = max - current
  const filledSegment = (circleLength * current) / max
  const emptySegment = circleLength - filledSegment > 0 ? circleLength - filledSegment : 0
  const fillStyle = {
    stroke: colour(remaining),
    strokeDasharray: `${filledSegment} ${emptySegment}`
  }
  const textStyle = { fill: colour(remaining) }

  return (<>
    <svg className={className}>
      {remaining > -10 &&
        <circle {...circleProps} style={emptyStyle}></circle>
      }
      {remaining <= 20 &&
        <text
          x="50%"
          y="49%"
          dominantBaseline="central"
          textAnchor="middle"
          style={textStyle}
        >
          {remaining}
        </text>
      }

      {remaining > -10 &&
        <circle {...circleProps} style={fillStyle}></circle>
      }
    </svg>
    <style jsx>{`
      svg {
        width: 10vmin;
        height: 10vmin;
      }
      .circle {
        fill: transparent;
        stroke-width: 4px;
      }
    `}</style>
  </>)
}
