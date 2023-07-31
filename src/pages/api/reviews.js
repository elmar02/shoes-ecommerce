export default async function handler(req, res) {
    try {
      const timeoutDuration = 5000; // 5 seconds timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeoutDuration);
  
      const data = await fetch('https://jsonplaceholder.typicode.com/comments', {
        signal: controller.signal,
      });
  
      clearTimeout(timeoutId);    const jsonData = await data.json();
      res.status(200).json(jsonData);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      res.status(500).json({ error: "Unable to fetch reviews" });
    }
  }
  
 
  