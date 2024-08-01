import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/9985044/pexels-photo-9985044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Stanford University is a prestigious private research university
            located in Stanford, California, USA. It was founded in 1885 by
            Leland Stanford and his wife, Jane Stanford, as a memorial to their
            son, Leland Stanford Jr. The university is known for its academic
            excellence, innovative research, and entrepreneurial spirit.
            Stanford is consistently ranked among the top universities in the
            world and is a member of the Ivy League, a group of elite private
            universities in the United States. It has a strong emphasis on
            interdisciplinary studies, encouraging students to explore various
            fields of knowledge. The university offers undergraduate and
            graduate programs across a wide range of disciplines, including
            humanities, social sciences, natural sciences, engineering,
            business, law, medicine, and more. Stanford is particularly renowned
            for its programs in computer science, engineering, entrepreneurship,
            and business.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p>
            Stanford&apos;s campus is spread across 8,180 acres and features
            stunning architecture, including the Main Quad, which houses the
            university&apos;s administrative offices and several academic
            buildings. The campus also includes state-of-the-art research
            facilities, libraries, museums, and numerous recreational and sports
            facilities. Stanford has a vibrant and diverse community of students
            and faculty from all around the world. The university is committed
            to fostering an environment of intellectual curiosity,
            collaboration, and innovation. It has produced numerous Nobel
            laureates, Turing Award winners, and successful entrepreneurs who
            have made significant contributions to various fields. Overall,
            Stanford University is widely recognized as a leading institution
            for education and research, attracting talented individuals who
            aspire to excel in their chosen fields and make a positive impact on
            society.
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
