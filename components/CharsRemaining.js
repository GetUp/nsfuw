const r = 16
const boxSize = 37
const circleLength = 2 * Math.PI * r
const circleProps = { className: 'circle', cx: '50%', cy: '50%', transform: `rotate(-90) translate(-${boxSize},0)`, r }
const emptyStyle = { stroke: 'rgba(255,255,255,0.15)' }
const colour = remaining => remaining <= 0 ? 'red' : remaining <= 20 ? 'orange' : '#EB4A8E'

export default function CharsRemaining({ className, current, max }) {
  const remaining = max - current
  const filledSegment = (circleLength * current) / max
  const emptySegment = circleLength - filledSegment > 0 ? circleLength - filledSegment : 0
  const fillStyle = {
    stroke: colour(remaining),
    strokeDasharray: `${filledSegment} ${emptySegment}`,
  }
  const textStyle = { fill: colour(remaining) }

  return (<>
    <svg className={className}>
      {remaining > -10 &&
        <circle {...circleProps} style={emptyStyle} />
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
        <circle {...circleProps} style={fillStyle} />
      }
    </svg>
    <style jsx>{`
      svg {
        width: ${boxSize}px;
        height: ${boxSize}px;
      }
      .circle {
        fill: transparent;
        stroke-width: 4px;
      }
    `}</style>
  </>)
}
