import { useState } from 'react'
import Form from './Form'
import Share from './Share'

export default function ActionPane() {
  const [step, setStep] = useState(1)
  const [id, setId] = useState('')

  return <>
    <div className="cta-container">
      {step < 3 &&
        <div className="pane">
          <p>
            Jobactive. ParentsNext. Disability Employment Services. For years these predatory employment services have flown under the radar while punishing, humiliating, and disciplining everyday people. And now, at the same time the government is creating a hotline for dobbing in job seekers, they’re suspending their ratings system for jobactive – the only, tiny bit of accountability they had.
          </p>
          <p>
            Enough is enough. We need to expose these agencies to the public for the cruelty they enact  – and we want to pressure their investors and politicians to stop supporting their actions. Let’s disrupt employment services and #breakthepovertymachine
          </p>
        </div>
      }
      <div className="pane">
        {step < 3
          ? <Form {...{ step, setStep, setId }} />
          : <Share {...{ step, setStep, id }} />
        }
      </div>
    </div>

    <style jsx>{`
      .cta-container {
        display: flex;
        flex-flow: row wrap;
      }
      @media (min-width: 600px) {
        .pane {
          max-width: 290px;
        }
      }
    `}</style>
  </>
}
