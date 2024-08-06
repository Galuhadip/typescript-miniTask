import { Contact } from '../interfaces/Contact';

export class ContactManager {
  private contacts: Contact[] = [];

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  updateContact(id: number, updatedContact: Partial<Contact>): void {
    const contactIndex = this.contacts.findIndex(contact => contact.id === id);
    if (contactIndex !== -1) {
      this.contacts[contactIndex] = { ...this.contacts[contactIndex], ...updatedContact };
    } else {
      console.log(`Contact with id ${id} not found.`);
    }
  }

  deleteContact(id: number): void {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
  }

  listContacts(): void {
    console.log(this.contacts);
  }
}