import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Bruno Moreira"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum ex ipsa a perspiciatis est animi iusto quis ea, ducimus dolore odit tempora voluptas quia mollitia excepturi voluptate, eveniet cum. Impedit."
          />
          <Post author="Diego Fernandes" content="Post legal" />
        </main>
      </div>
    </div>
  );
}
