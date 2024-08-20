// Corriger la syntaxe d'exportation de la fonction fléchée
export default function formDataToJson(formData){
  const jsonObject = {};

  formData.forEach((value, key) => {
    // Vérifiez si la clé existe déjà dans l'objet JSON
    if (jsonObject.hasOwnProperty(key)) {
      // Si c'est un tableau, ajoutez la nouvelle valeur
      if (Array.isArray(jsonObject[key])) {
        jsonObject[key].push(value);
      } else {
        // Convertir en tableau si déjà une valeur existe
        jsonObject[key] = [jsonObject[key], value];
      }
    } else {
      jsonObject[key] = value;
    }
  });

  return jsonObject;
};
