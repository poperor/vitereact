import { useEffect, useState } from "react";
import Layout from "../components/layout";
import "../main.css";

declare const window: Window & { dataLayer: Record<string, unknown>[] };

export const Events = () => {
  useEffect(() => {
    const title = "vitereact events";
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
      event: "click_events",
      category: "counting",
      title: "events",
    });
  };

  return (
    <Layout>
      <div className="events">
        <h1>Diverse events</h1>
        <div className="card">
          <button onClick={() => countClicks()}>count is {count}</button>
          <p>Klikk på knappen for å telle oppover</p>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
