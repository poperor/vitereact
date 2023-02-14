import "../main.css";
import { Link } from "react-router-dom";
import Layout from "../components/layout";
import { useEffect } from "react";

declare const window: Window & { dataLayer: Record<string, unknown>[] };

export const Home = () => {
  useEffect(() => {
    const title = "vitereact hjem";
    document.title = title;
    window.dataLayer.push({
      event: "virtualPageview",
      pageUrl: window.location.href,
      pageTitle: title,
    });
  }, []);
  return (
    <Layout>
      <div className="home">
        <ul>
          <li>
            <Link to="teller">Teller</Link>
          </li>
          <li>
            <Link to="events">Events</Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
