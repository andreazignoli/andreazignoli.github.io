export default function Content() {
  return (
    <>
      <figure>
        <img src="/images/front_cover_blog_4.jpg" alt="Road cycling downhill" style={{ width: '100%' }} />
        <figcaption>Photo by <a href="https://unsplash.com/@jackdelulio" target="_blank" rel="noopener noreferrer">Jack Delulio</a> on Unsplash</figcaption>
      </figure>

      <h1><em>Bike handling</em>: what is it and why should anyone care?</h1>

      <p>
        I think that <em>bike handling</em> in road cycling is a challenging and fascinating research topic. Practitioners often talk about it, and there are interesting discussions on scientific papers and cycling blogs. However, I noticed that there can be at least two points of view, and mixing them up is not going to help:
      </p>

      <ul>
        <li>🚴 <strong>Sport science point of view:</strong> bike handling is synonym for <em>technical skills</em>, which translates in the ability of one-hand riding, effective and considerate obstacle avoidance, stoppie-wheelie tricks, navigating the pack, etc.</li>
        <li>🚲 <strong>Vehicle dynamics point of view:</strong> bike handling has more to do with the performance of the bike-rider coupling, i.e.: the ability that the riders have to consciously explore the limits of their bike.</li>
      </ul>

      <p>
        The first point of view quickly translates in a safe ride, but it&apos;s hard to find the association with cycling performance. For some, <em>bike handling</em> is about <em>dealing with the unexpected</em>, but for me it&apos;s more about <em>knowing very well what to expect</em>. Hence, I support the second point of view, and I prefer not to mix <em>bike handling</em> with <em>technical skills</em>.
      </p>

      <p>The possible reasons why <em>bike handling</em> is poorly studied might be:</p>
      <ul>
        <li>It is not perceived as important as other physiological attributes</li>
        <li>It is difficult to assess due to logistic and safety reasons</li>
      </ul>

      <h2>High-speeds = high-stakes</h2>

      <figure className="quote">
        <blockquote>
          I am never scared when I descend. I feel like the master of the universe, even if it&apos;s my mind playing tricks, because danger is all around.
        </blockquote>
        <figcaption>&mdash; Romain Bardet for Rouleur, November 2020</figcaption>
      </figure>

      <p>
        As it often happens, the best riders can stand out from the group because their uncommon abilities. However, displaying uncommon <em>bike handling</em> abilities can be very dangerous. The limits of the bike-rider performance are dictated by physics, which places rigid constraints to the kind of accelerations (and decelerations) that the bike can sustain. High speeds are not dangerous <em>per se</em>, but because they can result in unsustainable accelerations.
      </p>

      <p>
        Both braking and cornering require different coordinated actions: pulling the brake levers, steering, and changing body position to lean into the corner. While braking can lead to strong longitudinal decelerations, cornering can lead to strong lateral accelerations. Forces needed to complete these actions are generated at the tire-road interface, and therefore depend upon the tire-road friction: the higher the friction, the higher the forces that the tires can sustain.
      </p>

      <p>
        It&apos;s easy to experience high-speeds while going downhill. In the next figure, the sequence of actions required during corner negotiation are represented for a generic downhill high-speed corner. As you can see, a change in the body position is required to use the body as an air brake, and then to negotiate the corner.
      </p>

      <figure>
        <img src="/images/sequence.png" alt="Sequence of actions while negotiating a high-speed corner" style={{ width: '50%' }} />
        <figcaption>Sequence of actions while negotiating a high-speed corner in road cycling.</figcaption>
      </figure>

      <h2><em>Bike handling</em> and racing lines</h2>

      <p>
        The trajectories that riders follow while they negotiate a corner are often called <em>racing lines</em> (a term inherited from motor sports). We can broadly classify two cornering strategies, which lead to different trajectories. Before getting to them, we need to define an important term: the <em>apex</em>. In the following picture you can see that the <em>geometric apex</em> is the point where the path has the minimum cornering radius.
      </p>

      <figure>
        <img src="/images/apex.png" alt="The geometric apex" style={{ width: '50%' }} />
        <figcaption>The geometric apex.</figcaption>
      </figure>

      <p>
        But we can also detect an <em>apex</em> on the racing line, which is usually defined as: &lsquo;the point on the inside portion of a corner that a rider passes closest to&rsquo;. A trajectory apex can be defined as being an earlier apex or later apex with reference to the <em>geometric apex</em>, and they are presented in the following figure.
      </p>

      <figure>
        <img src="/images/early_vs_late.png" alt="Early VS late apex" style={{ width: '50%' }} />
        <figcaption>Early VS late apex.</figcaption>
      </figure>

      <ul>
        <li><strong>Late apex:</strong> The &lsquo;late apex&rsquo; strategy is typically characterized by a hard braking action somehow separated from a following cornering action. The resulting <em>racing line</em> ensures a good line of sight and enough space for braking in emergency. These trajectories are usually characterized by low entry speeds and fast exit speeds.</li>
        <li><strong>Early apex:</strong> The &lsquo;early apex&rsquo; strategy usually means less margin for error, as there is a very narrow line of sight and not a lot of space for adjusting the speed. A great advantage of this strategy is that, compared to the &lsquo;late apex&rsquo;, you can keep higher average speeds and you reduce the total travelled distance.</li>
      </ul>

      <h3>Is there an &lsquo;optimal&rsquo; strategy?</h3>

      <p>
        This is the million dollar question. Albeit, by definition, there will always be an &lsquo;optimal&rsquo; strategy (i.e., the one that can lead to the best time performance), there is no evidence that can support a single strategy consistently across every possible condition. In short, we can say that the &lsquo;optimal&rsquo; strategy is individual and highly dependent on the race and environmental conditions.
      </p>

      <ul>
        <li>🧑‍🤝‍🧑 <strong>Individuality:</strong> the &lsquo;optimal&rsquo; strategy depends on the individual&apos;s engine. A good sprinter with a lot of power available might prefer a &lsquo;late apex&rsquo; strategy, because he/she can start delivering the power sooner.</li>
        <li>☔ <strong>Environmental conditions:</strong> Road conditions (especially the tire-road friction coefficient) are a major factor. Rain is a game changer. Air resistance and slope also matter greatly.</li>
        <li>🔋 <strong>Race conditions:</strong> Energy preservation strategies, what comes next on the course, and road width all affect the choice of racing line. Corners are often used by riders to briefly recover and get ready for the next demanding section.</li>
      </ul>

      <h2>Evaluating <em>bike handling</em></h2>

      <h3>The gg diagram</h3>

      <p>
        The gg diagram is widely used in motor racing to depict the accelerations of a vehicle in the road plane. On the x-axis, lateral accelerations are reported. On the y-axis, longitudinal accelerations are reported. These accelerations are the highest during strong sprint efforts, rapid changes in road slope and hard braking.
      </p>

      <figure>
        <img src="/images/adherence_ellipse.png" alt="The gg diagram" style={{ width: '70%' }} />
        <figcaption>The gg diagram.</figcaption>
      </figure>

      <h3>How to read the gg diagram</h3>

      <p>
        🧭 Using a wind rose to better explain how to read the diagram: <em>East</em> and <em>West</em> represent high lateral accelerations, typically high during high-speed corners. At <em>North</em>, we have strong accelerations, typically high when there is a sudden decrease in road slope or there is a strong sprinting action going on. At <em>South</em>, we have large decelerations, hence index of rapid increase in road slope or hard braking actions.
      </p>

      <p>
        I provide an interesting comparison between bikes (bicycles) (red line), 125 cc motorcycles (blue line) and 1000 cc Super Bikes (yellow line). The motorcycling data has been kindly provided by Prof. F. Biral and they have been collected on the <a href="https://en.wikipedia.org/wiki/Mugello_Circuit" target="_blank" rel="noopener noreferrer">Mugello</a> circuit during testing sessions. Cycling data has been provided by a professional cyclist at the Giro d&apos;Italia 2020.
      </p>

      <figure>
        <img src="/images/gg_plot.png" alt="gg diagram comparison" style={{ width: '60%' }} />
        <figcaption>How an actual gg diagram looks like: 1000 cc bikes VS 125 cc bikes VS cyclist.</figcaption>
      </figure>

      <p>
        It is pretty apparent that motorcycles can produce higher accelerations in both longitudinal and lateral directions. As you can see, heavy 1000 cc bikes can sustain also strong combinations of lateral and longitudinal accelerations.
      </p>

      <h2>Practical considerations</h2>

      <p>
        Knowing what the &lsquo;optimal&rsquo; trajectory might be and actually following it are two very different things. All the blog posts I read about the topic share one tip in common, and it sounds pretty much like: &lsquo;you need to relax&rsquo;! Yep, easy to say, but hard to execute. Descents are often cold, windy and repulsive: it&apos;s no joke.
      </p>

      <p>
        The typical ✝️ shape in the gg diagram (from less experienced riders who brake and corner as two very distinct actions) versus the 🦋 wing shape (from experts who brake and lean into the corner simultaneously) tells a fascinating story about skill level.
      </p>

      <figure>
        <img src="/images/maneuvers_adherence_ellipse.png" alt="Comparing two cornering strategies" style={{ width: '50%' }} />
        <figcaption>Comparing two cornering strategies on the gg diagram.</figcaption>
      </figure>

      <figure className="quote">
        <blockquote>
          Soon I was on the climb, breathing through my ears as I fought the undulating ascent towards my first finish line. As I sprinted over the top, the video game came to life as I attacked the descent not as something to be survived, but as a race in itself. And it&apos;s here that I must give due credit to the disc brakes. Until that descent, I have never experienced so much control over braking as I held the tires on the absolute limit of traction.
        </blockquote>
        <figcaption>&mdash; Chad Haga, after winning ITT stage 21st, Giro d&apos;Italia, June 2019</figcaption>
      </figure>

      <h2>Competitive advantages</h2>

      <p>
        It is difficult to estimate the contribution that <em>bike handling</em> can have on cycling performance. Difficult, but not impossible. Using a <a href="https://journals.sagepub.com/doi/abs/10.1177/1754337120974872" target="_blank" rel="noopener noreferrer">mathematical model</a> to simulate a race with a technical section (a 5-km section with 15-m radius hairpins interspersed with 400 m of straight road, downhill at 5%), simulations revealed that the same virtual rider could lose 1&apos;03&quot; in 5-km on a wet vs a dry road.
      </p>

      <p>
        ⏱️ <strong>Roughly we estimated that every 10% of improvement in <em>bike handling</em> could result in 13&quot; gain down a 5-km technical section.</strong>
      </p>

      <p>
        Following the simulation study, we set out to process experimental data collected on professional cyclists during an individual time trial with considerable technical content (<a href="https://www.tandfonline.com/doi/abs/10.1080/17461391.2021.1966517" target="_blank" rel="noopener noreferrer">see this link</a>). The gg diagram was assessed for 27 riders in total.
      </p>

      <p>
        ☁️ <strong>We estimated that a 10% bigger cloud in the gg diagram was associated with 20 positions in the final rank.</strong>
      </p>

      <h2>Conclusions and final thoughts</h2>

      <p>
        Whilst <em>bike handling</em> can be defined in multiple ways, I tried to converge to a single and well defined cycling ability. Ultimately, I define <em>bike handling</em> as <strong>the ability to consciously explore large portions of the gg diagram</strong>.
      </p>

      <p>
        Most of the notions and terminology I used in this post might result poorly accurate for an expert in vehicle dynamics. I didn&apos;t want to oversimplify concepts and terms, I just tried to keep only what I thought it was necessary. Even though bicycles have been introduced 200 years ago, interaction between bike and rider is still a challenging research topic.
      </p>

      <p>These blog posts have been a great source of inspiration:</p>

      <ul>
        <li><a href="https://www.rouleur.cc/blogs/the-rouleur-journal/romain-bardet-down-to-earth" target="_blank" rel="noopener noreferrer">Romain Bardet on Rouleur</a></li>
        <li><a href="https://www.cyclingnews.com/blogs/chad-haga-1/chad-haga-blog-joy-relief-and-grief-in-verona/" target="_blank" rel="noopener noreferrer">Chad Haga on Cycling News</a></li>
      </ul>
    </>
  )
}
