export default function Content() {
  return (
    <>
      <figure>
        <img src="/images/front_blog_trajectories.png" alt="Trajectories in nature" style={{ width: '100%' }} />
        <figcaption>Fascinating trajectories in nature. An eagle soaring over a prey, the seeds of a sunflower, and a group of cyclists cornering at the 2024 Milano-Sanremo race.</figcaption>
      </figure>

      <h1>Trajectories in nature</h1>

      <p>
        What does an eagle that hunts a prey have in common with a sunflower? 🦅 🌻 Well, apparently, both the trajectory of the eagle and the disposition of the seeds of the sunflower share the same mathematical structure: a spiral following a Fibonacci pattern.
      </p>

      <p>
        In nature, spirals come in many forms 🍭🐚 &hellip; but there isn&apos;t a clear classification for all of them. While some, like fern buds, are easily recognized as spirals, others aren&apos;t as obvious. What is both fascinating and evident, is that nature loves smooth transitions and graceful curves, and hates discontinuities, especially in movements. In other words: <em>Natura non facit saltus</em> (Carl Linnaeus, <em>Philosophia Botanica</em> &ndash; Chapt. 27).
      </p>

      <p>
        Interestingly, humans have conceived and created spiral shapes that don&apos;t exist in nature. One such spiral is called the <a href="https://en.wikipedia.org/wiki/Euler_spiral" target="_blank" rel="noopener noreferrer"><em>clothoid</em></a>, and indeed isn&apos;t found in nature. In the present blog post, we introduce and discuss a fascinating question: <strong>is there a case to be made that cyclists trace clothoids while descending?</strong>
      </p>

      <figure>
        <img src="/images/rotated.gif" alt="Cyclist trajectory on a descent" style={{ width: '50%' }} />
        <figcaption>The trajectory of a cyclist on a descent, as captured with a drone during a <a href="https://link.springer.com/article/10.1007/s12283-022-00386-1" target="_blank" rel="noopener noreferrer">scientific study</a>.</figcaption>
      </figure>

      <h2>A famous spiral in road and rail engineering</h2>

      <p>
        To travel along a circular path, an object needs to be subject to a centripetal acceleration (for example: the Moon circles around the Earth because of gravity; a car turns its front wheels inward to generate a centripetal force).
      </p>

      <p>
        If a vehicle traveling on a straight path were to suddenly transition to a circular path, it would require centripetal acceleration suddenly switching at the tangent point from zero to the required value; this would be difficult to achieve. Think of a train instantly moving from straight line to turning position, and the train-cars actually executing it, putting mechanical stress on the train&apos;s parts, and causing much discomfort to the passengers.
      </p>

      <p>
        In the past, on early railroads, this instant application of lateral forces was not an issue since low speeds and wide-radius curves were employed. As speeds of rail vehicles increased over the years, it became obvious that an easement is necessary, so that the centripetal acceleration increases gently (e.g. linearly) with the traveled distance. Given the expression of centripetal acceleration: a_c = v²/r, the obvious solution is to provide an easement curve whose curvature k = 1/R increases linearly with the traveled distance. Indeed, a spiral where the curvature increases linearly with the arc length is a <em>clothoid</em>, or a Euler&apos;s spiral. Nowadays, drawing clothoids instead of circles is a design choice made in road and rail engineering, particularly in designing curves and transitions.
      </p>

      <h2>Of cycling and racing lines</h2>

      <p>
        Human movement is all about optimization, and involves finding the most &ldquo;convenient&rdquo; way to plan and execute movement. In the context of movement, the human body possesses a high degree of redundancy. For instance: 1) there is an incredible number of joints in the human body, and the same end-point might be reached with a different combination of angular joint angles; 2) multiple motoneurons activate a single muscle, and multiple muscles can actuate a single articular joint, so muscle recruitment must consider the &ldquo;biomechanical&rdquo; convenience of the individual muscles (fiber typology, moment arm, position, speed of contraction, etc.); 3) on a higher level, a person might travel from point A to point B using different trajectories or a different distribution of intensity along the course.
      </p>

      <figure>
        <img src="/images/shortcut.jpeg" alt="Shortcut" style={{ width: '50%' }} />
        <figcaption>Is there a better image to explain how humans are moving around?</figcaption>
      </figure>

      <p>
        But what does &ldquo;convenient&rdquo; really mean? It could encompass different interpretations depending on the context. Generally, it&apos;s believed that humans seek to minimize energy consumption, perceived effort, or strike a balance between perceived and expected effort. The choices humans make during movement, whether it&apos;s reaching for a pen or completing a cycling trajectory, may involve a mix of conscious and unconscious factors. The true optimization goal of the human body remains a topic of debate and one of the most intriguing challenges in motor control studies.
      </p>

      <p>
        Let&apos;s focus on cycling for now, considering an individual time trial as an example. In a race, riders strive to optimize their arrival time. However, not everyone competes with the intention to win or goes full throttle due to strategic considerations such as the general classification, team responsibilities, or a lack of interest in stage victory. Hence, we might ponder: is there a common factor that applies to everyone?
      </p>

      <p>
        One common aspect often under scrutiny is the smoothness of the trajectory or its counterpart, the concept of <em>jerk</em>. Jerk, derived from acceleration, signifies the acceleration variation and can be calculated across various parameters such as body joint accelerations, torques, power output, and more. Cyclists executing abrupt movements tend to struggle with cornering effectively. Factors like rough road surfaces, wet wheel rims, sudden steering adjustments, and excessive reaction to bumps disrupt the fluidity of movements and cornering. By seeking seamless transitions between straight paths and curved trajectories, cyclists aim to minimise both performance time and jerk at the same time. This strategy promises the best overall performance, achieving a harmonious equilibrium among multiple factors, including risk and reward.
      </p>

      <p>
        In discussions about racing lines, therefore, it&apos;s reasonable to consider that experienced cyclists might trace clothoids along their routes, especially when transitioning between a straight and a circular path. Given that the road available has its own space constraints, we can say, more accurately, that cyclists follow <em>splines of clothoids</em>.
      </p>

      <figure>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/The_racing_line_-_Flickr_-_exfordy.jpg/960px-The_racing_line_-_Flickr_-_exfordy.jpg" alt="The racing line" style={{ width: '50%' }} />
        <figcaption>The racing line — not only a matter of final time minimisation, but also comfort and risk. Clothoids are often used because they provide a gradual change in curvature, which helps minimize discomfort for the driver and reduce wear and tear on vehicles. Photo credits: Brian Snelson from Hockley, Essex, England, CC BY 2.0, via Wikimedia Commons.</figcaption>
      </figure>

      <h2>Just a coincidence?</h2>

      <p>
        There seems to be something profound that links curves and trajectories in nature, not just a coincidence. From the arc of an eagle in flight to the spiral of a sunflower, these natural patterns hint at a fundamental relationship between form and function. Through the neverending renegotiation of tiny adjustments, human movements evolve and patterns such as cycling trajectories emerge. Those choices that promise greater success are embraced, learned, encoded in our neural circuitry, and eventually revisited.
      </p>

      <p>
        Human movement embodies an endless journey of exploration and discovery, delving into the depths of our existence. Yet, along this journey, some truths emerge as fundamental pillars of our ability to move: the intrinsic essence of movement itself is deeply rooted in the fabric of nature.
      </p>

      <h2>Bibliography and additional insights</h2>

      <h3>Scientific papers</h3>

      <ul>
        <li><a href="https://www.nature.com/articles/nn1309" target="_blank" rel="noopener noreferrer">Todorov E.</a></li>
        <li><a href="https://pubmed.ncbi.nlm.nih.gov/12404008/" target="_blank" rel="noopener noreferrer">Todorov and Jordan</a></li>
        <li><a href="https://www.sciencedirect.com/science/article/pii/S0005109817304508" target="_blank" rel="noopener noreferrer">Frego et al.</a></li>
      </ul>

      <h3>Practical application</h3>

      <p>
        &ldquo;OK, Andrea, but please what do I need to know this for?&rdquo; Well, let&apos;s assume you are collecting cycling GPS positions every second &mdash; how do you connect those points? Now, you should already know what I would suggest. Your best bet is to take the GPS points and fit them with a spline of clothoids.
      </p>
    </>
  )
}
