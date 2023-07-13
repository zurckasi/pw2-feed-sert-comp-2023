import { Avatar } from "../Avatar";
import styles from "./Post.module.css";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Comment } from "../Comment";
import { useEffect, useState } from "react";

type Pros = {
  id: number;
  name: string;
  profession: string;
  avatar: string;
  text: string;
  publicationDate: Date;
  comment: IComment[];
};

type IComment = {
  name: string;
  avatar: string;
  text: string;
  publicationDate: Date;
  like: number;
};

export function Post({
  avatar,
  name,
  profession,
  publicationDate,
  text,
  comment,
}: Pros) {
  const formatarPalavrasComHashtag = (texto: string) => {
    const regex = /#(\w+)/g;
    const textoFormatado = texto.replace(
      regex,
      '<a href="#" style="color: #00B37E;"> <strong>$&</strong></a>'
    );

    return <div dangerouslySetInnerHTML={{ __html: textoFormatado }} />;
  };

  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    setComments(comment);
  }, []);

  return (
    <>
      <div className={styles["post-container"]}>
        <header>
          <div className={styles["avatar-container"]}>
            <Avatar avatar={avatar} />
            <div>
              <div className={styles["avatar-text"]}>
                <strong>{name}</strong>
                <p>{profession}</p>
              </div>
            </div>
          </div>
          <div className={styles["header-date"]}>
            <p>
              {formatDistanceToNow(publicationDate, {
                addSuffix: true,
                locale: ptBR,
              }).toString()}
            </p>
          </div>
        </header>
        <main className={styles["text-post"]}>
          <pre>{formatarPalavrasComHashtag(text)}</pre>
          <hr />
        </main>
        <footer className={styles["feedback-container"]}>
          <strong>Deixe seu Deixe seu feedback</strong>
          <textarea placeholder="Deixe seu comentário" rows={4}></textarea>
          <button className={styles.btn}>Publicar</button>
          {comments.map((comment, index) => (
            <Comment
              comments={comments}
              setComments={setComments}
              key={index}
              id={index}
              {...comment}
            />
          ))}
        </footer>
      </div>
    </>
  );
}
