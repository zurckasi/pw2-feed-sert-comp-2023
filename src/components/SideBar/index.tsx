import { PencilLine } from 'phosphor-react';
import styles from './SideBar.module.css';
import { Avatar } from '../Avatar';

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      
      <div className={styles.profile}>
      <Avatar avatar='https://github.com/weslleycz.png'/>

        <strong>Francisco Weslley</strong>

        <span>Full Stack</span>
      </div>

      <footer className={styles.footer}>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}