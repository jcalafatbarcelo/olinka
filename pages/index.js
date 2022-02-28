import Image from 'next/image'
import HeadLayout from '../components/HeadLayout'
import MenuLayout from '../components/MenuLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return ( 
    <>
      <HeadLayout title={"El Legado de Olinka - Life is Feudal"} descr={"Página oficial del Legado de Olinka: Life is Feudal - Servidor Español"}>

      </HeadLayout>
      <MenuLayout></MenuLayout>
      <div className={styles.container}>
      
        <main className={styles.main}>
          <div className='bg-header-olinka'>
            <h1 className={styles.title}>
              El Legado de Olinka
              <small>Life is Feudal</small>
            </h1>
          </div>

        </main>
      </div>
    </>
  )
}
