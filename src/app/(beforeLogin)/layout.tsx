import { ReactNode } from "react";
import styles from "../page.module.css";

export default function Layout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
//패러랠 라우트(@modal 폴더)는 modal로 간다 2가지 화면을 한페이지에 띄울 수 있다.
// (.)i <- 현재폴더에 있는 i를 써서 인터셉트 라우트를 한다

// @modal안에 있는 모달을 가로챈다

// @modal과 같은 경로에 있는 i폴더는 실행이 안되고

// @modal 에 있는 모달이 가로채서 main폴더와 같이 띄운다.

// 그래서 @modal은 패러랠 라우트여서 layout에 modal로 그려진다

// 그러면 @modal 경로에 있는 i폴더들은 새로고침했을 때 또는 브라우저를 통해 처음에 실행 될때 실행 된다

// 그러면 인터셉트 라우트는 링크를 통해서 실행이 되는거다.
