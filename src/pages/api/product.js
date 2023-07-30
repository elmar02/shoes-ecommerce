export default async function handler(req, res) {
  try {
    const data = await fetch("https://fakestoreapi.com/products");
    const jsonData = await data.json();
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
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.log(error);
    const products = null;
    return {
      props: {
        products,
      },
    };
  }
}

