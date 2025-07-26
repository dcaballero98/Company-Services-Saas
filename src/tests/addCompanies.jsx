const companies = [
  {
    id: 'empresa1',
    name: 'Clínica Salud Total',
    category: 'Salud',
    description: 'Clínica especializada en salud y bienestar.',
    services: [
      { id: 'srv1', name: 'Consulta médica', price: 50 }
    ]
  }
];
const companiesJson = JSON.parse(localStorage.getItem('companies')) || [];
companiesJson.push(...companies);
localStorage.setItem('companies', JSON.stringify(companiesJson));