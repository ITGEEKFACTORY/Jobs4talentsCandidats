// utils/dateUtils.js
export const formatDate = (dateString) => {
  if (!dateString) return '';

  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Intl.DateTimeFormat('fr-FR', options).format(new Date(dateString));
};
