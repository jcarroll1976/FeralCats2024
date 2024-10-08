import Image from "next/image";

import calicoCat from "@/public/pexels-rasul70-18884320.jpg"
import styles from "./page.module.css";

export default function Resources() {
    return (
        <main>
            <h1>Resources for Community Cats</h1>
            <div className={styles.imageContainer}>
                <Image src={calicoCat} alt="calico cat"/>
            </div>
            <section>
                <h3>Food Assistance Programs</h3>
                <p>Brief overview of the importance of proper nutrition for feral cats</p>
                <p>Information on available food assistance programs (if any) in your area</p>
                <p>Tips on how to find food pantries or shelters that assist with pet food</p>
                <p>Guidance on creating a sustainable feeding schedule</p>
                <p>Information on potential food donors (local businesses, pet stores)</p>
            </section>
        </main>
    )
}