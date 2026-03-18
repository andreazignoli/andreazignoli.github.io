import { RouteViewer3D } from '@/components/viz/route-viewer-3d'

export default function Content() {
  return (
    <>
      {/* ── 1. PRESENT THE DESCENT ──────────────────────────────────────── */}

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
        , the longest one-day Classic on the professional cycling calendar. At roughly 294 km,{' '}
        <em>La Classicissima</em> is a race of patience that explodes in the final kilometres. The Poggio rises
        just 162 m over 3.7 km at an average gradient of 3.7%, but its position — with less than 6 km to the finish
        — makes the descent that follows one of the most consequential in all of cycling.
      </p>

      <p>
        The descent from the Poggio is roughly 3.5 km of technical, high-speed road threading through the outskirts
        of San Remo. Unlike alpine descents where gaps can be managed, here the proximity of the finish line means
        that every second lost is unrecoverable. Riders must negotiate several key corners at speeds exceeding 80 km/h,
        often in a compact group after 290 km of racing. The combination of fatigue, tight corners, narrow roads, and
        racing urgency makes this one of the most studied sections in professional cycling.
      </p>

      <figure className="quote">
        <blockquote>
          The Poggio descent is where races are won and lost. It is not the steepest nor the longest, but it is the
          fastest and the most consequential.
        </blockquote>
      </figure>

      {/* ── 2. SPARK CURIOSITY: 3D SIMULATION ───────────────────────────── */}

      <h2>An optimal descent — in three dimensions</h2>

      <p>
        What would the Poggio descent look like if ridden at the physical limit of traction, from start to finish?
        The interactive simulation below answers exactly that question. A biomechanical rider model is solved with
        optimal control through the full route geometry, producing a physically consistent trajectory, speed profile,
        and power demand at every point of the 3.5 km descent.
      </p>

      <p>
        The <strong>red trail</strong> behind the bike marks where it has already been — fading out as it recedes in
        time — while the <strong>black line</strong> ahead shows the next section of predicted path. On the top left,
        the <strong>g-g diagram</strong> tracks the instantaneous combination of lateral and longitudinal acceleration
        normalised by gravity. On the top right, a <strong>minimap</strong> gives a bird&apos;s-eye overview of
        position along the full descent. Use the <strong>Route cursor</strong> slider to scrub; toggle{' '}
        <strong>Speed</strong> or <strong>Power</strong> to colour the trajectory bars. Drag to orbit, scroll to zoom.
      </p>

      <RouteViewer3D dataUrl="/data/output.json" />

      {/* ── 3. WHY CAN WE PREDICT TRAJECTORIES? ─────────────────────────── */}

      <h2>Why can physics predict where riders go?</h2>

      <p>
        One of the most striking results in this line of research is how well a physically constrained model can
        anticipate the line a rider will actually follow — without any prior knowledge of that rider&apos;s
        individual style or strategy. The reason lies in something fundamental about how humans move.
      </p>

      <figure>
        <img
          src="/images/front_blog_trajectories.png"
          alt="Trajectories in nature: an eagle, sunflower seeds, and cyclists cornering at Milano-Sanremo"
          style={{ width: '100%' }}
        />
        <figcaption>
          An eagle pursuing prey, the seeds of a sunflower, and a group of cyclists cornering at the 2024
          Milano-Sanremo all follow remarkably similar mathematical structures — smooth, curvature-continuous curves.
          Read more in{' '}
          <a href="/blog/eagles-sunflowers-cycling-trajectories">Eagles, sunflowers and cycling trajectories</a>.
        </figcaption>
      </figure>

      <p>
        Nature — and human movement within it — tends toward smooth, continuous transitions. Experienced riders trace{' '}
        <em>clothoid-like</em> arcs through corners: curves where curvature increases gradually with distance,
        minimising lateral jerk and keeping the bike near the limit of traction without abrupt changes in force. This
        is not a conscious geometric choice; it emerges from the same optimisation that governs an eagle&apos;s
        pursuit trajectory or the spiral of a sunflower. As explored in{' '}
        <a href="/blog/eagles-sunflowers-cycling-trajectories">Eagles, sunflowers and cycling trajectories</a>, the
        evidence points more strongly toward <em>jerk minimisation</em> than toward pure time minimisation as the
        underlying objective — smooth transitions are intrinsically preferred by the neuromuscular system.
      </p>

      <p>
        The consequence is that a physical model — given only the road geometry and traction constraints — converges
        on the same trajectory that riders empirically tend to follow. Theory and practice agree, not by coincidence,
        but because both are solutions to the same underlying problem.
      </p>

      <h3>Predicted vs observed: two examples</h3>

      <p>
        The comparisons below come from different races. Both show the same phenomenon: the physically predicted
        reference and the observed GPS trajectory coincide to a degree that would be impossible if riders were making
        unconstrained, arbitrary choices. Road geometry and traction physics do most of the work.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <figure style={{ flex: '1 1 45%', margin: 0 }}>
          <img
            src="/images/trajectory_comparison_1.png"
            alt="Predicted vs observed trajectory — example 1"
            style={{ width: '100%' }}
          />
          <figcaption>
            Example 1: predicted reference vs observed trajectory through a corner. The agreement
            suggests the road geometry and traction constraints largely determine where riders go.
          </figcaption>
        </figure>
        <figure style={{ flex: '1 1 45%', margin: 0 }}>
          <img
            src="/images/trajectory_comparison_2.png"
            alt="Predicted vs observed trajectory — example 2"
            style={{ width: '100%' }}
          />
          <figcaption>
            Example 2: a different corner, same result. The physical model anticipates the rider&apos;s
            line from the road geometry alone.
          </figcaption>
        </figure>
      </div>

      {/* ── 4. THE G-G DIAGRAM ───────────────────────────────────────────── */}

      <h2>Reading a descent through physics: the g-g diagram</h2>

      <p>
        To understand what separates a great descent from an average one, it helps to have a framework. In vehicle
        dynamics — originally developed for motorsport — the <strong>g-g diagram</strong> (also called the friction
        circle or adherence ellipse) is the standard tool.
      </p>

      <p>
        The idea is simple: a tyre can only generate a finite total force at the road contact patch. Braking demands
        longitudinal force; cornering demands lateral force. When you need both simultaneously — braking into a
        corner — the two forces compete for the same limited tyre capacity. Plot the longitudinal acceleration on one
        axis and the lateral acceleration on the other, normalised by gravity (in <em>g</em>), and every instant of
        riding maps to a point in this diagram. The boundary of the cloud of points traces the rider&apos;s{' '}
        <em>adherence ellipse</em> — how close they are to the physical limit of the tyre at every moment.
      </p>

      <figure>
        <img src="/images/adherence_ellipse.png" alt="The g-g diagram / adherence ellipse" style={{ width: '70%' }} />
        <figcaption>
          The g-g diagram (adherence ellipse). Each point is one instant of riding. The outer envelope reflects
          how fully the rider exploits the available tyre–road friction.
        </figcaption>
      </figure>

      <p>
        Using a wind-rose analogy: <em>East</em> and <em>West</em> represent high lateral accelerations, typical
        of fast cornering. <em>North</em> is strong positive longitudinal acceleration — a sprint or a sudden drop
        in gradient. <em>South</em> is hard braking. A rider who explores all four directions simultaneously is
        one who blends braking and cornering fluidly, keeping the resultant force near the outer boundary of the
        ellipse throughout.
      </p>

      <h3>Two strategies, two signatures</h3>

      <p>
        In practice, two distinct patterns emerge when comparing riders of different skill levels through the same
        corner. Less experienced riders show a characteristic <strong>cross (✝) shape</strong>: brake hard first
        (high longitudinal deceleration, low lateral), then turn (high lateral, low longitudinal) — two sequential
        phases with a dead zone in between. Expert riders show a <strong>butterfly (🦋) wing shape</strong>: they
        blend braking and cornering simultaneously, keeping the resultant acceleration vector near the boundary of
        the ellipse throughout. The butterfly rider is exploiting the friction budget more efficiently — the same
        tyre, used better.
      </p>

      <figure>
        <img src="/images/maneuvers_adherence_ellipse.png" alt="Cross vs butterfly shape in the gg diagram" style={{ width: '50%' }} />
        <figcaption>
          Cross (✝) vs butterfly (🦋) shape in the g-g diagram: a clear signature of cornering skill level.
        </figcaption>
      </figure>

      <p>
        Research on professional cyclists at an individual time trial with technical content showed that a{' '}
        <strong>10% larger cloud in the g-g diagram was associated with 20 positions gained</strong> in the final
        ranking — a large effect for a difference invisible to the naked eye on TV. A 10% improvement in bike
        handling ability was estimated to translate to roughly 13 seconds gained over a 5 km technical section.
      </p>

      <p>
        In the live g-g diagram in the simulation above, you can watch this unfold in real time: notice how the
        active point swings from the braking region into the lateral region as the bike enters each corner, and
        how deep into the ellipse the optimal solution pushes at the apex. That is the adherence budget being
        spent — nothing held in reserve.
      </p>

      {/* ── 5. BONUS: ICONIC DESCENTS ────────────────────────────────────── */}

      <h2>Bonus: iconic descents to watch</h2>

      <p>
        If you want to see what the physics of the Poggio descent looks like from the saddle, the two videos below
        are essential viewing. They are not our content — but they are the best way to get a feel for the speeds,
        the road width, and what it means to ride at the limit on this particular descent.
      </p>

      <h3>Nibali 2018 — the definitive attack</h3>

      <p>
        Vincenzo Nibali&apos;s solo attack on the Poggio descent in 2018 remains the most iconic moment in recent
        editions of the race. Approaching 90 km/h on a wet road, he opened a gap so large that no one could respond.
        Watch how he occupies the full width of the road, uses the late apex on the key right-handers, and never
        once touches the brakes where others would. This is what the butterfly pattern looks like from the outside.
      </p>

      <figure>
        <iframe
          width="100%"
          height="360"
          src="https://www.youtube.com/embed/9qWVGvr-x9Y"
          title="Vincenzo Nibali solo descent at Milano-Sanremo 2018"
          style={{ borderRadius: 8, border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <figcaption>Vincenzo Nibali solo attacks on the Poggio descent — Milano-Sanremo 2018.</figcaption>
      </figure>

      <h3>Mohoric 2022 — the dropper post gambit</h3>

      <p>
        Matej Mohoric&apos;s 2022 victory introduced a detail that caused considerable debate: he descended the
        Poggio with his seat lowered using a <strong>dropper post</strong> — a mechanism borrowed from mountain
        biking that allows the rider to drop the saddle height on the fly. By lowering the saddle, Mohoric reduced
        his centre of mass height and shifted his body position rearward, increasing rear wheel traction and
        improving balance through the corners.
      </p>

      <p>
        From a vehicle dynamics perspective, this is a deliberate intervention on the <em>rider–bike coupling</em>:
        a lower centre of mass reduces the overturning moment during cornering and improves the bike&apos;s
        resistance to tipping at the traction limit — effectively pushing the outer boundary of the adherence
        ellipse further outward. The trade-off is a different pedalling geometry and a compromised ability to sprint
        out of corners: a calculated risk on a descent that leads directly to a flat finish.
      </p>

      <figure>
        <iframe
          width="100%"
          height="360"
          src="https://www.youtube.com/embed/dMS4pFw21eI"
          title="Matej Mohoric dropper post descent at Milano-Sanremo 2022"
          style={{ borderRadius: 8, border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <figcaption>
          Matej Mohoric uses a dropper post to lower his saddle and centre of mass on the Poggio descent —
          Milano-Sanremo 2022.
        </figcaption>
      </figure>

      {/* ── 6. CLOSE THE STORY ───────────────────────────────────────────── */}

      <h2>Closing thoughts</h2>

      <p>
        The Poggio descent compresses everything that makes cycling descending fascinating into 3.5 km and roughly
        90 seconds of riding. It is short enough that every corner matters, fast enough that physics dominates over
        strategy, and consequential enough that careers are defined on it.
      </p>

      <p>
        What optimal control simulation reveals — and what the real trajectory comparisons confirm — is that the
        room for truly individual choice is narrower than it appears. The road geometry, traction constraints, and
        the neuromuscular preference for smooth, jerk-minimising motion conspire to funnel riders toward the same
        line. What separates Nibali from the peloton, or Mohoric from the chasers, is not a radically different
        trajectory: it is the willingness and ability to ride closer to the outer boundary of the adherence ellipse,
        for longer, and with greater consistency.
      </p>

      <p>
        The simulation above makes that boundary visible. The g-g diagram in the top-left corner shows you, at every
        instant, how much of the available friction is being spent — and how little is being left in reserve.
      </p>

      {/* ── 7. FURTHER READING + REFERENCES ─────────────────────────────── */}

      <hr />

      <h2>Further reading</h2>

      <h3>Related posts on this blog</h3>

      <ul>
        <li>
          <a href="/blog/bike-handling-road-cycling">Notes on bike handling in road cycling</a> — an introduction to
          the g-g diagram, racing lines, and what bike handling really means from a vehicle dynamics perspective.
        </li>
        <li>
          <a href="/blog/eagles-sunflowers-cycling-trajectories">Eagles, sunflowers and cycling trajectories</a> — on
          clothoids, jerk minimisation, and why nature and optimal riders tend to trace the same smooth curves.
        </li>
      </ul>

      <h3>Scientific references</h3>

      <ol>
        <li>
          Zignoli A, Biral F. Prediction of pacing and cornering strategies during cycling individual time trials
          with optimal control. <em>Sports Engineering</em>. 2020 Dec;23(1):13.
        </li>
        <li>
          Zignoli A. Influence of corners and road conditions on cycling individual time trial performance and
          &lsquo;optimal&rsquo; pacing strategy: a simulation study.{' '}
          <em>Proceedings of the Institution of Mechanical Engineers, Part P: Journal of Sports Engineering and
          Technology</em>. 2021 Sep;235(3):227–36.
        </li>
        <li>
          Zignoli A, Biral F, Fornasiero A, Sanders D, Erp TV, Mateo-March M, Fontana FY, Artuso P, Menaspà P,
          Quod M, Giorgi A. Assessment of bike handling during cycling individual time trials with a novel
          analytical technique adapted from motorcycle racing. <em>European Journal of Sport Science</em>.
          2022 Sep 2;22(9):1355–63.
        </li>
        <li>
          Zignoli A. An intelligent curve warning system for road cycling races. <em>Sports Engineering</em>.
          2021 Dec;24(1):19.
        </li>
        <li>
          Zignoli A, Fruet D. Insights in road cycling downhill performance using aerial drone footages and an
          &lsquo;optimal&rsquo; reference trajectory. <em>Sports Engineering</em>. 2022 Dec;25(1):23.
        </li>
        <li>
          Zignoli A. Assessing Trajectories and Bike Handling Abilities in Road Cycling with Global Positioning
          System Data. <em>Sensors</em>. 2025 Nov 14;25(22):6977.
        </li>
      </ol>
    </>
  )
}
