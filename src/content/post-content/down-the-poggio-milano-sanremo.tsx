import { RouteViewer3D } from '@/components/viz/route-viewer-3d'

export default function Content() {
  return (
    <>
      <figure>
        <img src="/images/down_the_poggio_diorama.png" alt="Diorama of the Poggio descent at Milano-Sanremo" style={{ width: '100%' }} />
        <figcaption>Generated with Google Nano Banana 2</figcaption>
      </figure>

      <p><em>This post is a placeholder — full content coming soon.</em></p>

      <h2>The descent from the Poggio</h2>

      <p>
        The <strong>Poggio di San Remo</strong> is the defining climb of{' '}
        <a href="https://www.milanosanremo.it/percorso-milano-sanremo-2026/" target="_blank" rel="noopener noreferrer">
          Milano-Sanremo
        </a>
        , the longest one-day Classic on the professional cycling calendar. At roughly 294 km, <em>La Classicissima</em>{' '}
        is a race of patience that explodes in the final kilometres. The Poggio rises just 162 m over 3.7 km at an
        average gradient of 3.7%, but its position — with less than 6 km to the finish — makes the descent that follows
        one of the most consequential in all of cycling.
      </p>

      <figure className="quote">
        <blockquote>
          The Poggio descent is where races are won and lost. It is not the steepest nor the longest, but it is the
          fastest and the most consequential.
        </blockquote>
      </figure>

      <h2>Why the Poggio descent matters</h2>

      <p>
        The descent from the Poggio is roughly 3.5 km of technical, high-speed road threading through the outskirts of
        San Remo. Unlike alpine descents where gaps can be managed, here the proximity of the finish line means that
        every second lost is unrecoverable. Riders must negotiate several key corners at speeds exceeding 80 km/h,
        often in a compact group after 290 km of racing.
      </p>

      <p>
        The combination of fatigue, tight corners, narrow roads, and racing urgency makes this descent a unique study
        in applied bike handling. A rider who can carry more speed through the technical sections — exploiting the gg
        diagram more fully, in vehicle dynamics terms — can arrive at the Via Roma sprint with a decisive advantage, or
        simply stay in contention when others hesitate.
      </p>

      <h2>What makes this descent unique</h2>

      <ul>
        <li><strong>Short and decisive:</strong> little room to recover from a mistake</li>
        <li>
          <strong>High-speed corners:</strong> several right-hand bends that reward the late apex approach but punish
          over-commitment
        </li>
        <li>
          <strong>Group dynamics:</strong> riders rarely descend alone; pack positioning and anticipation of
          others&apos; lines add a layer of complexity absent in time trials
        </li>
        <li>
          <strong>Road surface:</strong> the Ligurian roads have characteristic asphalt conditions that can vary
          significantly between dry and wet editions
        </li>
      </ul>

      <h2>Interactive 3D simulation of the optimal descent</h2>

      <p>
        The visualisation below shows the result of an optimal control simulation of the Poggio descent. A
        biomechanical rider model is pushed through the route geometry at the limit of traction, producing a
        physically consistent trajectory, speed profile, and power demand at every point of the 3.5 km descent.
      </p>

      <p>
        The <strong>red trail</strong> behind the bike marks where it has already been — fading out as it recedes in
        time — while the <strong>black line</strong> ahead shows the next 100 metres of predicted path. On the top
        left, the <strong>g-g diagram</strong> tracks the instantaneous combination of lateral and longitudinal
        acceleration normalised by gravity: a signature of how close the rider is to the traction limit at any given
        moment. On the top right, a <strong>minimap</strong> gives a bird&apos;s-eye overview of position along the
        full descent.
      </p>

      <p>
        Use the <strong>Route cursor</strong> slider at the bottom to scrub through the descent. Toggle{' '}
        <strong>Speed</strong> or <strong>Power</strong> to colour the bars rising from the trajectory: blue bars show
        propulsive effort, red bars show braking. The bike model rotates and leans with the simulated roll angle at
        each instant. Drag to orbit, scroll to zoom, right-click to pan.
      </p>

      <RouteViewer3D dataUrl="/data/output.json" />

      <h2>Topics to explore in future editions of this post</h2>

      <ul>
        <li>Analysis of GPS and acceleration data from the Poggio descent</li>
        <li>Comparison of cornering strategies across different editions of the race</li>
        <li>The role of equipment (disc brakes, tyre selection) in descent confidence</li>
        <li>Simulation of optimal trajectories on the key corners</li>
      </ul>

      <hr />

      <h2>Further reading</h2>

      <h3>Related posts on this blog</h3>

      <ul>
        <li>
          <a href="/blog/bike-handling-road-cycling">Notes on bike handling in road cycling</a> — an introduction to
          the gg diagram, racing lines, and what bike handling really means from a vehicle dynamics perspective.
        </li>
        <li>
          <a href="/blog/risk-rewards-cycling-descents">Risk and rewards in road cycling fast descents</a> — a look at
          the trade-offs riders face when pushing the limits on descents.
        </li>
      </ul>

      <h3>Scientific references</h3>

      <ol>
        <li>
          Zignoli A, Biral F. Prediction of pacing and cornering strategies during cycling individual time trials with
          optimal control. <em>Sports Engineering</em>. 2020 Dec;23(1):13.
        </li>
        <li>
          Zignoli A. Influence of corners and road conditions on cycling individual time trial performance and
          &lsquo;optimal&rsquo; pacing strategy: a simulation study. <em>Proceedings of the Institution of Mechanical
          Engineers, Part P: Journal of Sports Engineering and Technology</em>. 2021 Sep;235(3):227–36.
        </li>
        <li>
          Zignoli A, Biral F, Fornasiero A, Sanders D, Erp TV, Mateo-March M, Fontana FY, Artuso P, Menaspà P, Quod
          M, Giorgi A. Assessment of bike handling during cycling individual time trials with a novel analytical
          technique adapted from motorcycle racing. <em>European Journal of Sport Science</em>. 2022 Sep
          2;22(9):1355–63.
        </li>
        <li>
          Zignoli A. An intelligent curve warning system for road cycling races. <em>Sports Engineering</em>. 2021
          Dec;24(1):19.
        </li>
        <li>
          Zignoli A, Fruet D. Insights in road cycling downhill performance using aerial drone footages and an
          &lsquo;optimal&rsquo; reference trajectory. <em>Sports Engineering</em>. 2022 Dec;25(1):23.
        </li>
      </ol>
    </>
  )
}
