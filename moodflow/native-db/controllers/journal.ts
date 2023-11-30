import {
  getAllJournals,
  getJournalById,
  createJournalEntry,
  deleteJournalEntry,
} from '../models/Journal';

const getAllJournalsController = async () => {
  const journals = await getAllJournals();
  return journals;
};

const getJournalByIdController = async (id: number) => {
  const journal = await getJournalById(id);
  return journal;
};

const createJournalEntryController = async (title: string, body: string) => {
  await createJournalEntry(title, body);
  return 'Journal entry succesfully added';
};

const deleteJournalEntryController = async (id: number) => {
  await deleteJournalEntry(id);
  return `Journal entry ${id} succesfully deleted`;
};

export {
  getAllJournalsController,
  getJournalByIdController,
  createJournalEntryController,
  deleteJournalEntryController,
};
