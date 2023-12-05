// Call that stores all questions and their respective answers as nodes in db
import axios from 'axios';

const neo4jEndpoint = 'http://localhost:3001/postReq';
const neo4jReceivepoint = 'http://localhost:3001/getReq/';

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
    // console.log('NODES: ' ,nodes);
    const response = await fetch(neo4jEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nodes }),
    });

    console.log('Nodes and relationships created!', response);
  } catch (error) {
    console.error('Error creating nodes and relationships:', error);
  }
}

export async function receiveNodes(date: Date | string) {
  try {
    const response = await axios.get(neo4jReceivepoint + date);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error('Something is bad');
  }
}
