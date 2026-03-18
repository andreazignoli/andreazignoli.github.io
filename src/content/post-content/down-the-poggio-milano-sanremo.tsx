import { RouteViewer3D } from '@/components/viz/route-viewer-3d'

export default function Content() {
  return (
    <>
      <figure>
        <img src="/images/down_the_poggio_diorama.png" alt="Diorama of the Poggio descent at Milano-Sanremo" style={{ width: '100%' }} />
        <figcaption>AI-generated diorama of the Poggio descent at Milano-Sanremo</figcaption>
      </figure>

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

      <h2>Iconic descents to watch</h2>

      <p>
        Two descents in recent Milano-Sanremo history stand out as reference points — one for its audacity, the other
        for its sheer technical brilliance.
      </p>

      <h3>Nibali 2018 — the definitive attack</h3>

      <p>
        Vincenzo Nibali&apos;s solo attack on the descent of the Poggio in 2018 remains the most iconic moment in
        recent editions of the race. Approaching 90 km/h on a wet road, he opened a gap so large that no one could
        respond. He arrived at the Via Roma alone, arms in the air.
      </p>

      <p>
        The video below gives a first-hand perspective of what the Poggio descent looks like at race pace. Watch how
        Nibali occupies the full width of the road, uses the late apex on the key right-handers, and never once
        touches the brakes where others would. This is what it looks like to ride at the limit of traction.
      </p>

      <figure>
        <iframe
          width="100%"
          height="360"
          src="https://www.youtube.com/embed/9qWVGvr-x9Y"
          title="Vincenzo Nibali solo descent at Milano-Sanremo 2018"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: 8 }}
        />
        <figcaption>Vincenzo Nibali solo attacks on the Poggio descent — Milano-Sanremo 2018.</figcaption>
      </figure>

      <h3>Mohoric 2022 — the dropper post gambit</h3>

      <p>
        Matej Mohoric&apos;s 2022 victory introduced a detail that caused considerable debate: he descended the Poggio
        with his seat lowered using a{' '}<strong>dropper post</strong> — a mechanism borrowed from mountain biking
        that allows the rider to drop the saddle height on the fly. By lowering the saddle, Mohoric reduced his
        centre of mass height and shifted his body position rearward, increasing rear wheel traction and improving
        balance through the corners.
      </p>

      <p>
        From a vehicle dynamics perspective, this is a deliberate intervention on the{' '}
        <em>rider–bike coupling</em>: a lower centre of mass reduces the overturning moment during cornering and
        improves the bike&apos;s resistance to tipping at the traction limit. The trade-off is a different pedalling
        geometry and, once the saddle is dropped, the ability to sprint out of a corner is compromised — a calculated
        risk on a descent leading directly to a flat finish.
      </p>

      <figure>
        <iframe
          width="100%"
          height="360"
          src="https://www.youtube.com/embed/dMS4pFw21eI"
          title="Matej Mohoric dropper post descent at Milano-Sanremo 2022"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: 8 }}
        />
        <figcaption>
          Matej Mohoric uses a dropper post to lower his saddle and centre of mass on the Poggio descent —
          Milano-Sanremo 2022.
        </figcaption>
      </figure>

      <h2>Reading a descent through physics: the g-g diagram</h2>

      <p>
        To understand what separates a great descent from an average one, it helps to have a framework. In vehicle
        dynamics — originally developed for motorsport — the <strong>g-g diagram</strong> (also called the
        friction circle or adherence ellipse) is the standard tool.
      </p>

      <p>
        The idea is simple: a tyre can only generate a finite total force at the road contact patch. Braking demands
        longitudinal force; cornering demands lateral force. When you need both simultaneously — braking into a
        corner — the two forces compete for the same limited tyre capacity. Plot the longitudinal acceleration on one
        axis and the lateral acceleration on the other, normalised by gravity (in <em>g</em>), and every instant of
        riding maps to a point in this diagram. The boundary of the cloud of points traces the rider&apos;s{' '}
        <em>adherence ellipse</em> — how close they are pushing to the physical limit of the tyre.
      </p>

      <figure>
        <img src="/images/adherence_ellipse.png" alt="The g-g diagram / adherence ellipse" style={{ width: '70%' }} />
        <figcaption>
          The g-g diagram (adherence ellipse). Each point is one instant of riding. The outer envelope reflects how
          fully the rider exploits the available tyre–road friction.
        </figcaption>
      </figure>

      <p>
        In practice, two patterns emerge when comparing riders of different skill levels on the same corner. Less
        experienced riders show a characteristic <strong>cross (✝) shape</strong>: they brake hard first (high
        longitudinal deceleration, low lateral), then turn (high lateral, low longitudinal), treating the two phases
        as entirely separate. Expert riders show a <strong>butterfly (🦋) wing shape</strong>: they blend braking and
        cornering simultaneously, keeping the resultant acceleration vector near the boundary of the ellipse
        throughout. The butterfly rider is exploiting the friction budget more efficiently — the same tyre, used
        better.
      </p>

      <figure>
        <img src="/images/maneuvers_adherence_ellipse.png" alt="Cross vs butterfly shape in the gg diagram" style={{ width: '50%' }} />
        <figcaption>
          Cross (✝) vs butterfly (🦋) shape in the g-g diagram: a signature of cornering skill level.
        </figcaption>
      </figure>

      <p>
        Research on professional cyclists at a time trial with technical content showed that a{' '}
        <strong>10% larger cloud in the g-g diagram was associated with 20 positions gained</strong> in the final
        ranking — a remarkably large effect for a difference invisible to the naked eye on TV. Nibali&apos;s 2018
        Poggio descent would produce a very full ellipse. Mohoric&apos;s dropper post intervention in 2022 was, in
        effect, an attempt to push the outer boundary of that ellipse further — by modifying the physical system
        itself rather than just the riding technique.
      </p>

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
        <li>Quantifying the g-g ellipse of Nibali vs Mohoric from broadcast footage</li>
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
          <a href="/blog/eagles-sunflowers-cycling-trajectories">Eagles, sunflowers and cycling trajectories</a> — on
          clothoids, racing lines, and why nature and optimal riders tend to trace the same smooth curves.
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
        <li>
          Zignoli A. Assessing Trajectories and Bike Handling Abilities in Road Cycling with Global Positioning System
          Data. <em>Sensors</em>. 2025 Nov 14;25(22):6977.
        </li>
      </ol>
    </>
  )
}
