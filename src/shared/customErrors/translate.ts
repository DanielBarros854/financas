const app_nomenclatures = {
  user: 'usuário',
  investment: 'Investimento',
  expense: 'Gasto',
};

const captalizeFirstLetterHelper = (text: any) =>
  text[0].toUpperCase() + text.substring(1);

export const translate = (value: any) => {
  const value_in_lowercase = value.toLowerCase();

  const captalize_first_letter = app_nomenclatures[value_in_lowercase]
    ? captalizeFirstLetterHelper(app_nomenclatures[value_in_lowercase])
    : captalizeFirstLetterHelper(value);

  return {
    captalize_first_letter,
    text: app_nomenclatures[value_in_lowercase] || value,
  };
};
