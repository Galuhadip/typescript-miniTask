import { ContactManager } from '../models/ContactManager';
import { Contact } from '../interfaces/Contact';

export class ContactController {
  private contactManager: ContactManager;

  constructor() {
    this.contactManager = new ContactManager();
  }

  handleCommand(command: string, args: string[]): void {
    switch (command) {
      case 'add':
        const [name, email, phone] = args;
        const newContact: Contact = {
          id: Date.now(),
          name,
          email,
          phone
        };
        this.contactManager.addContact(newContact);
        console.log('Contact added successfully.');
        break;
      case 'update':
        const [idToUpdate, updatedName, updatedEmail, updatedPhone] = args;
        this.contactManager.updateContact(Number(idToUpdate), {
          name: updatedName,
          email: updatedEmail,
          phone: updatedPhone
        });
        console.log('Contact updated successfully.');
        break;
      case 'delete':
        const [idToDelete] = args;
        this.contactManager.deleteContact(Number(idToDelete));
        console.log('Contact deleted successfully.');
        break;
      case 'list':
        this.contactManager.listContacts();
        break;
      default:
        console.log('Unknown command.');
    }
  }
}