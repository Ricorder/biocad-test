const Product = require('./product')
const { connect, disconnect } = require('mongoose');
connect('mongodb://localhost:27017/Biocad');

const products = [
		{ typeOfDisease: 'Орфанные заболевания', name: 'ANB-4', mecanism: 'SMN1 transgene AAV9', indication: 'СМА 1 типа', stage: 1},
		{ typeOfDisease: 'Орфанные заболевания', name: 'ANB-2', mecanism: 'Factor-IX transgene AAV5', indication: 'Гемофилия B', stage: 1},
		{ typeOfDisease: 'Аутоиммунные заболевания', name: 'Сампэгинтерферон бета-1а (BCD-054)', mecanism: 'Pegylated interferon beta-1a', indication: 'Рассеянный склероз', stage: 4},
		{ typeOfDisease: 'Онкология', name: 'Пролголимаб (BCD-100)', mecanism: 'anti-PD-1 mAb', indication: 'НМРЛ', stage: 4},
		{ typeOfDisease: 'Онкология', name: 'Пролголимаб (BCD-100)', mecanism: 'anti-PD-1 mAb', indication: 'Рак шейки матки', stage: 4},
		{ typeOfDisease: 'Аутоиммунные заболевания', name: 'Дивозилимаб (BCD-132)', mecanism: 'anti-CD20 mAb', indication: 'Рассеянный склероз', stage: 4},
		{ typeOfDisease: 'Онкология', name: 'BCD-166', mecanism: 'anti-GITR mAb', indication: 'Солидные опухоли', stage: 1},
		{ typeOfDisease: 'Онкология', name: 'Пролголимаб + Нурулимаб (BCD-217)', mecanism: 'anti-CTLA-4 mAb + anti-PD1 mAb', indication: 'Меланома', stage: 3},
		{ typeOfDisease: 'Онкология', name: 'BCD-223', mecanism: 'anti-IL10 mAb', indication: 'Солидные опухоли', stage: 1},
		{ typeOfDisease: 'Онкология', name: 'BCD-225', mecanism: 'anti-IL15SA mAb', indication: 'Солидные опухоли', stage: 1},
		{ typeOfDisease: 'Орфанные заболевания', name: 'BCD-245', mecanism: 'anti-GD-2 mAb', indication: 'Нейробластома', stage: 1},
		{ typeOfDisease: 'Другое', name: 'Вакцина для профилактики COVID-19 (BCD-250)', mecanism: 'SARS-CoV-2 AAV5-based vaccine', indication: 'Профилактика COVID-19', stage: 2},
		{ typeOfDisease: 'Аутоиммунные заболевания', name: 'Диметил Фумарат (BCD-058)', mecanism: 'activator of nuclear factor erythroid 2 [NF-E2]-related factor 2', indication: 'Рассеянный склероз', stage: 5},
		{ typeOfDisease: 'Онкология', name: 'Сунитиниб (BCD-200)', mecanism: 'indolinone derivative and tyrosine kinase inhibitor', indication: 'Почечно-клеточный рак', stage: 4},
		{ typeOfDisease: 'Онкология', name: 'Пембролизумаб (BCD-201)', mecanism: 'PD-1 inhibitor', indication: 'Солидные опухоли Онкогематология', stage: 2},
];

async function main() {
  async function productsFabric() {
    await Product.create(products);
  }

  await productsFabric()
}

main().then(() => disconnect())
