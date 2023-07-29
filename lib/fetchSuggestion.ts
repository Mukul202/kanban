import axios from 'axios';
import formatTodosForAI from './formatTodosForAI';

const minTimeBetweenRequests = 1000; // Minimum time between API requests in milliseconds
let lastApiCallTime = 0;

const fetchSuggestion = async (board: Board) => {
  try {
    const currentTime = Date.now();
    const timeElapsed = currentTime - lastApiCallTime;

    // Check if the minimum time between requests has passed
    if (timeElapsed < minTimeBetweenRequests) {
      // If not, wait until the minimum time has passed before making the API call
      await new Promise((resolve) => setTimeout(resolve, minTimeBetweenRequests - timeElapsed));
    }

    // Record the current time as the last API call time
    lastApiCallTime = Date.now();


    const todos = formatTodosForAI(board);
    console.log('Formatted todos:', todos);

    const res = await axios.post('/api/generateSummary', { todos });

    const { data } = res;
    const { content } = data;

    console.log('Response from API:', content);

    return content;
  } catch (error) {
    console.error('Error occurred:', error);
    return 'An error occurred while fetching the suggestion.';
  }
};

export default fetchSuggestion;
