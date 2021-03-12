import { useState } from 'react'
import Form from './Form'
import Share from './Share'

export default function ActionPane() {
  const [step, setStep] = useState(1)
  const [id, setId] = useState('')

  return (
    <div className="flex flex-col justify-center items-center max-w-screen-xl w-full mx-auto text-white text-lg md:text-xl py-12 px-4 pb-24">
      <div className="grid gap-8 md:gap-16 lg:gap-32 md:grid-cols-2 text-gray-900 w-full">
        {step < 3 && (
          <div className="space-y-4 leading-relaxed">
            <p>
              <strong>Jobactive. ParentsNext. Disability Employment Services.</strong> For years these predatory
              employment services have flown under the radar while punishing, humiliating, and disciplining everyday
              people. And now, at the same time the government is creating a hotline for dobbing in job seekers, they’re
              suspending their ratings system for jobactive – the only, tiny bit of accountability they had.
            </p>
            <p>
              Enough is enough. We need to expose these agencies to the public for the cruelty they enact – and we want
              to pressure their investors and politicians to stop supporting their actions.
            </p>
            <p className="text-xl md:text-2xl font-bold text-secondary-500">
              {' '}
              Let’s disrupt employment services and #BreakThePovertyMachine
            </p>
          </div>
        )}

        {step < 3 ? (
          <div className="">
            <Form {...{ step, setStep, setId }} />
          </div>
        ) : (
          <Share {...{ step, setStep, id }} />
        )}
      </div>
    </div>
  )
}
