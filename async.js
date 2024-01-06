// Simulating asynchronous operation with setTimeout
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Function to create a post (converted to async/await)
  async function createPost(post) {
    await delay(1000);
    console.log(`Post created: ${post}`);
    return post;
  }
  
  // Function to update last user activity time (converted to async/await)
  async function updateLastUserActivityTime() {
    await delay(1000);
    const lastActivityTime = new Date();
    console.log(`Last activity time updated: ${lastActivityTime}`);
    return lastActivityTime;
  }
  
  // Function to delete a post (converted to async/await)
  async function deletePost(post) {
    await delay(1000);
    console.log(`Post deleted: ${post}`);
  }
  
  // New promise to get cold drinks
  function getColdDrinks() {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous operation
      setTimeout(() => {
        console.log("Got cold drinks!");
        resolve();
      }, 1000);
    });
  }
  
  // Main logic using async/await and Promise.all
  async function main() {
    try {
      const user = "John";
  
      // Creating posts sequentially
      const firstPost = await createPost("First post by John");
      const lastActivityTime1 = await updateLastUserActivityTime();
      console.log(`Last activity time: ${lastActivityTime1}`);
  
      const secondPost = await createPost("Second post by John");
      const lastActivityTime2 = await updateLastUserActivityTime();
      console.log(`Last activity time: ${lastActivityTime2}`);
  
      const thirdPost = await createPost("Third post by John");
      const lastActivityTime3 = await updateLastUserActivityTime();
      console.log(`Last activity time: ${lastActivityTime3}`);
  
      // Delete the last post
      await deletePost("Third post by John");
      console.log("Post deleted successfully!");
  
      // Log the remaining posts
      console.log("Remaining Posts:");
      console.log(`1. ${firstPost}`);
      console.log(`2. ${secondPost}`);
  
      // Get cold drinks after getting butter
      await Promise.all([getColdDrinks(), updateLastUserActivityTime()]);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }
  
  // Run the main logic
  main();
  