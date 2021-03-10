export const nameFromCode = code => services.find(s => s.code === code).name

export const services = [
  { code: 'JA', name: 'Jobactive' },
  { code: 'PN', name: 'ParentsNext' },
  { code: 'DES', name: 'Disability Employment Services' },
]
