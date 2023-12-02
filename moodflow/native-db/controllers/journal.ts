import {
  getAllJournals,
  getJournalById,
  createJournalEntry,
  deleteJournalEntry,
} from '../models/Journal';

const getAllJournalsController = async () => {
  try {
    const journals = await getAllJournals();
    return journals;
  } catch (error) {
    console.log(error);
  }
  
};

const getJournalByIdController = async (id: number) => {
  try {
    const journal = await getJournalById(id);
    return journal;
  } catch (error) {
    console.log(error);
  }
};

const createJournalEntryController = async (title: string, body: string) => {
  try {
    await createJournalEntry(title, body);
    return 'Journal entry succesfully added';
  } catch (error) {
    console.log(error)
  }
};

const deleteJournalEntryController = async (id: number) => {
  try {
    await deleteJournalEntry(id);
    return `Journal entry ${id} succesfully deleted`;
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllJournalsController,
  getJournalByIdController,
  createJournalEntryController,
  deleteJournalEntryController,
};
