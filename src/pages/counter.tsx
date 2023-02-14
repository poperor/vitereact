import { useEffect, useState } from "react";
import "../main.css";
import Layout from "../components/layout";

declare const window: Window & { dataLayer: Record<string, unknown>[] };

export const Counter = () => {
  useEffect(() => {
    const title = "vitereact teller";
    document.title = title;
    window.dataLayer.push({
      event: "virtualPageview",
      pageUrl: window.location.href,
      pageTitle: title,
    });
  }, []);
  const [count, setCount] = useState(0);

  const countClicks = () => {
    setCount((count) => count + 1);
    window.dataLayer.push({
      event: "click_counter",
      category: "counting",
      title: "teller",
    });
  };

  return (
    <Layout>
      <div className="counter">
        <h1>Teller</h1>
        <div className="card">
          <button onClick={() => countClicks()}>count is {count}</button>
          <p>Klikk på knappen for å telle oppover</p>
        </div>
      </div>
    </Layout>
  );
};

export default Counter;
