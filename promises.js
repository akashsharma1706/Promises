
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Function to create a post
  function createPost(post) {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous operation
      setTimeout(() => {
        console.log(`Post created: ${post}`);
        resolve(post);
      }, 1000);
    });
  }
  
  // Function to update last user activity time
  function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous operation
      setTimeout(() => {
        const lastActivityTime = new Date();
        console.log(`Last activity time updated: ${lastActivityTime}`);
        resolve(lastActivityTime);
      }, 1000);
    });
  }
  
  // Function to delete a post
  function deletePost(post) {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous operation
      setTimeout(() => {
        console.log(`Post deleted: ${post}`);
        resolve();
      }, 1000);
    });
  }
  
  // Main logic
  const user = "John";
  
  createPost("First post by John")
    .then(() => updateLastUserActivityTime())
    .then((lastActivityTime) => {
      console.log(`Last activity time: ${lastActivityTime}`);
      return createPost("Second post by John");
    })
    .then(() => updateLastUserActivityTime())
    .then((lastActivityTime) => {
      console.log(`Last activity time: ${lastActivityTime}`);
      return createPost("Third post by John");
    })
    .then(() => updateLastUserActivityTime())
    .then((lastActivityTime) => {
      console.log(`Last activity time: ${lastActivityTime}`);
      // Now, all posts are created, and last activity time is updated
  
      // Delete the last post
      return deletePost("Third post by John");
    })
    .then(() => {
      console.log("Post deleted successfully!");
  
      // Log the remaining posts
      console.log("Remaining Posts:");
      console.log("1. First post by John");
      console.log("2. Second post by John");
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    });
  