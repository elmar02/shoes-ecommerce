export default async function handler(req, res) {
  try {
    const timeoutDuration = 5000; // 5 seconds timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutDuration);

    const data = await fetch('https://fakestoreapi.com/products', {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);    const jsonData = await data.json();
    res.status(200).json(jsonData);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Unable to fetch products" });
  }
}

export async function getServerSideProps() {
  try {

    const timeoutDuration = 5000; // 5 seconds timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutDuration);

    const res = await fetch('https://fakestoreapi.com/products', {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    const products = await res.json();
    const timeoutDuration1 = 5000; // 5 seconds timeout
    const controller1 = new AbortController();
    const timeoutId1 = setTimeout(() => controller1.abort(), timeoutDuration1);

    const res1 = await fetch('https://jsonplaceholder.typicode.com/comments', {
      signal: controller.signal,
    });

    clearTimeout(timeoutId1);
    const reviews = await res1.json();
    return {
      props: {
        products,
        reviews,
      },
    };
  } catch (error) {
    console.log(error);
    const products = null;
    const reviews = null;
    return {
      props: {
        products,
        reviews,
      },
    };
  }
}