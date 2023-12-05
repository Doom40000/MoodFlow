import { getAllHabits, addToHabits, deleteHabit } from '../models/Habits';

const getAllHabitsController = async () => {
  try {
    const habits = await getAllHabits();
    return habits;
  } catch (error) {
    console.error(error);
  }
};

const addToHabitsController = async (habits: string[]) => {
  try {
    await addToHabits(habits);
    return 'Habits succesfully added';
  } catch (error) {
    console.error(error);
  }
};

const deleteHabitController = async (id: number) => {
  try {
    await deleteHabit(id);
    return `Habit ${id} succesfully deleted`;
  } catch (error) {
    console.error(error);
  }
};

export { getAllHabitsController, addToHabitsController, deleteHabitController };
