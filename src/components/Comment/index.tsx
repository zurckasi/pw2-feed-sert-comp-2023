import styles from "./Comment.module.css";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Trash, ThumbsUp } from "phosphor-react";
import { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

type Pros = {
  id: number;
  name: string;
  avatar: string;
  text: string;
  publicationDate: Date;
  like: number;
  comments: IComment[];
  setComments: (valor: IComment[]) => void;
};

type IComment = {
  name: string;
  avatar: string;
  text: string;
  publicationDate: Date;
  like: number;
};

export const Comment = ({
  avatar,
  name,
  publicationDate,
  text,
  like,
  id,
  setComments,
  comments,
}: Pros) => {
  const [isLiked, seIstLiked] = useState(false);
  const [totalLiked, setTotalLiked] = useState(0);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    setTotalLiked(like);
  }, []);

  const handleLike = () => {
    if (isLiked) {
      const total = totalLiked - 1;
      setTotalLiked(total);
      seIstLiked(false);
    } else {
      const total = totalLiked + 1;
      setTotalLiked(total);
      seIstLiked(true);
    }
  };

  const handleDelete = (index: number) => {
    const indexToRemove = index;
    console.log(index);
    const allComments = [...comments];
    allComments.splice(indexToRemove, 1);
    setComments(allComments);
    onCloseModal();
  };

  return (
    <>
      <div>
        <Modal
          styles={{
            modal: {
              background: "#29292E",
            },
          }}
          open={open}
          onClose={onCloseModal}
          center
        >
          <div className={styles["conteiner-modal"]}>
            <h2>Excluir comentário</h2>
            <p>Você tem certeza que gostaria de excluir este comentário?</p>
            <div className={styles["btns-modal"]}>
              <button onClick={onCloseModal}>
                <strong>Cancelar</strong>
              </button>
              <button onClick={() => handleDelete(id)}>
                <strong>Sim, excluir</strong>
              </button>
            </div>
          </div>
        </Modal>
      </div>
      <div className={styles.conteiner}>
        <div className={styles.cont}>
          <div className={styles.avatar}>
            <img width={45} src={avatar}></img>
          </div>
          <div className={styles["comment-box"]}>
            <div className={styles["comment-header"]}>
              <div>
                <strong>{name}</strong>
                <p className={styles.data}>
                  {formatDistanceToNow(publicationDate, {
                    addSuffix: true,
                    locale: ptBR,
                  }).toString()}
                </p>
              </div>
              <Trash onClick={onOpenModal} size={20} />
            </div>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
        <div className={styles.thumb}>
          <ThumbsUp
            color={isLiked ? "#00B37E" : "#c4c4cc"}
            style={{ marginRight: 5 }}
            size={20}
            onClick={() => handleLike()}
          />
          Aplaudir • {totalLiked}
        </div>
      </div>
    </>
  );
};
