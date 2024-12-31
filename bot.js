const WhatsAppBurnoutBailey = require('./attacks/whatsappBurnoutBailey');
const config = require('./config/config');

// Créer une instance du bot et lancer l'attaque
async function startBot() {
  const bot = new WhatsAppBurnoutBailey();
  await bot.execute();
}

// Démarrer le bot
startBot().catch(err => {
  console.error('Erreur lors du démarrage du bot :', err);
});
