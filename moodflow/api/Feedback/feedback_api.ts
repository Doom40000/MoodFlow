//! If an error message comes up about Unhandled Promise rejection, check one of the first few lines of the error and change the IP (not port) to the one displayed
const neo4jEndpoint = 'http://192.168.188.42:3001/postReq';
const neo4jReceivepoint = 'http://192.168.188.42:3001/getReq/';

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
    const response = await fetch(neo4jEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nodes }),
    });

    console.log('Nodes and relationships created!', JSON.stringify({ nodes }));
  } catch (error) {
    console.error('Error creating nodes and relationships:', error);
  }
}

export async function receiveNodes(date: Date | string) {
  try {
    const response = await fetch(neo4jReceivepoint + date);
    const parsedData = await response.json();
    return parsedData;
  } catch (error) {
    console.log(error);
    throw new Error('Something is bad');
  }
}
