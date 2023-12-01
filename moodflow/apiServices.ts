import { store } from "./store/store";

interface finalState{
  question1: string,
  question2: boolean,
  question3: boolean,
  question4: boolean,
  question5: boolean
}

const getAllStates = () => {
  const finalState: any = store.getState();
}
