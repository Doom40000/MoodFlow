// Call that stores all questions and their respective answers as nodes in db
import axios from 'axios';

const neo4jEndpoint = 'http://localhost:3001/postReq';
const neo4jReceivepoint = 'http://localhost:3001/getReq';

interface questionsInt {
  question: string;
  answer: string | boolean;
  relationship: any;
  date: Date;
}

export async function createNodes(questions: questionsInt[]) {
  try {
    const nodes = questions.map(({ question, answer, relationship, date }) => ({
      questionNumber: question,
      answerText: answer,
      relationshipType: relationship,
      date,
    }));

    const response = await axios.post(neo4jEndpoint, { nodes });

    console.log('Nodes and relationships created:', response.data);
  } catch (error) {
    console.error('Error creating nodes and relationships:', error);
  }
}

export async function receiveNodes() {
  try {
    const response = await axios.get(neo4jReceivepoint);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error('Something is bad');
  }
}
