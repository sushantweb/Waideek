// const puppeteer = require('puppeteer');

// // Define a function to search the web for answers
// async function searchWeb(question) {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     await page.goto(`https://www.google.com/search?q=${encodeURIComponent(question)}`);

//     // Wait for the search results to load and extract the answer
//     const answer = await page.evaluate(() => {
//         const answerElement = document.querySelector('#cwos');
//         // const answerElement = document.querySelector('.Z0LcW');
//         return answerElement ? answerElement.innerText : 'Answer not found';
//     });

//     await browser.close();

//     return answer;
// }

// // Sample user input
// // const userInput = 'What is 99 + 4 ?';

// // Chatbot response
// function searchd(inp){ 
// searchWeb(inp).then((botResponse) => {
//     console.log(`User: ${inp}`);
//     console.log(`Chatbot: ${botResponse}`);
// }).catch((error) => {
//     console.error(`Error occurred: ${error}`);
// });}

// export default searchd;