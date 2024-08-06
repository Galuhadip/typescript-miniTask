import { ContactController } from './controllers/ContactController';

const contactController = new ContactController();

const command = process.argv[2];
const args = process.argv.slice(3);

contactController.handleCommand(command, args);