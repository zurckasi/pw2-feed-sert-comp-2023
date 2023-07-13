import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    name: "Francisco Weslley",
    profession: "Dev Front-End",
    avatar: "https://github.com/weslleycz.png",
    text: `Fala galeraa 👋\nAcabei derealizar o minicurso de React no evento SertaoComp. Vocês gostaram? 🚀\n
#typescript #React #sertaocomp`,
    publicationDate: new Date("2023-05-01T10:30:00"),
    comment: [
      {
        name: "Francisco Weslley",
        avatar: "https://github.com/weslleycz.png",
        text: `Muito bom Devon, parabéns!! 👏👏`,
        publicationDate: new Date(),
        like: 3,
      },
      {
        name: "Francisco Weslley",
        avatar: "https://github.com/weslleycz.png",
        text: `Muito bom Devon, parabéns!! 👏👏`,
        publicationDate: new Date("2023-05-01T10:30:00"),
        like: 0,
      },
      {
        name: "Francisco Weslley",
        avatar: "https://github.com/weslleycz.png",
        text: `Muito bom Devon, parabéns!! 👏👏`,
        publicationDate: new Date("2023-05-01T10:30:00"),
        like: 5,
      },
    ],
  },
  {
    id: 2,
    name: "Francisco Weslley",
    profession: "Dev Front-End",
    avatar: "https://github.com/weslleycz.png",
    text: `Fala galeraa 👋\nAcabei derealizar o minicurso de React no evento SertaoComp. Vocês gostaram? 🚀\n
#typescript #React #sertaocomp`,
    publicationDate: new Date("2023-05-01T10:30:00"),
    comment: [
    ],
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </main>
      </div>
    </div>
  );
}
