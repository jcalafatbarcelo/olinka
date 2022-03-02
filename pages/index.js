import Image from 'next/image'
import Link from 'next/link'
import CabeceraH1 from '../components/CabeceraH1'
import HeadLayout from '../components/HeadLayout'
import MenuLayout from '../components/MenuLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return ( 
    <>
      <HeadLayout title={"El Legado de Olinka - Life is Feudal"} descr={"Página oficial del Legado de Olinka: Life is Feudal - Servidor Español"}>

      </HeadLayout>
      <MenuLayout></MenuLayout>
      <div>
          <main>
              <CabeceraH1 clase={`bg-header-olinka`} titulo={`El Legado de Olinka`} subtitulo={`Life is Feudal`}></CabeceraH1>
          
          <div className="center_block clear_up">
            <h2>Rol</h2>
            <p>Uno de los aspectos más interesantes del Life is Feudal: Your Own, es la interacción y la colaboración entre usuarios. Por ello, los dioses de Olinka premiaran con 5 monedas de plata semanales a todos los clanes que se especialicen. ¿Qué significa? Que se bonificará a aquellos clanes que NO SEAN autosuficientes y requieran de la ayuda de otros clanes para poder progresar en el juego.</p>
            <p>Habrá 2 tipos de especializaciones:<br />
              - <strong>Artesanos</strong>: Aquellos que sólo se subirán las subramas de Artesania.<br />
              - <strong>Productores</strong>: Aquellos que sólo se subirán las ramas de Nauture Lore y Hunting.
            </p>
            <h3>Excepciones:</h3>
            <p> - No se tendrá en cuenta que se suban Artisan y Nature&apos;s Lore (las principales).<br />
              - No se tendrá en cuenta que se suban la rama de construcción (por la dependencia de esta rama para construir los edificios esenciales).
            </p>
            <h3>💰 Bonus 💰</h3>
            <p> - En caso de disponer de la espada a un nivel superior al 1 se aplicarán los siguientes bonus en la recompensa:<br />
              *Tier 2: 10 monedas de plata.<br />
              *Tier 3: 20 monedas de plata.<br />
              *Tier 4: 50 monedas de plata.
            </p>
            <p>⚠️ Importante⚠️ Aquellos clanes en los que algún miembro tenga 30 o más puntos invertidos en una subrama que no forme parte de la especialización del Clan, no recibirán la bonificación.</p>
            <p>Estas bonificaciones se implementarán a partir del 1 de enero del año 1051 (según el calendario de la isla de Olinka).</p>
          </div>
          
          <div className="center_block clear_up">
            <h2>🗡️ PVP 🗡️</h2>
            <p>Con tal de ofrecer una combinación y un equilibrio PVP/PVE se va a dividir el territorio en dos grandes reinos, y estos se dividirán en condados.</p>
            <p>Los clanes que se instalen en un Condado podrán reclamarlo como suyo e imponer sus normas dentro de él. Para reclamar un Condado, es necesario tener al menos la espada a nivel 2.</p>
            <p>En caso de querer disputar la titularidad del Condado, los candidatos deberán ganarse el apoyo del resto de condados de su mismo reino para ser reconocidos como Señores del Condado. Estos apoyos se podrán logar vía diplomática, bélica o con sobornos (si el Reino tiene Rey, en caso de empate su voto valdrá doble).</p>
            <p>Para convertirse en Rey de todo un reino (Este u Oeste) es necesario disponer de una fortaleza (entiéndase fortaleza por una muralla que encierre todo el poblado, lo que se entiende por `tener la base cerrada`), una espada de nivel 3 y el favor de más de la mitad de los Condados reclamados (para poder llevar a cabo al reclamación es necesario que haya al menos 3 condados reclamados en el Reino). Al igual que para disputar un Condado, los apoyos podrán logarse vía diplomática, bélica o con sobornos.</p>
            <p>Ambos Reinos estarán en constante guerra, lo que no impide el comercio entre poblados de distintos reinos (aunque quedar feo y el Rey podría tomar represalias si desease).</p>
            <p>Cualquier ataque a miembros de otro reino deberá ir precedido de algo de rol. No obstante, no se tolerará el abuso de los ataques en terreno enemigo, o dicho de otro modo, no se puede ir a casa de otro a trolearlo y matarlo constantemente por el placer de atacar al reino enemigo. No obstante, si se detectan jugadores de otros condados en el tuyo o en el de un aliado, no se tendrá en cuenta lo anteriormente mencionado.</p>
            <h3>⚔️ Batallas ⚔️</h3>
            <p>Cuando ambos reinos tengan Rey, se activarán las `Batallas de Prestigio`. Las batallas consistirán en un asalto a la fortaleza de uno de los Reyes, pero como en cada batalla, las guerras tienen un coste, el equipo atacante, deberá pagar por cada soldado que lleve a la guerra 2 monedas de plata por cada hora (real) que quiera prolongar la batalla. Además, marcharán a la batalla con, al menos, 1 carro a caballo para la munición y los recursos necesarios para la guerra: armaduras, comida, pociones, vendas... (incluidos los costes económicos). Y el equipo defensor deberá tener un cofre (junto a la espada) con 3 monedas de plata por cada soldado defensor (indistintamente de la duración de la batalla).</p>
            <h4>🗡️ Victoria Atacante:</h4>
            <p>En caso de lograr abrir una brecha en el castillo, y poder capturar/matar al Rey del Reino defensor (en caso de no estar conectado, se asignará el rango de Capitán de la guardia real a uno de los soldados participantes en la defensa, siendo su muerte/rendición equivalente a la del Rey para conceder la victoria). Si el Rey escapa del castillo una vez abierta la brecha en su muralla se considerará rendición. El equipo asaltante se considerará vencedor y obtendrá todo el dinero recaudado en los costes de guerra (el suyo y el del enemigo) y todo lo que puedan saquear (en 15 minutos). Además, durante la siguiente semana el defensor deberá pagar 50 monedas de plata como compensación por perder la guerra. En caso de no poder pagar, podrá negociar con el Rey atacante para realizar el pago en forma de tributos/productos. Será el Rey vencedor que distribuirá como considere oportuno entre los participantes el botín obtenido.</p>
            <h4>🛡️ Victoria Defensora:</h4>
            <p>Si el equipo atacante no logra abrir una brecha en la muralla y eliminar al Rey dentro del tiempo asignado, deberán abandonar el carro con el que atacaron (no se puede destruir), además del dinero recaudado para pagar los costes de la guerra. Además, deberá compensar con 20 monedas de plata al Rey defensor como indemnización por los daños causados. Al igual que en el caso de la victoria atacante, en caso de no disponer del dinero, se podrá compensar con productos.</p>

          </div>
          <hr />
          <div className="center_block clear_up">
            <h2>Discord Oficial</h2>
            <p>Kitsune Project: #LIF:YO - EL LEGADO DE OLINKA<br />
              <Link href={`https://discord.gg/3Av98j3AMU`}><a className={`btn`} target="_blank">https://discord.gg/3Av98j3AMU</a></Link></p>
            <h2>LiveMap</h2>
            <p><Link href={`https://livemap.feudal.tools/?livemap_id=9088`}><a target="_blank">https://livemap.feudal.tools/?livemap_id=9088</a></Link></p>

          </div>
        </main>
      </div>
    </>
  )
}
