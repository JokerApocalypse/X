const fs = require('fs');
const chalk = require('chalk');

// Informations sur le bot
global.botname = 'Chaos Bot MD V1';  // Nom du bot
global.ownernumber = ['YOUR_PHONE_NUMBER'];  // Numéro du propriétaire
global.ownername = 'Your Name';  // Nom du propriétaire
global.websitex = "https://yourwebsite.com";  // Lien vers le site
global.themeemoji = '🔥';  // Emoji du thème
global.wm = "Chaos Bot";  // Nom du bot ou marque
global.botscript = "https://github.com/YourRepo"; // Lien vers le script GitHub
global.packname = "Chaos Bot";  // Nom du sticker
global.author = "Your Name";  // Auteur du bot

// Paramètres pour la gestion des utilisateurs
global.premium = ['YOUR_PHONE_NUMBER'];  // Liste des utilisateurs premium
global.typemenu = 'v12';  // Type de menu
global.typereply = 'v4';  // Type de réponse
global.autoblocknumber = '92';  // Code pays à bloquer
global.antiforeignnumber = '91';  // Code pays à bloquer pour numéros étrangers

// Liste des symboles pour les menus
global.listv = ['•', '●', '■', '✿', '▲', '➩', '➢', '➣', '➤', '✦', '✧', '△', '❀', '○', '□', '♤', '♡', '◇', '♧', '々', '〆'];

// Base de données (par exemple, les fichiers JSON)
global.tempatDB = 'database.json';

// Limites des utilisateurs
global.limit = {
  free: 100,
  premium: 999,
  vip: 'VIP'
};

// Paramètres monétaires
global.uang = {
  free: 10000,
  premium: 1000000,
  vip: 10000000
};

// Messages du bot
global.mess = {
  error: 'Erreur!',
  nsfw: 'NSFW est désactivé dans ce groupe, veuillez demander à l\'administrateur de l\'activer.',
  done: 'Fait!'
};

// Configuration du bot
global.bot = {
  limit: 0,
  uang: 0
};

// Jeux
global.game = {
  suit: {},
  menfes: {},
  tictactoe: {},
  kuismath: {},
  tebakbom: {}
};

// Surveillance des modifications de fichier
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Mise à jour ${__filename}`));
  delete require.cache[file];
  require(file);
});
