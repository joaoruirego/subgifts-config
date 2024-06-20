"use client";

import Image from "next/image";
import styles from "./page.module.css";
import emblema1 from "/public/emblema1.jpg";
import emblema2 from "/public/emblema2.jpg";
import logoCliente from "/public/logoCliente.png";
import { useState } from "react";

export default function Home() {
  const [adicionarEmblema, setAdicionarEmblema] = useState(false);

  return (
    <main className={styles.main}>
      <header className={styles.headerBO}>
        <div>
          <Image alt="Step" width={84} height={53} src={logoCliente} />

          <h1>Gestão de Emblemas</h1>
        </div>
        <button
          onClick={() => {
            setAdicionarEmblema(true);
          }}
        >
          Adicionar Emblema
        </button>
      </header>

      <div className={styles.emblemasContainer}>
        <section className={styles.emblemaContainer}>
          <Image alt="Step" width={200} height={200} src={emblema1} />
          <p>Nome do Emblema 1</p>
        </section>
        <section className={styles.emblemaContainer}>
          <Image alt="Step" width={200} height={200} src={emblema2} />
          <p>Nome do Emblema 2</p>
        </section>
      </div>

      {adicionarEmblema && (
        <div className={styles.newEmblemaContainer}>
          <h1>
            Criar um novo <b>Emblema</b>
          </h1>
          <header>
            <div className={styles.newEmblemaOption}>
              <Image alt="Step" width={200} height={200} src={emblema1} />
            </div>
            <div className={styles.newEmblemaOption}>
              <Image alt="Step" width={200} height={200} src={emblema2} />
            </div>
            {/* <div className={styles.newEmblemaOption}>
            <Image alt="Step" width={200} height={200} src={emblema1} />
          </div> */}
          </header>
        </div>
      )}
    </main>
  );
}
