import Image from "next/image";
import styles from "./page.module.css";
import catImage from "@/public/cat_icon.png"
import feralCat from "@/public/matt-seymour-mgLloBtUdvE-unsplash.jpg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Friends of Feral Felines</h1>
        <div className={styles.imageContainer}>
          <Image src={catImage} width={40} height={40} alt="Outline of cat" />
        </div>
        <section>
          <h1>About Us</h1>
          <h3>What is Friends of Feral Felines?</h3>
          <p>
            Friends of Feral Felines is a resource to help care for feral cats in the community.
          </p>
          <Image src={feralCat} width={160} height={160} alt="Picture of cat in foliage" />
        </section>
        
      </div>
    </main>
  );
}
