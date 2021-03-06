import { useState } from 'react'
import Form from './Form'
import Share from './Share'

export default function ActionPane() {
  const [step, setStep] = useState(1)
  const [id, setId] = useState('')

  return <>
    {step < 3
      ? <Form {...{ step, setStep, setId }} />
      : <Share {...{ step, setStep, id }} />
    }
  </>
}
