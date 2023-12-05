import AsyncStorage from '@react-native-async-storage/async-storage';

// Reusable function to retrieve token during app flow
export const retrieveToken = async () => {
  try {
    const token = await AsyncStorage.getItem('jwtToken');
    return token;
  } catch (error) {
    console.error('Error retrieving token: ', error);
    return null;
  }
};

// posts message using the stored jwt
export const postMessage = async (message: string) => {
  try {
    const token = await retrieveToken();
    const response = await fetch('http://192.168.188.42:3001/createPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ message }),
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
