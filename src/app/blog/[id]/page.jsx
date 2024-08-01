import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 10 }
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc
  }
}

const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            <Image
              src="https://scontent.fsgn20-1.fna.fbcdn.net/v/t39.30808-6/354051436_2347288152116510_8215965569067699495_n.jpg?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KBrbYId4o-UAX8mvnej&_nc_oc=AQnVeai00UAOfTlVc_4ML97qrfNKuLJlSoELMjsogTB1bpM84QykzC88XCWB3XTS5e0&_nc_ht=scontent.fsgn20-1.fna&oh=00_AfBONrhoDGBh273c6uOfZBBhHaXEUJUcYUf2nH-pC776Ig&oe=649F2A62"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Tu Dinh</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="https://library.stanford.edu/sites/default/files/blog/image/img_0042.jpg" alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Open later on Fridays We extended our Friday closing hours at Green
          Library from 5pm to 7pm. These hours will continue all summer long and
          through next year! New summer hours Summer hours were expanded, and we
          now have a comsistent schedule for Green Library during both Summer
          Quarter and Summer Intersession periods! These summer hours are in
          effect June 19 to September 25, 2023: Monday to Thursday 8a-9p Friday
          8a-7p Saturday 10a-6p Sunday 12p-9p Hours by day are available here.
          Note: Sunday June 18th (Commencement) we will be closed. The Green
          Reference staff will also keep a steady Monday to Friday 10a-5p
          service desk schedule all summer long, refraining from curtailing
          hours during the six weeks of intersession as done in past years.
          These hours are an overall improvement for users, staff and building
          management. Monumental thanks go to the numerous library staff who
          were flexible with their work schedules so we could expand and
          simplify our building schedule this quarter and summer. Posted in
          Stanford Libraries Blog by Rebecca Ione Pernell Topics: Fun facts May
          15, 2023
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
